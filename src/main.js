// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from "vue"
import DefaultLayout from '~/layouts/Default.vue'
import "../public/bootstrap-3.4.1-dist/css/bootstrap.css"
import "../public/fontawesome-free-5.15.4-web/css/all.min.css"
import "../src/assets/css/index.css"
import "../src/assets/css/styles.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL:process.env.GRIDSOME_API_URL
      }
    },
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
