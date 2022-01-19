// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      // 可以使用 strapi
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100默认请求多少条数据
        contentTypes: ['article',"tag"],//请求数据的类型也就是请求集合的名称
        singleTypes: ['General'],//请求strapi数据单个数据类型
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'king',
        //   password: 'Abc123456'
        // }
      }
    }
  ],
  templates: {
    // BlogPost: '/blog/:year/:month/:day/:slug'
    StrapiArticle:[
      {
        path:"/post/:id",
        component:"./src/templates/Post.vue"
      }
    ],
    StrapiTag:[
      {
        path:"/tag/:id",
        component:"./src/templates/Tag.vue"
      }
    ]
  }
}