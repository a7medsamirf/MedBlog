<template>
  <div>
    <v-row >
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
            >
              تسجيل الدخول
              <v-icon  size="18" right>mdi-account</v-icon>

            </v-btn>
          </template>
          <template v-slot:default="dialog">
                <v-card>
                  <v-tabs
                    icons-and-text
                  >

                    <v-tab>
                      Recents
                      <v-icon>mdi-phone</v-icon>
                    </v-tab>

                    <v-tab>
                      Favorites
                      <v-icon>mdi-heart</v-icon>
                    </v-tab>
                  </v-tabs>


                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>test 1</v-card-text>
                      </v-card>
                    </v-tab-item>



                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>test 2</v-card-text>
                      </v-card>
                    </v-tab-item>


                </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>





</template>
<script>
export default {
  name: "Sign-In",
  data () {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style scoped>

</style>
