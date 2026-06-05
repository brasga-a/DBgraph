import { ChevronRight, ChevronsUpDown, Folder, Network, Plus, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/components/mockup/projects";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Kbd } from "./ui/kbd";

function getLastActivityAt(project: Project): Date {
	const opened = new Date(project.lastOpenedAt).getTime();
	const edited = project.lastEditedAt
		? new Date(project.lastEditedAt).getTime()
		: 0;

	return new Date(Math.max(opened, edited));
}

function getLastActivityType(project: Project): "opened" | "edited" {
	const opened = new Date(project.lastOpenedAt).getTime();
	const edited = project.lastEditedAt
		? new Date(project.lastEditedAt).getTime()
		: 0;

	return edited > opened ? "edited" : "opened";
}

function getProjectActivityLabel(project: Project) {
	const activityType = getLastActivityType(project);
	const activityAt = getLastActivityAt(project).getTime();
	const diffMs = Math.max(Date.now() - activityAt, 0);
	const minute = 60 * 1000;
	const hour = 60 * minute;
	const day = 24 * hour;

	let value: number;
	let unit: string;

	if (diffMs < hour) {
		value = Math.max(1, Math.round(diffMs / minute));
		unit = value === 1 ? "minute" : "minutes";
	} else if (diffMs < day) {
		value = Math.round(diffMs / hour);
		unit = value === 1 ? "hour" : "hours";
	} else if (diffMs < 30 * day) {
		value = Math.round(diffMs / day);
		unit = value === 1 ? "day" : "days";
	} else {
		value = Math.round(diffMs / (30 * day));
		unit = value === 1 ? "month" : "months";
	}

	return `${activityType === "edited" ? "Edited" : "Opened"} ${value} ${unit} ago`;
}

export function ProjectSelector() {
	const [projectSearch, setProjectSearch] = useState("");
	const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
	const [currentProjectId, setCurrentProjectId] = useState(projects[0]?.id);
	const [projectListGradient, setProjectListGradient] = useState({
		bottom: false,
		top: false,
	});
	const projectListRef = useRef<HTMLDivElement>(null);
	const projectSearchInputRef = useRef<HTMLInputElement>(null);

	function handleProjectSearchKeyDown(
		event: React.KeyboardEvent<HTMLInputElement>,
	) {
		if (event.key === "Escape") {
			setIsProjectMenuOpen(false);
			return;
		}

		event.stopPropagation();
	}

	const query = projectSearch.trim().toLowerCase();
	const currentProject = projects.find(
		(project) => project.id === currentProjectId,
	);

	const recentProjects = useMemo(() => {
		return projects
			.filter((project) => project.id !== currentProjectId)
			.sort(
				(a, b) =>
					getLastActivityAt(b).getTime() - getLastActivityAt(a).getTime(),
			)
			.slice(0, 5);
	}, [currentProjectId]);

	const searchResults = useMemo(() => {
		if (!query) {
			return [];
		}

		return projects
			.filter((project) => project.slug.toLowerCase().includes(query))
			.sort((a, b) => {
				const aSlug = a.slug.toLowerCase();
				const bSlug = b.slug.toLowerCase();
				const aStarts = aSlug.startsWith(query);
				const bStarts = bSlug.startsWith(query);

				if (aStarts && !bStarts) return -1;
				if (!aStarts && bStarts) return 1;

				return (
					getLastActivityAt(b).getTime() - getLastActivityAt(a).getTime()
				);
			});
	}, [query]);

	const displayedProjects = query ? searchResults : recentProjects;
	const showProjectListGradient = displayedProjects.length >= 4;

	function updateProjectListGradient(element: HTMLDivElement | null) {
		if (!element || !showProjectListGradient) {
			setProjectListGradient({ bottom: false, top: false });
			return;
		}

		const nextGradient = {
			bottom:
				Math.ceil(element.scrollTop + element.clientHeight) <
				element.scrollHeight,
			top: element.scrollTop > 0,
		};

		setProjectListGradient((currentGradient) => {
			if (
				currentGradient.bottom === nextGradient.bottom &&
				currentGradient.top === nextGradient.top
			) {
				return currentGradient;
			}

			return nextGradient;
		});
	}

	useEffect(() => {
		function handleProjectShortcut(event: KeyboardEvent) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setIsProjectMenuOpen(true);
			}
		}

		window.addEventListener("keydown", handleProjectShortcut);

		return () => {
			window.removeEventListener("keydown", handleProjectShortcut);
		};
	}, []);

	useEffect(() => {
		if (!isProjectMenuOpen) {
			return;
		}

		requestAnimationFrame(() => {
			projectSearchInputRef.current?.focus();
		});
	}, [isProjectMenuOpen]);

	useEffect(() => {
		if (!isProjectMenuOpen) {
			return;
		}

		requestAnimationFrame(() => {
			updateProjectListGradient(projectListRef.current);
		});
	}, [displayedProjects.length, isProjectMenuOpen]);

	return (
		<DropdownMenu
			highlightItemOnHover={false}
			open={isProjectMenuOpen}
			onOpenChange={setIsProjectMenuOpen}
		>
			<DropdownMenuTrigger className="flex items-center justify-center gap-1.5 rounded-[4px] px-1.5 py-1 font-semibold text-foreground/90 hover:bg-accent/70 hover:text-foreground">
				{currentProject?.slug ?? "project-name"}
				<ChevronsUpDown className="size-3" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-xs p-0" align="start">
				<DropdownMenuGroup className="p-2 border-b">
					<InputGroup className="border-none! bg-transparent! ring-0!">
						<InputGroupInput
							ref={projectSearchInputRef}
							placeholder="Search project..."
							value={projectSearch}
							onChange={(event) => setProjectSearch(event.target.value)}
							onKeyDown={handleProjectSearchKeyDown}
						/>
						<InputGroupAddon>
							<Search />
						</InputGroupAddon>
						<InputGroupAddon align="inline-end">
							<Kbd>⌘</Kbd>
							<Kbd>Ctrl + K</Kbd>
						</InputGroupAddon>
					</InputGroup>
				</DropdownMenuGroup>
                {!query && currentProject && (
                <DropdownMenuGroup className="p-2">
                    <DropdownMenuLabel className="text-[11px] text-muted-foreground">
                        CURRENT PROJECT
                    </DropdownMenuLabel>
                    <div className="bg-blue-500/10 p-2 text-sm rounded-md flex justify-between items-center">
                        <div className="flex items-center gap-3 px-2">
                            <Network className="size-5.5 text-blue-500" />
                            <div>
                                {currentProject.slug}
                                <div className="text-xs text-muted-foreground">
                                    {getProjectActivityLabel(currentProject)}
                                </div>
                            </div>
                        </div>
                        <Badge variant="default" className="text-xs bg-transparent border-blue-400 dark:border-none dark:bg-blue-500/20 text-blue-500">
                            Current
                        </Badge>
                    </div>
                </DropdownMenuGroup>
                )}
				<div className="relative">
					<div
						className={cn(
							"pointer-events-none absolute inset-x-0 top-0 z-10 h-4",
							projectListGradient.top &&
								"bg-gradient-to-b from-popover to-transparent",
						)}
					/>
					<DropdownMenuGroup
						ref={projectListRef}
						className="max-h-[380px] overflow-y-auto px-2 py-2 border-b"
						onScroll={(event) => updateProjectListGradient(event.currentTarget)}
					>
                        <DropdownMenuLabel className="text-[11px] text-muted-foreground">
                            {query ? "SEARCH RESULTS" : "RECENT PROJECTS"}
                        </DropdownMenuLabel>
						{displayedProjects.length > 0 ? (
							displayedProjects.map((project) => (
								<DropdownMenuItem
									key={project.id}
									className="cursor-pointer gap-2.5 p-2 hover:bg-accent/80 hover:text-accent-foreground justify-between"
									onClick={() => {
										setCurrentProjectId(project.id);
										setProjectSearch("");
										setIsProjectMenuOpen(false);
									}}
								>
                                    <div className="flex items-center gap-3 px-2">
                                        <Network className="size-5 text-blue-500/90" />
                                        <div className="min-w-0">
                                            <div className="truncate">{project.slug}</div>
                                            <div className="truncate text-xs text-muted-foreground">
                                                {getProjectActivityLabel(project)}
                                            </div>
                                        </div>
                                    </div>
                                    {query && project.id === currentProjectId ? (
                                        <Badge variant="default" className="text-xs bg-transparent border-blue-400 dark:border-none dark:bg-blue-500/20 text-blue-500">
											Current
										</Badge>
                                    ) : (
                                        <ChevronRight className="size-4 text-muted-foreground" />
                                    )}
								</DropdownMenuItem>
							))
						) : (
							<div className="px-2 py-6 text-center text-sm text-muted-foreground">
								No projects found
							</div>
						)}
					</DropdownMenuGroup>
					<div
						className={cn(
							"pointer-events-none absolute inset-x-0 bottom-0 z-10 h-4",
							projectListGradient.bottom &&
								"bg-gradient-to-t from-popover to-transparent",
						)}
					/>
				</div>
				<DropdownMenuGroup className="px-2 my-2">
					<Button variant="ghost" size="sm" className="w-full rounded-sm justify-start gap-3 px-2 py-4">
						<Plus className="size-5 text-muted-foreground" />
						Create project
					</Button>
                    <Button variant="ghost" size="sm" className=" w-full rounded-sm justify-between gap-3 px-2 py-4">
                        <span className="flex items-center gap-3">
                            <Folder className="size-5 text-muted-foreground" />
                            Manage projects
                        </span>
                        <ChevronRight className="size-4 text-muted-foreground" />
					</Button>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
