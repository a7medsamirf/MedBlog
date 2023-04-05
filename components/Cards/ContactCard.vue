<template>
  <v-card outlined class="About-card text-center py-3 px-1 ">
    <v-list-item-avatar
      tile
      size="60"
      color="primary"
      class="rounded-circle"
    >
      <img class="white--text filter-color" :src="avatar" :alt="title">
    </v-list-item-avatar>

    <v-list-item three-line >

      <v-list-item-content>
        <v-list-item-title class="use-text-subtitle title-color-default  mb-2" v-text="$t('contacts.' + title)" />
        <v-list-item-subtitle class="use-text-subtitle title-color-default " v-text="$t(description)"/>
      </v-list-item-content>
    </v-list-item>
    <h2 class="overlay-title">{{ number }}</h2>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped lang="scss">


</style>
