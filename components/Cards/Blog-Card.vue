<template>
  <div class="blog-card">
            <v-row>
              <v-col v-for="blog in blogs" :key="blog.slug"

                      sm="12"
                      md="12"
              >
                <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>

                <v-card
                elevation="0"
                  v-if="!data_loaded"
                  class="d-flex align-center post-outer">

                  <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                    <div class="mx-auto">
                      <NuxtLink :to="localePath(blog.path)">
                        <div class="blog-img mx-auto">
                          <v-img
                            class="rounded-lg"
                            v-if="blog.img"
                            :src="require(`~/static/images/blog/${blog.img}`)"
                            :alt="blog.alt"
                            height="200"
                            width="200"
                          ></v-img>


                        </div>
                      </NuxtLink>


                    </div>
       <!--
                    <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider> -->

                    <div class="post-content pa-5">
                      <div class="sb-badge">
                          <a
                            class="ma-2 white&#45;&#45;text "
                            color="primary"
                            label
                            v-for="tag in blog.tags" :key="tag"
                          >
                            {{ tag }}
                          </a>
                        </div>
                      <NuxtLink :to="localePath(blog.path)">
                        <v-card-title class="font-weight-bold title-color-default py-2">{{ blog.title }}</v-card-title>
                      </NuxtLink>
                      <v-card-text class="py-0 blog-description"><p class="mb-1">{{ blog.description }}</p></v-card-text>
                      <v-card-actions class="d-flex">
                    <v-card-text class="py-1 pa-0">
                        <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon> {{ formatDate(blog.updatedAt) }}</span>
                      </v-card-text>
                      <v-card-text class="py-1 pa-0">
                        <a :to="localePath(blog.path)" :title=" $t('common.Read-more')">{{ $t('common.Read-more') }}</a>
                      </v-card-text>



                      </v-card-actions>

                    </div>
                  </div>
                </v-card>

              </v-col>


            </v-row>
    <button @click="commentsToShow += 2">Load more</button>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ['blogs'],
  data () {
      return {
        data_loaded : true,
      }
    },

  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },
  methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
}
</script>

<style scoped lang="scss">
.blog-description p{
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
