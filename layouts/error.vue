<template>
  <v-app dark>

    <figure class="position-absolute top-50 start-50 translate-middle opacity-7 z-index-n9">
      <svg width="650" height="379" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 510 297">
        <g>
          <path class="fill-primary opacity-1" d="M121,147.4c0,6-4.8,10.8-10.8,10.8H47.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V147.4z"></path>
          <path class="fill-primary opacity-1" d="M179.4,90.2c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V78.7c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V90.2z"></path>
          <path class="fill-primary opacity-1" d="M459.1,26.3c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V14.8c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V26.3z"></path>
          <path class="fill-primary opacity-1" d="M422.1,66.9c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8V55.3c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V66.9z"></path>
          <path class="fill-primary opacity-1" d="M275.8,282.6c0,5.9-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V282.6z"></path>
          <path class="fill-primary opacity-1" d="M87.7,42.9c0,5.9-4.8,10.8-10.8,10.8H14.3c-6,0-10.8-4.8-10.8-10.8V31.4c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V42.9z"></path>
          <path class="fill-primary opacity-1" d="M505.9,123.4c0,6-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V123.4z"></path>
          <path class="fill-primary opacity-1" d="M482.5,204.9c0,5.9-4.8,10.8-10.8,10.8h-62.6c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
              c5.9,0,10.8,4.8,10.8,10.8V204.9z"></path>
          <path class="fill-primary opacity-1" d="M408.3,258.8c0,5.9-4.8,10.8-10.8,10.8H335c-6,0-10.8-4.8-10.8-10.8v-11.5c0-6,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V258.8z"></path>
          <path class="fill-primary opacity-1" d="M147,252.5c0,5.9-4.8,10.8-10.8,10.8H73.6c-6,0-10.8-4.8-10.8-10.8V241c0-5.9,4.8-10.8,10.8-10.8h62.6
              c6,0,10.8,4.8,10.8,10.8V252.5z"></path>
        </g>
      </svg>
    </figure>
    <h1 class="display-1 text-primary">404</h1>
    <h2>Page Not Found!</h2>
    <p>Either something went wrong or this page doesn't exist anymore.</p>
    <button class="btn btn-danger-soft mt-3"><i class="fas fa-long-arrow-alt-left me-3"></i>Back to home page</button>



    <h1 class="display-1 text-primary" v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.opacity-1 {
  opacity: 0.1 !important;
}


.fill-primary {
  fill: #2163e8 !important;
}
.text-primary {
  color: rgba(33, 99, 232,1) !important;
}
.opacity-7 {
  opacity: 0.7 !important;
}
.z-index-n9 {
  z-index: -9 !important;
}
.translate-middle {
  transform: translate(-50%, -50%) !important;
}
.start-50 {
  left: 50% !important;
}
.top-50 {
  top: 50% !important;
}
.position-absolute {
  position: absolute !important;
}
.btn-danger-soft {
  color: #d6293e;
  background-color: rgba(214, 41, 62, 0.1);
}
</style>
