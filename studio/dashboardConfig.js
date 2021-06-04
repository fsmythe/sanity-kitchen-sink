export default {
  widgets: [
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
                  buildHookId: '60ba193e67d6772046bf5b4f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1nu9bv6p',
                  apiId: '6af41858-3f72-4174-9913-aa5e597e009b'
                },
                {
                  buildHookId: '60ba193ebf27f956c3bf4bfd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9n3jcphk',
                  apiId: '15c4f4e3-6bfb-4395-bf3c-77856338e765'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fsmythe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9n3jcphk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
