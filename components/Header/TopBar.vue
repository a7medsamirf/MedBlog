<template>

        <div class="hidden-md-and-down ">
      <v-app-bar class="breaking-news rounded-lg"
        color="accent-4"
        dense
        elevation="0"
      >
        <breaking-news />
        <v-spacer></v-spacer>
        <v-toolbar-title>

            <top-social />
        </v-toolbar-title>


      </v-app-bar>
    </div>

</template>

<script>
import BreakingNews from "~/components/Header/breaking-news";
import TopSocial from './top-social.vue';
    export default {
        name: "TopBar",
      components: {BreakingNews, TopSocial}
    }
</script>

<style lang="scss" scoped>
.breaking-news{
  @include breaking-background-section ;
  color: #fff ;
.ticker.box{
  color: #fff !important;
}

}

</style>
