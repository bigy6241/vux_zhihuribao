const main = r => require.ensure([], () => r(require('./../page/main/main.vue')), 'main')
const article = r => require.ensure([], () => r(require('./../page/article/article.vue')), 'article')
export default [{
    path: '/',
    name: 'main',
    component: main
  },{
    path:'/article/:article_id',
    name:'article',
    component: article
  }]