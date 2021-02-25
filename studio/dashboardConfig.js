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
                  buildHookId: '6037183065eb0400a88e1846',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hsdzzz1i',
                  apiId: '02c7b1d3-87ef-469f-8cbb-1e41ab425f89'
                },
                {
                  buildHookId: '6037183092e47b008d969895',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uqpzx62x',
                  apiId: '36b0592c-c6c6-4c11-ad23-8d76a7a354e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanadokic/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uqpzx62x.netlify.app', category: 'apps'}
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
