<template>

  <wall :images="walls[activeRegion][activeSector][activeWall]"></wall>

</template>

<script>

  import Wall from './Wall';

  export default {
    name: "Rock",
    props: {
      activeRegion: [String, Number],
      activeSector: [String, Number],
      activeWall: [String, Number],
      walls: Array
    },
    components: {
      Wall
    },
    data() {
      return {
      }
    },
    methods: {
      // changeActive(dir) {
      //   this.activeWall  += dir;
      // }
    }
  }

</script>
