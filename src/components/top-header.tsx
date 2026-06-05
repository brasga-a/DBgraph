import { Database, Share } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { ProjectSelector } from "./project-selector";
import { Badge } from "./ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";

export function TopHeader() {
	return (
		<header className="relative z-10 flex h-10 shrink-0 items-center justify-between border-b bg-sidebar px-4">
			<div className="flex items-center gap-4">
				{/* Branding */}

				<div className="flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[-0.01em] antialiased [font-feature-settings:'ss01','cv11']">
					{/* <span className="size-4 bg-radial-[at_50%_75%] from-blue-300 via-blue-500 to-blue-700 to-90% rounded-[3px]"></span> */}
					<Database className="size-4 text-blue-500" />
					DBgraph
				</div>

				<Breadcrumb>
					<BreadcrumbList className="gap-1 text-xs">
						<BreadcrumbItem className="px-1.5">Personal</BreadcrumbItem>
						<BreadcrumbSeparator className="">/</BreadcrumbSeparator>
						<BreadcrumbItem>
							<ProjectSelector />
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Version - Theme - Play */}

			<div className="flex items-center gap-2">
				<Badge variant="outline" className="gap-2 rounded-md dark:bg-sidebar-accent border-border-2">
					<div className="relative flex size-1.5">
						<div className="absolute inline-flex size-1.5 animate-ping rounded-full bg-blue-500 opacity-75 [animation-duration:3000ms]"></div>
						<div className="relative inline-flex size-1.5 rounded-full bg-blue-500"></div>
					</div>
					8f3a2c9
				</Badge>

				<ModeToggle />
				<Button
					variant="ghost"
					size="icon"
					className="relative rounded-md"
					aria-label="Share"
				>
					<Share className="size-3.5" />
				</Button>

				<Button className="rounded-md" size="sm">
					Run
				</Button>
			</div>
		</header>
	);
}
