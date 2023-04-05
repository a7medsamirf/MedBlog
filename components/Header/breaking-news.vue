<template>
  <div class="ticker box">
    <article class="media">
      <div class="media-content d-flex">
        <div class="me-3">
          <span class="badge bg-primary p-2 px-3">Trending:</span>
        </div>
        <transition name="fade" tag="div" mode="out-in">
          <a class="news" href="#" v-if="news[0]" key="0">There has been a massive explosion at the cheese factory</a>
          <a class="news" href="#" v-if="news[1]" key="1">Bob is on fire</a>
          <a class="news" href="#" v-if="news[2]" key="2">Look its Superman!</a>
        </transition>
      </div>
    </article>
  </div>
</template>


<script>
export default {
  name: "breaking-news",

  data () {
    return {
      tickerLocation: 0,
      news: [
        true,
        false,
        false,
      ]
    }
  },
  created: function() {
    setInterval(this.updateTicker, 5000);
  },
  methods: {
    updateTicker: function() {
      var removed = this.news.pop();
      this.news.unshift(removed);
    }
  }
}
</script>

<style scoped lang="scss">
span.badge.bg-primary{
  background-color: rgba(33, 99, 232, 1) !important;
  padding: 5px;
  border-radius: 5px;
}
.media-content {
  padding: 5px;
}

.time {
  color: #33A3F1;
}

.news {
  color: #fff !important;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>

