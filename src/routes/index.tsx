import { ModeToggle } from '#/components/mode-toggle';
import { Badge } from '#/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '#/components/ui/breadcrumb';
import { Button } from '#/components/ui/button';
import { createFileRoute } from '@tanstack/react-router'
import { ReactFlow, Background, Controls } from '@xyflow/react'
import '@xyflow/react/dist/style.css';

import { Database, DotIcon, Share } from 'lucide-react';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/*top header */}
      <header className="relative z-10 flex items-center justify-between px-4 shrink-0 h-10 border-b bg-sidebar">
        <div className="flex items-center gap-4">

          {/* Branding */}

          <div className="flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[-0.01em] text-white antialiased [font-feature-settings:'ss01','cv11']">
            {/* <span className="size-4 bg-radial-[at_50%_75%] from-blue-300 via-blue-500 to-blue-700 to-90% rounded-[3px]"></span> */}
            <Database className="size-4 text-blue-500"/>
            DBgraph
          </div>

          <Breadcrumb>
            <BreadcrumbList className="text-xs">
              <BreadcrumbItem>
                username
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem className="text-foreground font-medium">
                project-name
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

        </div>

        {/* Version - Theme - Play */}

        <div className="flex items-center gap-2">

          <Badge variant="outline" className="rounded-md gap-2 dark:bg-sidebar-accent">
            <div className='relative flex size-1.5'>
              <div className="absolute inline-flex size-1.5 rounded-full bg-blue-500 animate-ping [animation-duration:3000ms] opacity-75"></div>
              <div className="relative inline-flex size-1.5 rounded-full bg-blue-500"></div>
            </div>
            8f3a2c9
          </Badge>

          <ModeToggle/>
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

      {/* canvas */}
      <div>
        <div className="h-screen w-screen">
          {/* <ReactFlow>
            <Background />
            <Controls />
          </ReactFlow> */}
        </div>
      </div>
    </div>
    
  );
}
