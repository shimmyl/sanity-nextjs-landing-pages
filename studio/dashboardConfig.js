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
                  buildHookId: '609461df28f84b249c340e8c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6bp375u7',
                  apiId: '4cf173d8-aa73-4fac-9504-2cfba0abc1ff'
                },
                {
                  buildHookId: '609461e08ffba6203c0100ab',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5nnqm5yn',
                  apiId: '43d11bcc-e6f8-4dee-a318-9796e26a5242'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shimmyl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5nnqm5yn.netlify.app', category: 'apps'}
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
