<template>
  <div class="wrapper">
    <view-box ref="viewBox">
      <div class="content" v-html="body"></div>
    </view-box>
  </div>
</template>
<script>
import { ViewBox } from 'vux'
import Vue from 'vue'
export default {
  components: {
    ViewBox
  },
  data() {
    return {
      body: '',
      image: '',
      title: '',
      copyRight: []
    }
  },
  beforeRouteEnter(to, from, next) {
    Vue.http.get('/api/4/news/' + to.params.article_id)
      .then(function(res) {
        let _body = res.data
        next(vm => {
          vm.body = _body.body
          vm.image = _body.image
          vm.title = _body.title
          vm.copyRight = vm.copyRight.concat(_body.recommenders)
          let _head = document.getElementsByTagName('head')[0]
          _body.css.forEach(function(item) {
            let _cssEle = document.createElement('link')
            _cssEle.href = item
            console.log(_cssEle)
            _head.appendChild(_cssEle)
          })
        })
      })
  }
}
</script>
<style lang="stylus">
@import'./article.styl'
</style>