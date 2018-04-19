<template>
  <div :class="['wrapper', classes]">
    <header class="main-header">
	<span class="logo-mini">
		<router-link to="/"><img src="/static/img/copilot-logo-white.svg" alt="Logo"
                             class="img-responsive center-block logo"></router-link>
	</span>
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->

      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <sidebar @chosenSector="activateSector" @chosenWall="activateWall" @chosenRegion="activateRegion"
             :display-name="demo.displayName" :picture-url="demo.avatar" :walls="walls"
             :sectors="sectors" :regions="regions" :activeSector="activeSector" :activeRegion="activeRegion"/>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->

      <!--Custom Rock/Wall bar-->
      <div class="map-navbar">

        <div class="m-navbar-l">
          <button class="btn btn-primary btn-lg btn-map-navbar-l" :disabled="start" @click="changeWall(-1)">
            <i class="fa fa-angle-left"></i>
          </button>
        </div>

        <span class="m-navbar-rock">Sektor - {{ rockName }} </span>

        <span class="m-navbar-wall">Skała - {{ wallName }}</span>

        <div class="m-navbar-r">
          <button class="btn btn-primary btn-lg btn-map-navbar-r" :disabled="end" @click="changeWall(1)">
            <i class="fa fa-angle-right"></i>
          </button>
        </div>

      </div>

      <router-view :activeRegion="activeRegion" :activeSector="activeSector" :activeWall="active"
                   :walls="walls"></router-view>

    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}}
        <a href="javascript:;">Szymon Lankauf</a>.</strong> All rights reserved.
    </footer>
  </div>
  <!-- ./wrapper -->
</template>

<script>
  import faker from 'faker'
  import {mapState} from 'vuex'
  import config from '../config'
  import Sidebar from './Sidebar'
  import 'hideseek'
  import Rock from './views/Rock'

  export default {
    name: 'Dash',
    components: {
      Sidebar,
      Rock
    },
    data: function () {
      return {
        // section: 'Dash',
        year: new Date().getFullYear(),
        classes: {
          fixed_layout: config.fixedLayout,
          hide_logo: config.hideLogoOnMobile
        },
        error: '',
        active: 0,
        activeSector: 0,
        activeRegion: 0,
        walls: [
          [
            [
              [{
                'name': 'Nad Wykopem',
                'sector': 'Góra Birów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pld/Sk_n_wykop/Sk_n_w_1.jpeg'
              }, {'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pld/Sk_n_wykop/Sk_n_w_2.jpeg'}, {'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pld/Sk_n_wykop/Sk_n_w_3.jpeg'}],
              [{
                'name': 'Szara Płyta',
                'sector': 'Góra Birów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pld/Sz_p/Szara Płyta.jpeg'
              }],
              [{
                'name': 'Okiennik Birowski',
                'sector': 'Góra Birów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pln/Okiennik Birowski/Okiennik birowski1.jpeg'
              }],
              [{
                'name': 'Wielki Mur',
                'sector': 'Góra Birów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Birow/cz_pln/Wielki mur/Wielki mur.jpeg'
              }]
            ],
            [
              [{
                'name': 'Furtki',
                'sector': 'Zamek Ogrodzieniec',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Zamek Ogrodzieniec/Furtki/Furtki.jpeg'
              }],
              [{
                'name': 'Niedźwiedź',
                'sector': 'Zamek Ogrodzieniec',
                'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Zamek Ogrodzieniec/Niedźwiedź/Niedźwiedź1.jpeg'
              },
                {'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Zamek Ogrodzieniec/Niedźwiedź/Niedźwiedź2.jpeg'},
                {'url': '/static/Topo/Kraje/Polska/Jura/Podzamcze/Zamek Ogrodzieniec/Niedźwiedź/Niedźwiedź3.jpg'}]
            ],
          ],
          [
            [
              [{
                'name': 'Ropusza',
                'sector': 'Łężec',
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Ropusza/Ropusza.jpeg'
              }],
              [{
                'name': 'Przy Zamku',
                'sector': 'Łężec',
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku1.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku2.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku3.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku4.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku5.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku6.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Łężec/Przy Zamku/Przy zamku7.jpeg'
              }]
            ],
            [
              [{
                'name': 'Młynarz',
                'sector': 'Zborów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Góra Zborów/Młynarze/Młynarz1.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Góra Zborów/Młynarze/Młynarz2.jpeg'
              }],
              [{
                'name': 'Młyny',
                'sector': 'Zborów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Góra Zborów/Młyny/Młyny1.jpeg'
              }, {
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Góra Zborów/Młyny/Młyny2.jpeg'
              }],
              [{
                'name': 'Czujnik',
                'sector': 'Zborów',
                'url': '/static/Topo/Kraje/Polska/Jura/Podlesice/Góra Zborów/Czujnik/Czujnik.jpeg'
              }]
            ]
          ]
        ],
        sectors: [
          [{'name': 'Góra Birów', 'region': 'Podzamcze'},
            {'name': 'Zamek Ogrodzieniec', 'region': 'Podzamcze'}],
          [{'name': 'Łężec', 'region': 'Podlesice'},
            {'name': 'Zborów - Młynarze', 'region': 'Podlesice'}]
        ],
        regions: [
          {'name': 'Podzamcze', 'area': 'Jura'},
          {'name': 'Podlesice', 'area': 'Jura'}
        ],
        areas: [
          {'name': 'Jura'},
          {'name': 'Sokoliki'}
        ]
      }
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
      demo() {
        return {
          displayName: faker.name.findName(),
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
          randomCard: faker.helpers.createCard()
        }
      },
      start() {
        return this.active === 0;
      },
      end() {
        return this.active === this.walls[this.activeRegion][this.activeSector].length - 1;
      },
      wallName() {
        return this.walls[this.activeRegion][this.activeSector][this.active][0].name
      },
      rockName() {
        return this.walls[this.activeRegion][this.activeSector][0][0].sector
      }
    },
    methods: {
      changeloading() {
        this.$store.commit('TOGGLE_SEARCHING')
      },
      changeWall(dir) {
        this.active += dir;
      },
      activateWall(id) {
        // console.log("recieved emit: " + id);
        this.active = id
      },
      activateSector(id) {
        this.activeSector = id
      },
      activateRegion(id) {
        this.activeRegion = id
      }
    },
    watch: {
      activeRegion() {
        this.activeSector = 0
      }
    }
  }
