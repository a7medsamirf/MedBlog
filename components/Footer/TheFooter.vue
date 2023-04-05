<template>
  <div>

    <div id="footer" class="pa-0">
      <div class="pt-20">
        <v-container>
          <v-row>

            <v-col
              class="lighten-2 text-center"
              cols="12"
            >
              <v-divider class="white--text"></v-divider>
              <div class="py-4" >
                {{ $t('footer.Copyright') }}
                {{ new Date().getFullYear() }} © <strong>Patient Portal</strong>.
                {{ $t('footer.reserved') }}
              </div>
              </v-col>

          </v-row>
        </v-container>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  name: "The-Footer",
  data: () => ({
    Services: [
      { text: 'Home' },
      { text: 'Journey'},
      { text: 'Technology'},
      { text: 'Team'},
    ],
    items: [
      { text: 'Vision'},
      { text: 'Thinking'},
      { text: 'Join us'},
      { text: 'Connect'},
    ],
    Contacts: [
      { text: 'Privacy & Terms' },
      { text: 'Google'},
      { text: 'Alphabet'},
    ],

  }),
}


</script>

<style scoped lang="scss">
#footer{
  .Quick-Links
  {
    background: transparent;
  }
  .no-active::before {
    opacity: 0 !important;
  }

  i.fa-duotone.fa-arrow-up-right,
  i.fa-duotone.fa-arrow-up-left {
    width: 50px;
    height: 50px;
    background: var(--maincolor);
    border-radius: 50%;
    text-align: center;
    color: #fff;
    line-height: 50px;
    font-size: 25px;
  }

}

</style>
