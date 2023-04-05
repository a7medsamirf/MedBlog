<template>
  <div class="blog-wrap">
    <div class="inner">
      <v-container>
        <home-carousel :blogs="blogs" />
        <v-row>
          <v-col class=""
                  cols="12"
                  lg="8"
          >
          <div class="post-list rounded-lg v-card pa-5">
            <div class="pa-5">
					<h2 class="m-0"><i class="fa-regular fa-hourglass-start me-2"></i> {{ $t('common.home-blog-title') }}</h2>
					<p>{{ $t('common.home-blog-subtitle') }}</p>
				</div>
            <blog-card :blogs="blogs"/>

          </div>


          </v-col>
          <v-col class=""
                 cols="12"
                 lg="4"
          >


          <div class="sidebar-widget">
              <div class="widget-tittle ma-2 v-card rounded-lg">
                <h2>Categories</h2>
                <span></span>
              </div>
              <div class="sidebar-widget mb-5">


                <joinus />


            </div>


            </div>


          </v-col>
        </v-row>


        <button-v-1 />
        <button-v-2 />
<!--<blog-card :blogs="blogs"/>-->
      </v-container>


    </div>

  </div>
</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
/*import BlogCard from '~/components/Cards/Blog-Card.vue';*/
import BlogCard from "~/components/Cards/Blog-Card";
import ButtonV1 from '~/components/buttons/button-V1';
import ButtonV2 from '~/components/buttons/button-V2';
import Joinus from '~/components/widget/Joinus';
import HomeCarousel from '~/components/Cards/HomeCarousel';
export default {
  components: {BlogCard, ButtonV1 , ButtonV2, Joinus, HomeCarousel },
  mixins: [fetchPostsMixin],
}
</script>



