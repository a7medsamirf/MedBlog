<template>
    <div>
      <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <h1 class="breadcrumb-heading white--text"> {{PageTitle}}</h1>
          <nav class="woocommerce-breadcrumb ">
            <nuxt-link to="/">Home</nuxt-link>
            <span class="breadcrumb-separator white--text"> / {{PageTitle}}</span>
          </nav>
        </div>
      </v-container>

    </div>
    </div>
</template>
<script>
export default {
  props: {
    PageTitle: {
      type: String,
      default: null,
    },
  },

}
</script>
<style lang="">

</style>
