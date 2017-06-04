<template>
  <div>
    <panel header="图文组合列表" :list="list" :type="type"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'

export default {
  components: {
    Panel
  },
  data () {
    return {
      type: '1',
      list: []
    }
  },
  created () {
   this.getLatestNews() 
  },
  methods: {
    getLatestNews() {
      let self = this
      this.$http.get('/api/4/news/latest')
      .then(function(res){
        let body = res.data
        self.list = body.stories.map(function(item){
          let _item = {}
          _item['src'] = item.images[0]
          _item['title'] = item.title
          _item['desc'] = ''
          _item['url'] = {
            path:'/article/' + item.id,
            replace:false
          }
          return _item
        })
      })
      .catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus">
@import'./main.styl'
</style>