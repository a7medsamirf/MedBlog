<template>
    <v-app :dir="$dir()">
        <v-container>
    <TheHeader />
        </v-container>

      <v-main>

        <Nuxt />

      </v-main>


      <TheFooter />
    </v-app>
</template>

<script>
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import Settings from "~/components/Header/Settings";
import TheFooter from "~/components/Footer/TheFooter";
import TheHeader from "~/components/Header/TheHeader";

export default {
  name: 'DefaultLayout',
  components: {TheHeader, TheFooter, Settings, ThemeSwitcher},

}
</script>

<style lang="scss" scoped>

</style>
