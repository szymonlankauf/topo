<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <!--<div class="user-panel">-->
      <!--<div class="pull-left image">-->
      <!--<img :src="pictureUrl" />-->
      <!--</div>-->
      <!--<div class="pull-left info">-->
      <!--<div>-->
      <!--<p class="white">{{ displayName }}</p>-->
      <!--</div>-->
      <!--<a href="javascript:;">-->
      <!--<i class="fa fa-circle text-success"></i> Online-->
      <!--</a>-->
      <!--</div>-->
      <!--</div>-->

      <!-- search form (Optional) -->
      <form v-on:submit.prevent class="sidebar-form" id="searchForm">
        <div class="input-group" id="searchContainer">
          <span class="input-group-btn">
            <input type="text"
                   name="search"
                   id="search"
                   class="search form-control"
                   data-toggle="hideseek"
                   placeholder="Search Menus"
                   data-list=".sidebar-menu">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <sidebar-menu @chosenWall="activateWall" @chosenSector="activateSector" @chosenRegion="activateRegion" :activeSector="activeSector"
                    :activeRegion="activeRegion" :walls="walls" :sectors="sectors" :regions="regions" />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  import SidebarMenu from './SidebarMenu'

  export default {
    name: 'Sidebar',
    props: ['displayName', 'pictureUrl', 'walls', 'sectors', 'activeSector', 'activeRegion', 'regions'],
    components: {SidebarMenu},
    methods: {
      activateWall(id) {
        // console.log("activated! " + id);
        this.$emit("chosenWall", id)
      },
      activateSector(id) {
        this.$emit("chosenSector", id)
      },
      activateRegion(id) {
        this.$emit("chosenRegion", id)
      }
    },
    mounted: function () {
      window
        .jQuery('[data-toggle="hideseek"]')
        .off()
        .hideseek()
    }
  }
</script>
<style scope="local">
  .user-panel .image img {
    border-radius: 50%;
  }

  #searchForm {
    padding-left: 0em;
    padding-right: 0em;
  }

  #searchContainer {
    height: 100%;
    padding-bottom: 0em;
  }

  #search {
    width: 80%;
    float: right;
  }

  #search-btn {
    width: 20%;
  }
</style>
