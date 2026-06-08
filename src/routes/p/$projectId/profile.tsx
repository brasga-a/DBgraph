import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/p/$projectId/profile')({ component: Profile });

function Profile() {
  return <div />;
}
