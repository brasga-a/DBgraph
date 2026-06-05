
import { TopHeader } from '#/components/top-header';
import { createFileRoute } from '@tanstack/react-router'
import { ReactFlow, Background, Controls } from '@xyflow/react'
import '@xyflow/react/dist/style.css';

import { Database, DotIcon, Share } from 'lucide-react';

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/*top header */}
      <TopHeader/>
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
