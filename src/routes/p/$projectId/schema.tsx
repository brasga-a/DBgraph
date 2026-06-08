import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/p/$projectId/schema')({ component: SchemaEditor });

function SchemaEditor() {
  return <div />;
}
