const mapping: Record<string, string> = {
  invitations: 'invitation',
  markas: 'marka',
  projects: 'project',
  reviews: 'review',
  submissions: 'submission',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
