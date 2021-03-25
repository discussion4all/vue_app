<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel :arrows="true" :dots="true">
    <client-only>
      <slick :options="slickOptions">
        <div v-for="i in 5" :key="i" class="img-wrapper">
          <img :src="`./${i}-200x100.jpg`" />
        </div>
      </slick>
    </client-only>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
       components: { VueSlickCarousel },
      slickOptions: {
        arows: false,
        slidesToShow: 3
      }
    }
  }
}
</script>

<style>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
