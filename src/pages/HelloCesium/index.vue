<template>
  <div id="cesium-container" class="cesium-container"></div>
</template>

<script>
import * as Cesium from 'cesium'

export default {
  mounted() {
    const viewer = new Cesium.Viewer('cesium-container', {
      animation: false,
      baseLayerPicker: false,
      timeline: false,
      homeButton: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      geocoder: false,
      sceneModePicker: false,
      terrainProvider: Cesium.createWorldTerrain(),
    })
    viewer.scene.screenSpaceCameraController.tiltEventTypes = [
      Cesium.CameraEventType.RIGHT_DRAG,
      Cesium.CameraEventType.PINCH,
      { eventType: Cesium.CameraEventType.LEFT_DRAG, modifier: Cesium.KeyboardEventModifier.CTRL },
      { eventType: Cesium.CameraEventType.RIGHT_DRAG, modifier: Cesium.KeyboardEventModifier.CTRL },
    ]
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [
      Cesium.CameraEventType.MIDDLE_DRAG,
      Cesium.CameraEventType.WHEEL,
      Cesium.CameraEventType.PINCH,
    ]
    viewer._cesiumWidget._creditContainer.style.display = 'none'
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    viewer.scene.primitives.add(Cesium.createOsmBuildings())
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.cesium-container {
  width: 100%;
  height: 100%;
}
</style>
