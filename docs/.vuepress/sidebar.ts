export const sidebar = {
  '/': [
    '/get-started',
    {
      text: 'Project',
      collapsible: true,
      children: ['/project/', '/project/history', '/project/values'],
    },
    {
      text: 'Philosophy',
      collapsible: true,
      children: [
        '/philosophy/',
        '/philosophy/stars',
        '/philosophy/layout',
        '/philosophy/public-api',
        '/philosophy/no-shorts',
        '/philosophy/moderation',
      ],
    },
    {
      text: 'Developers',
      collapsible: true,
      children: [
        '/developers/',
        '/developers/frontend',
        '/developers/backend',
        '/developers/architecture',
        '/developers/design-choices',
      ],
    },
  ],
};
