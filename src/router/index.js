const main = r => require.ensure([], () => r(require('./../page/main/main.vue')), 'main')

export default [{
    path: '/',
    name: 'main',
    component: main
  }]