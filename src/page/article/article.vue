<template>
  <div class="wrapper">
    <view-box ref="viewBox">
      <div class="news-content" v-html="body"></div>
    </view-box>
  </div>
</template>
<script>
import {
  ViewBox
} from 'vux'
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
        let _head = document.getElementsByTagName('head')[0]
        _body.css.push('http://daily.zhihu.com/css/share.css?v=5956a')
        _body.css.forEach(function(item) {
          let _cssEle = document.createElement('link')
          _cssEle.rel = "stylesheet"
          _cssEle.href = item
          console.log(_cssEle)
          _head.appendChild(_cssEle)
        })
        let _$headline =
          `<div class="img-wrap">
                <h1 class="headline-title">${_body.title}</h1>
                <span class="img-source">图片${_body.image_source}</span>
                <img src="${_body.image}" alt="">
                <div class="img-mask"></div>
            </div>`
        next(vm => {
          vm.body = _body.body
          vm.image = _body.image
          vm.title = _body.title
          vm.copyRight = vm.copyRight.concat(_body.recommenders)
          vm.$nextTick(function() {
            document.querySelector('.headline').innerHTML = _$headline
            console.log(document.querySelector('.headline'))
          })
        })
      })
  }
}
</script>
<style lang="stylus">
@import'./article.styl'
</style>