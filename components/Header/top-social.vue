<template>
  <div>
    <ul class="top-social" >
        <li class="d-inline" v-for="(link, index) in links" :key="index">
            <v-btn min-width="40" :to="link.to" text target="_blank">
                <v-icon small>{{link.icon}}</v-icon></v-btn>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'top-social',
    data () {
    return {
      links: [
        {to: 'https://www.facebook.com/', icon: 'mdi-facebook'},
        {to: '#', icon: 'mdi-twitter'},
        {to: '#', icon: 'mdi-linkedin'},
        {to: '#', icon: 'mdi-instagram'},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top-social{
  .theme--dark.v-btn,
  .theme--light.v-btn {
    color: #FFFFFF;
}
}
</style>