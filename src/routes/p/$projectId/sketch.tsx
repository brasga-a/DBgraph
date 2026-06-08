import { createFileRoute } from '@tanstack/react-router';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export const Route = createFileRoute('/p/$projectId/sketch')({ component: SketchEditor });

function SketchEditor() {
  return (
    <div className="h-full w-full">
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
