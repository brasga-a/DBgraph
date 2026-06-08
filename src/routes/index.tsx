import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/p/$projectId/sketch', params: { projectId: 'agile-nebula-8291' } })
  },
})