</script>

<style lang="scss">
  .wrapper.fixed_layout {
    .main-header {
      position: fixed;
      width: 100%;
    }

    .content-wrapper {
      padding-top: 50px;
    }

    .main-sidebar {
      position: fixed;
      height: 100vh;
    }
  }

  .wrapper.hide_logo {
    @media (max-width: 767px) {
      .main-header .logo {
        display: none;
      }
    }
  }

  .logo-mini,
  .logo-lg {
    text-align: left;

    img {
      padding: .4em !important;
    }
  }

  .logo-lg {
    img {
      display: -webkit-inline-box;
      width: 25%;
    }
  }

  .user-panel {
    height: 4em;
  }

  hr.visible-xs-block {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.17);
    height: 1px;
    border-color: transparent;
  }

  .map-navbar {
    height: 50px;
    background-color: #0d6aad;
    color: #ffffff;
    font-size: 20px;
    position: relative;
    width: 100%;
    /*display: inline-block;*/
  }

  .m-navbar-rock,
  .m-navbar-wall {
    height: 100%;
    width: 20em;
    left: 40px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-block;
    position: relative;
    /*float: left;*/
  }

  .m-navbar-rock {
    border-right: solid 0.5px #0d5188;
  }

  .m-navbar-wall span {
    display: inline-block;
    height: 30px;
  }

  .btn-map-navbar-l,
  .btn-map-navbar-r {
    height: 50px;
    width: 40px;
    position: relative;
    display: inline-block;
  }

  /*.btn-map-navbar-l{*/
  /*left: 0;*/
  /*}*/
  /*.btn-map-navbar-r{*/
  /*right: 0;*/
  /*}*/

  .m-navbar-l,
  .m-navbar-r {
    display: inline-block;
    height: 100%;
    width: auto;
    position: absolute;
  }

  .m-navbar-l {
    left: 0;
  }

  .m-navbar-r {
    right: 0;
  }

</style>
