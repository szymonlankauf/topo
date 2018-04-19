<template>

  <div class="slides-wrapper">

    <button class="btn btn-primary btn-action btn-lg slides-prev" @click="changeSlide(-1)" :disabled="start">
      <i class="fa fa-angle-left"></i>
    </button>

    <div class="slides">
      <slide :url="activeUrl" />
    </div>

    <button class="btn btn-primary btn-action btn-lg slides-next" @click="changeSlide(1)" :disabled="end">
      <i class="fa fa-angle-right"></i>
    </button>

  </div>

</template>

<script>

  import Slide from './Slide';

  export default {
    name: "Wall",
    props: {
      images: Array,
    },
    data() {
      return {
        active: 0,
      }
    },
    computed: {
      activeUrl() {
        return this.images[this.active].url
      },
      start() {
        return this.active === 0;
      },
      end() {
        return this.active === this.images.length-1;
      }
    },
    methods: {
      changeSlide(dir) {
        this.active = this.active+dir;
      }
    },
    components: {
      Slide
    },
    watch: {
      images() {
        this.active = 0;
      }
    }
  }

</script>

<style scoped>

  .slides-wrapper {
    max-height: 100vh;
    min-height: 300px;
    position: relative;
  }

  .slides {
    max-height: 100vh;
    background-color: #9ba8a6;
  }

  .slides-next,
  .slides-prev {
    position: absolute;
    top: 50%;

    transform: translateY(-50%);
  }

  .slides-prev {
    left: 0;
  }

  .slides-next {
    right: 0;
  }

</style>
