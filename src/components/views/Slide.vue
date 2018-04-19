<template>

  <figure class="figure">
    <img :src="url" alt="" class="img-responsive img-contain">
  </figure>

</template>

<script>

  export default {
    name: 'Slide',
    props: {
      url: String
    }
  }

</script>

<style scoped>

  .img-contain {
    object-fit: contain!important;
    max-height: 100vh;
  }

  .figure {
    max-height: 100vh;
    display: flex;
    justify-content: center;
  }

</style>
