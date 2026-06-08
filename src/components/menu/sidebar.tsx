import { Box, GitBranch, SquareDashedMousePointer, SquareMousePointer, Table } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Kbd } from "../ui/kbd";
import { Separator } from "../ui/separator";

export default function Sidebar() {
    return (
        <aside className="relative z-0 h-full w-12 flex flex-col items-center justify-start gap-2 not-first:shrink-0 border-r bg-sidebar py-2">
            <TooltipProvider delay={0}>
                <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-lg" className="rounded-md"/>}>
                        <Box className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="rounded-sm bg-foreground text-background text-xs" sideOffset={10}>
                        Project Overview
                        <Separator orientation="vertical" className="bg-muted-foreground/50 mx-1" />
                        <div className="flex items-center gap-1.5 mr-1">
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">G</Kbd>
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">O</Kbd>
                        </div>
                    </TooltipContent>
                </Tooltip>
                
                <Separator className="w-auto! px-3 bg-border-3"/>

                <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-lg" className="rounded-md"/>}>
                        <SquareMousePointer className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="rounded-sm bg-foreground text-background text-xs" sideOffset={10}>
                        Schema Editor
                        <Separator orientation="vertical" className="bg-muted-foreground/50 mx-1" />
                        <div className="flex items-center gap-1.5 mr-1">
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">G</Kbd>
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">S</Kbd>
                        </div>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-lg" className="rounded-md"/>}>
                        <SquareDashedMousePointer className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="rounded-sm bg-foreground text-background text-xs" sideOffset={10}>
                        Sketch Editor
                        <Separator orientation="vertical" className="bg-muted-foreground/50 mx-1" />
                        <div className="flex items-center gap-1.5 mr-1">
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">G</Kbd>
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">K</Kbd>
                        </div>
                    </TooltipContent>
                </Tooltip>

                <Separator className="w-auto! px-3 bg-border-3"/>

                <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-lg" className="rounded-md"/>}>
                        <Table className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="rounded-sm bg-foreground text-background text-xs" sideOffset={10}>
                        Data Viewer
                        <Separator orientation="vertical" className="bg-muted-foreground/50 mx-1" />
                        <div className="flex items-center gap-1.5 mr-1">
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">G</Kbd>
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">D</Kbd>
                        </div>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-lg" className="rounded-md"/>}>
                        <GitBranch className="size-5" />
                    </TooltipTrigger>
                    <TooltipContent side="right" align="center" className="rounded-sm bg-foreground text-background text-xs" sideOffset={10}>
                        History
                        <Separator orientation="vertical" className="bg-muted-foreground/50 mx-1" />
                        <div className="flex items-center gap-1.5 mr-1">
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">G</Kbd>
                            <Kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">H</Kbd>
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </aside>
    )
}
