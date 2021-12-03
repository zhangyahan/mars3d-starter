<template>
  <div id="arcgis-container" class="arcgis-container"></div>
</template>

<script>
import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'

export default {
  mounted() {
    new SceneView({
      container: 'arcgis-container',
      map: new Map({ basemap: 'topo' }),
    })
  },
}
</script>

<style lang="scss" scoped>
.arcgis-container {
  width: 100%;
  height: 100%;
}
</style>
