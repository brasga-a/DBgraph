import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/p/$projectId/data')({ component: DataViewer });

function DataViewer() {
  return <div />;
}
