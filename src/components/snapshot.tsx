import {
	ChevronRight,
	Code2,
	GitBranch,
	GitCommitVertical,
} from "lucide-react";
import { cn } from "#/lib/utils";
import { revisionHistory } from "./mockup/snapshot";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function formatRevisionTime(createdAt: string, isCurrent: boolean) {
	if (isCurrent) {
		return "just now";
	}

	const created = new Date(createdAt);
	const diffMs = Math.max(Date.now() - created.getTime(), 0);
	const minute = 60 * 1000;
	const hour = 60 * minute;

	if (diffMs < hour) {
		const minutes = Math.max(1, Math.round(diffMs / minute));
		return `${minutes} min ago`;
	}

	if (diffMs < 24 * hour) {
		const hours = Math.round(diffMs / hour);
		return `${hours} hr ago`;
	}

	return created.toLocaleString("en-US", {
		day: "numeric",
		hour: "2-digit",
		hour12: false,
		minute: "2-digit",
		month: "short",
	});
}

export default function Snapshot() {
	const latestRevisions = revisionHistory.slice(0, 5);
	const currentRevision = latestRevisions[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Badge
					variant="outline"
					className="gap-2 rounded-md dark:bg-sidebar-accent border-border-2"
				>
					<div className="relative flex size-1.5">
						<div className="absolute inline-flex size-1.5 animate-ping rounded-full bg-blue-500 opacity-75 [animation-duration:3000ms]"></div>
						<div className="relative inline-flex size-1.5 rounded-full bg-blue-500"></div>
					</div>
					{currentRevision.shortHash}
				</Badge>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-lg rounded-xl border bg-popover/95 p-0 shadow-2xl backdrop-blur"
				align="end"
			>
				<DropdownMenuGroup className="space-y-1 p-2">

                    <DropdownMenuLabel className=" font-mono text-muted-foreground/75">
                        RECENT SNAPSHOTS
                    </DropdownMenuLabel>

					{latestRevisions.map((revision, index) => {
						const isCurrent = index === 0;

						return (
							<div
								key={revision.id}
								className={[
									"flex items-center justify-between gap-2 rounded-md p-2 text-sm",
									!isCurrent && "rounded-none",
									isCurrent &&
										" bg-blue-500/10 text-foreground ",
								]
									.filter(Boolean)
									.join(" ")}
							>
                                <div className="flex items-center gap-2.5">
                                    <GitCommitVertical className={cn("size-5 text-muted-foreground", isCurrent && "text-blue-500")} />
                                    <div className=" shrink-0 font-mono">
                                        {revision.shortHash}
                                    </div>
                                    <div className="min-w-0 flex-1 truncate text-muted-foreground">
                                        {revision.message}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="shrink-0 text-muted-foreground">
                                        {formatRevisionTime(revision.createdAt, isCurrent)}
                                    </div>
                                    {isCurrent && (
                                        <Badge variant="default" className="text-xs bg-transparent border-blue-400 dark:border-none dark:bg-blue-500/20 text-blue-500">
                                            Current
                                        </Badge>
                                    )}
                                </div>
							</div>
						);
					})}
				</DropdownMenuGroup>

				<DropdownMenuGroup className="border-t p-2">
					<Button variant="ghost" size="sm" className="w-full rounded-sm justify-start gap-3 px-2 py-4">
						<Code2 className="size-5 text-muted-foreground" />
						View snapshot JSON
					</Button>
                    <Button variant="ghost" size="sm" className="w-full rounded-sm justify-between gap-3 px-2 py-4">
                        <span className="flex items-center gap-3">
                            <GitBranch className="size-5 text-muted-foreground" />
                            Manage history
                        </span>
                        <ChevronRight className="size-4 text-muted-foreground" />
					</Button>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
