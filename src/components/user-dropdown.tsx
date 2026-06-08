
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuGroup } from "./ui/dropdown-menu";

import avatarImage from "../../public/avatar-image.jpeg";
import { FileText, LogOut, ScrollText, UserCog } from "lucide-react";

export default function UserDropdown() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
               <Avatar>
					<AvatarImage
						src={avatarImage}
						alt="Avatar image"
						className="rounded-lg"
					/>
					<AvatarFallback
						className="rounded-lg text-muted-foreground"
					>
						DB
					</AvatarFallback>
				</Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 divide-y p-0 *:p-2 **:not-last:border-b " align="end">
                <DropdownMenuGroup className="flex flex-row! items-center **:border-none gap-2">
                    <div className="flex flex-col gap-0 px-1.5">
                        <span className="text-md font-semibold">username</span>
                        <span className="text-xs text-muted-foreground">user@example.com</span>
                    </div> 
                </DropdownMenuGroup>
                <DropdownMenuGroup className="*:border-none">
                    <DropdownMenuItem className="hover:bg-muted dark:hover:bg-muted/50 gap-2">
                        <UserCog className="size-4" />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-muted dark:hover:bg-muted/50 gap-2">
                        <ScrollText className="size-4" />
                        Changelog
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup className="*:border-none">
                    <DropdownMenuItem className="hover:bg-muted dark:hover:bg-muted/50 gap-2" variant="destructive">
                        <LogOut className="size-4" />
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}