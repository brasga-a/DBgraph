import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/p/$projectId/history')({ component: History });

function History() {
  return <div />;
}
