export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7fde1bf0aa9e1b35384d9b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uw251hm4',
                  apiId: 'e2fd4d4c-2671-4446-9b1c-45033adb5cd6'
                },
                {
                  buildHookId: '5e7fde1b22d04326427a2a9f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nwjus7u5',
                  apiId: '3422ee02-c667-45d2-833f-579f09bc1862'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabrielkimotho/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nwjus7u5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
