<template>
  <article class="slug-wrap">

    <div class="inner d-flex align-center justify-center">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <div class="post-content pa-3 v-card rounded-lg">
            <div class="blog-title pa-5">
              <h2 class="use-text-title2 title-color-default  text-xs-center">{{ blog.title }}</h2>

              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <author :author="blog.author" />

                <v-chip>  <span><v-icon small color="primary" class="fi fi-rr-calendar mr-3"></v-icon></span>
                  {{ formatDate(blog.updatedAt) }}</v-chip>
              </v-chip-group>

            </div>

          <v-img
            height="400"
            alt=""
            :src="require(`~/static/images/blog/${blog.img}`)"
          ></v-img>


     <!-- content from markdown -->

      <nuxt-content :document="blog" />
            <!-- content author component -->



            <!-- prevNext component -->


            <blog-comment />

      <!-- prevNext component -->
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="sidebar-widget sidebar-wrap pa-3">
<!--            <div class="widget-tittle ma-2 v-card rounded-lg">
              <h2>Categories</h2>
              <span></span>
            </div>-->

            <div class="sidebar-widget mb-5">
              <joinus />
            </div>
          </div>



        </v-col>

      </v-row>
    </v-container>
    </div>
  </article>
</template>

<script>
import BlogComment from "~/components/blog/blog-comment";
import PrevNext from "~/components/blog/PrevNext";
import Author from "~/components/blog/Author";
import AppSearchInput from '~/components/widget/AppSearchInput';
import joinus from '~/components/widget/Joinus';

export default {
  components: {Author, PrevNext, BlogComment, AppSearchInput, joinus},
  async asyncData({ $content, params, app, error, route, redirect }) {
    const slug = params.slug;
    const blog = await $content(`${app.i18n.locale}/blog`, slug)
    .fetch()
    .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: blog.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

   return {
     blog,
     tags,
    }
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.blog.title,
    };
  },
}
</script>

<style scoped lang="scss">


</style>
