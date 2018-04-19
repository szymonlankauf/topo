<template>
  <section class="content">

    <div class="row">
      <div class="col-lg-12">
        <!-- MAP & BOX PANE -->
        <div class="box box-success">
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <div class="row no-gutters">
              <div class="col-lg-12">
                <!-- Map will be created here -->
                <div id="world-map-markers"></div>
              </div>

            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <link rel="stylesheet" href="/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.css" >
      </div>
    </div>
  </section>
</template>
<script>
  import {stats} from '../../demo'

  const pluginURL = '/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js'
  const mapURL = '/static/js/plugins/jvectormap/jquery-jvectormap-world-mill.js'

  export default {
    name: 'World-map',
    data () {
      return {
        stats
      }
    },
    mounted () {
      this.$nextTick(() => {
        window.jQuery.getScript(pluginURL, () => {
          window.jQuery.getScript(mapURL, () => {
            window.jQuery('#world-map-markers').vectorMap({
              map: 'world_mill'
            })
          })
        })
      })
    }
  }
</script>

<style>
  /*.fake {*/
    /*color: 'red';*/
  /*}*/

  #world-map-markers svg {
    height: 600px;
  }

  .row.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .row.no-gutters > [class^="col-"],
  .row.no-gutters > [class*=" col-"] {
    padding-right: 0;
    padding-left: 0;
  }
</style>
