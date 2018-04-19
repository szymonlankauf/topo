<template>
  <ul class="sidebar-menu">
    <li class="header">TOPO</li>
    <!--<router-link tag="li" class="pageLink" to="/" v-on:click="ChooseCountry">-->
      <!--<a>-->
        <!--<i class="fa fa-desktop"></i>-->
        <!--<span class="page">Kraj</span>-->
      <!--</a>-->
    <!--</router-link>-->

    <!--KRAJE DO WYSZUKANIA-->

    <!--<li class="pageLink">-->
      <!--<a>-->
        <!--<i class="fa fa-desktop"></i>-->
        <!--<span class="page">Kraj</span>-->
      <!--</a>-->
      <!--<ul class="treeview-menu search-nav">-->
        <!--<li>-->
          <!--<form v-if="countries" v-on:submit.prevent class="sidebar-form" id="searchForm">-->
            <!--<div class="input-group" id="searchContainer">-->
          <!--<span class="input-group-btn">-->
            <!--<input type="text"-->
                   <!--name="search"-->
                   <!--id="search"-->
                   <!--class="search form-control"-->
                   <!--data-toggle="hideseek"-->
                   <!--placeholder="Search Countries"-->
                   <!--data-list=".sidebar-menu">-->
            <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat">-->
              <!--<i class="fa fa-search"></i>-->
            <!--</button>-->
          <!--</span>-->
            <!--</div>-->
          <!--</form>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</li>-->

    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Obszar</span>
      </a>
    </router-link>

    <!--REGIONY-->

    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>Rejon</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li v-for="(region, index) in regions" @click="chooseRegion(index)">
          <router-link class="pageLink" to="/rock">
            <i class="fa fa-file-word-o"></i> {{ region.name }}
          </router-link>
        </li>

      </ul>

    </li>

    <!--SEKTORY-->

    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>Sektor</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li v-for="(sector, index) in sectors[activeRegion]" @click="chooseSector(index)">
          <router-link class="pageLink" to="/rock">
            <i class="fa fa-file-word-o"></i> {{ sector.name }}
          </router-link>
        </li>

      </ul>

    </li>

    <!--SKAŁY-->

    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>Skała</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li v-for="(wall, index) in walls[activeRegion][activeSector]" @click="chooseWall(index)">
          <router-link class="pageLink" to="/rock">
            <i class="fa fa-file-word-o"></i> {{ wall[0].name }}
          </router-link>
        </li>

      </ul>

    </li>


    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>Drogi:</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>

      </ul>
    </li>

    <!--<li class="header">LOGS</li>-->'

  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      countries: true
    }
  },
  props: {
    walls: Array,
    sectors: Array,
    regions: Array,
    activeSector: [String, Number],
    activeRegion: [String, Number]
  },
  methods: {
    ChooseCountry: function() {
      this.countries = true
    },
    chooseWall(id) {
      this.$emit("chosenWall", id)
    },
    chooseSector(id) {
      this.$emit("chosenSector", id)
    },
    chooseRegion(id) {
      this.$emit("chosenRegion", id)
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  .search-nav {
    padding-bottom: 1px !important;
    padding-top: 1px !important;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }

  /*Copied from Sidebar.vue:*/
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
