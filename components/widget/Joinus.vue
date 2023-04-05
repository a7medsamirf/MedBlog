<<template>

  <div class="Join-Us-Social">
    <div class="widget-tittle ma-2">
      <h2>{{ $t('common.Join-us') }}</h2>
      <span></span>
    </div>
    <li>
      <v-btn block class="ma-2 pa-6" dark v-for="(Social, index) in Socials" :key="index">
        <v-icon class="px-2"> {{Social.icon}} </v-icon> {{Social.title}}
        <v-spacer></v-spacer>
        <span class="icon-meta">{{Social.dis}}</span>
      </v-btn>

    </li>


  </div>
  </template>

  <script>
    export default {
      name: 'Joinus',
      data() {
        return {
          Socials: [{
              title: 'Facebook',
              icon: 'mdi-facebook',
              dis: '820k'
            },
            {
              title: 'Instagram',
              to: '#',
              icon: 'mdi-instagram',
              dis: '350k'
            },
            {
              title: 'Twitter',
              to: '#',
              icon: 'mdi-twitter',
              dis: '396k'
            },
            {
              title: 'Youtube',
              to: '#',
              icon: 'mdi-youtube',
              dis: '260k'
            },
            {
              title: 'github',
              to: '#',
              icon: 'mdi-github',
              dis: '320k'
            },
          ],
        }
      },
    }

  </script>

  <style lang="scss" scoped>
    .Join-Us-Social {
      .v-btn:first-child {
        background-image: linear-gradient(to bottom, #123dd7 0%, #062db9 100%);
        color: #fff;
      }

      .v-btn:nth-child(2) {
        background-image: linear-gradient(158deg, #863fa6 22%, #e12c61 50%, #f46f46 80%);
        color: #fff;
      }

      .v-btn:nth-child(3) {
        background-image: linear-gradient(to bottom, #39b7ff 0%, #20a1eb 100%);
        color: #fff;
      }

      .v-btn:nth-child(4) {
        background-image: linear-gradient(to bottom, #f34040 0%, #eb2020 100%);
        color: #fff;
      }

      .v-btn:last-child {
        background-color: #000;
        color: #fff;
      }

      .icon-meta {
        margin: 0 0 0 auto;
        padding: 15px 10px;
        @include border-left(1px solid #ffffff26);
       
      }
    }


  </style>
