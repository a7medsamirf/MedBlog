<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
    <v-navigation-drawer dense class="hidden-md-and-up" v-model="drawer"  fixed :right="$vuetify.rtl">
      <v-list-item class="pa-3">
        <div class="logo">
          <NuxtLink to="/">
            <NuxtLink :to="localePath('/')" >
              <v-img v-if="!$vuetify.theme.dark" max-height="50" max-width="170" :src="require('static/images/logo/dark-logo.png')" ></v-img>
              <v-img v-else max-height="50" max-width="170" :src="require('static/images/logo/white.png')" ></v-img>
            </NuxtLink>

          </NuxtLink>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
      <sidebar />
    </v-navigation-drawer>
    <!---------- End Navigation Drawer ---------->

    <top-bar />
    <!---------- Start App Bar ---------->
    <v-app-bar class="v-card"  height="85px"  elevation="0">
      <v-container class="pa-0 fill-height">
   <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer" />
          <div class="logo px-5">
        <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" max-height="45" max-width="150" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          <v-img v-else max-height="45" max-width="150" :src="require('static/images/logo/white.png')" ></v-img>
        </NuxtLink>
      </div>

        <v-toolbar-items
          class="hidden-md-and-down DesktopNav"
          v-for="(item, i) in items" :key="i">
          <v-btn text
                 v-if="!item.subitems"
                 exact
                 :to="localePath(item.to)" router>
                 {{$t(item.title)}}
          </v-btn>

          <v-menu
            class="elevation-0"
            open-on-hover :close-on-content-click="false"
            transition="slide-y-transition"
            content-class="nav-menu"
            min-width="200"
            v-else
            :key="item.title"
            :value="false"
            exact
            active-class="primary--text"
          >
            <!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on" >{{$t(item.title)}}<v-icon right>mdi-chevron-down</v-icon></v-btn>

            </template>
            <v-list>
              <v-list-item
                v-for="subitem in item.subitems"
                :to="localePath(subitem.to)"
                :key="subitem.title"
                active-class="primary--text"
                exact
              >
                <v-list-item-title v-text="$t(subitem.title)" />
              </v-list-item>
            </v-list>
          </v-menu>

        </v-toolbar-items>
<!--         <div class="hidden-md-and-down">
          <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
         <button href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</button>
        </div> -->
        <v-spacer />
    <Settings />
        <ThemeSwitcher/>

      </v-container>
    </v-app-bar>
    <!---------- End App Bar ---------->

  </div>
</template>

<script>

import Settings from "~/components/Header/Settings";
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import TopBar from "~/components/Header/TopBar";
import Sidebar from "~/components/Header/Sidebar.vue";
export default {
  components: {Sidebar, TopBar, ThemeSwitcher, Settings},
  name: "TheHeader",
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: true,
      Lang : '',
      items: [
        {title: 'nav.Home', to: '/'},
        {title: 'nav.solutions', to: ''},
        {title: 'nav.Services', to: ''},
        {title: 'nav.about-Us', to: ''},
        {title: 'nav.Feedback', to: ''},
      ],

    }
  },

}
</script>

<style scoped lang="scss">
.v-toolbar .v-btn:before {
  background-color: transparent;
  border-radius: 3px;
  bottom: unset;
  color: inherit;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
}
header.v-toolbar a.v-btn--active {
  color: #3063e9 !important;
}
header.v-toolbar a.v-btn--active:after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3063e9;
  position: absolute;
  bottom: 15px;
}
.logo{
  .v-image{
    @include breakpoints-down(md) {
      max-width: 135px !important;
    }
  }
}

.sub-list-group{
  background-color: #f4f5fa;
}
i.v-icon.notranslate.mdi.mdi-record-circle-outline {
  font-size: 15px;
  color:  var(--maincolor);
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #f5f5f5;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #272727;
}
.v-sheet.v-app-bar.v-toolbar {
  border-radius: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 16px !important;
}

header .v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px !important;
  padding: 0;
  margin: 0px 10px;
  text-transform: capitalize;
}

.v-navigation-drawer {
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
}
.close-icon:hover .v-icon
{
  transition: 0.70s;
  transform: rotate(180deg);
}

.v-menu__content {
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%) !important;
}
.v-app-bar .v-list {
  background: #001e26 !important;
  color: #FFFFFF;
}

</style>
