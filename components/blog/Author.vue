<template>
  <div class="author-wrap">


          <NuxtLink
            :to="`/blog/author/${author.name}`"
          >
            <v-list-item>
              <v-list-item-avatar
                tile
                size="30"
                color="grey"
                class="rounded-circle"
              >
                <v-img
                  :src="require(`~/static/images/avatars/${author.img}`)"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="use-text-subtitle" color="primary">
                  By , {{ author.name }}
                </v-list-item-title>

              </v-list-item-content>


            </v-list-item>

          </NuxtLink>








  </div>
</template>

<script>
export default {
  name: "Author",
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
