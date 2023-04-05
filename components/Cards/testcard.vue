<template>
    <div class="blogslider">
      <slick ref="slick" :options="slickOptions">
        <div class="review"     
             v-for="(blog, i) in blogs" :index="i"
             :key="blog.slug">
            <v-card class="rounded-xl elevation-0 post "
                    rounded-xl
                    elevation-0
            >
            <NuxtLink :to="localePath(blog.path)">
              <div class="postImage">
                  <v-img
                    class="rounded-xl elevation-0 lazy"
                    v-if="blog.img"
                    :src="require(`~/static/images/blog/${blog.img}`)"
                    :alt="blog.alt"
                    height="450"
                  >
                    <template slot="placeholder">
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-progress-circular
                          width="2"
                          size="100"
                          color="default"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>

                  </v-img>

              </div>

              <div class="postDetails">
                <div class="postDetails">
                  <span class="postReview" data-cat="mid">2.6</span>

                  <span class="postCat" data-cat="News">
                    <a href="/search/label/News" tabindex="-1">News</a>
                  </span>

                  <h3 class="postTitle">
                    <a href="" title="Essential Tech Tips for Your Business" tabindex="-1">Essential Tech Tips for Your Business</a>
                  </h3>

                  <div class="postMeta">
                    <span class="postAuthor">seb issam</span>
                    <span class="postDate">
                      <time class="published" datetime="2022-05-02T03:27:00.000-07:00">7 months ago</time>
                    </span>
                  </div>
                </div>

              </div>

            </NuxtLink>

            </v-card>


          </div>


      </slick>

    </div>




</template>

<script>
export default {
  name: "testcard",
  props: ['blogs'],
  components: {
    Slick: () => import('vue-slick'),
  },
  data(){
    return {
      item: 0,
      slickOptions: {
        slidesToShow: 4,
        centerMode: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 3000,
        autoplay: false,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    }
  },
}
</script>

<style scoped lang="scss">
.postDetails {
    bottom: 0;
    padding: 28px;
    position: absolute;
    right: 0;
    left: 0;
}
 .postReview, .postCat a {
    color: #fff;
    padding: 2px 4px;
    border-radius: 4px;
}

[data-cat="mid"] {
    background-image: linear-gradient(to bottom, #eab919 0%,#db870a 100%);
    color: #fff;
}
.postReview {
    position: relative;
    display: inline-flex;
    font-size: .85em;
    font-weight: 500;
    margin: 0 5px 0 0;
    text-transform: uppercase;
}
.postCat {
    position: relative;
    font-size: .85em;
    font-weight: 500;
    text-transform: uppercase;
}
.postTitle {
    font-size: 1.1em;
    font-weight: 600;
    margin: 10px 0;
}
.postImage {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    height: 100%;
    width: 100%;
}
.postMeta {
    font-size: .8em;
    color: #999;
    text-transform: uppercase;
}
.postImage  {
   width: 100%;
    transition: transform 0.3s ease-out;
}
.postDetails a{
  color: #fff;
}
/*.postTitle a{
  background: linear-gradient(to right, currentColor 0%, currentColor 100%);
}*/
.postTitle a:hover {
  background-size: 100% 1px;
}

.postImage .v-image:after {
   content: "";
    background: linear-gradient(to bottom, rgba(50, 50, 50, 0) 0, rgba(16, 15, 15, 0.91) 89%, rgba(16, 15, 15, 0.93) 93%);
    bottom: 0;
    display: block;
    opacity: 0.93;
    position: absolute;
    top: 15%;
    transition: 0.2s all ease-in-out;
    width: 100%;
}
.post{
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background-color: transparent !important;
}
.post .v-image{
  transition: all 0.5s ease-in-out;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;

}

.post:hover .postImage{
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
}
.postDetails{
  transition: all 0.5s ease-in-out;
}
.post:hover  .postDetails{
  transition: all 0.5s ease-in-out;
  transform: translatey(-4%);
}

.review{
  position: relative;
  overflow: hidden;
}

.postTitle a:hover {
    background-size: 100% 1px;
}
.postTitle a{
  background: linear-gradient(to right, currentColor 0%, currentColor 100%);
    background-size: 0px 1px;
}

.postTitle a{
    display: inline;
    padding-bottom: 0.3em;
    background-repeat: no-repeat;
    background-position: left 85%;
    transition: background 0.3s;

}


</style>
