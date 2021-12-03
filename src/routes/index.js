import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/arcgis',
      name: 'arcgis',
      component: () => import('@/pages/HelloArcGIS/index.vue'),
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('@/pages/HelloCesium/index.vue'),
    },
  ],
})
