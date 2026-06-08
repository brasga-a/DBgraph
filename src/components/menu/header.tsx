import { Database, Share, Share2 } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { ProjectSelector } from "../project-selector";
import { Badge } from "../ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import Snapshot from "../snapshot";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


import UserDropdown from "../user-dropdown";

export function Header() {
	return (
		<header className="relative z-10 flex h-12 shrink-0 items-center justify-between border-b bg-sidebar px-4">
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
				
				<Snapshot/>
				<ModeToggle />
				<Button
					variant="ghost"
					size="icon"
					className="relative rounded-md"
					title="Share"
					aria-label="Share"
				>
					<Share2 className="size-3.5" />
				</Button>
				<Button variant="outline" className="rounded-md" size="sm">
					Save
				</Button>
				<Button variant="default" className="rounded-md" size="sm">
					Run
				</Button>
				<UserDropdown/>
			</div>
		</header>
	);
}
