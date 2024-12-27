import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniCommentHeart,
  uniArrowGrowth,
  uniLaptop,
  uniFileCopyAlt,
  uniUserPlus,
  uniThumbsUp,
  uniSuitcaseAlt,
  uniBuilding,
  uniCube,
  uniCommentsAlt,
  uniComments,
  uniAt,
  uniGithub,
  uniExternalLinkAlt,
  uniFileShareAlt,
} from "vue-unicons/dist/icons";

Unicon.add([
  uniCommentHeart,
  uniArrowGrowth,
  uniLaptop,
  uniFileCopyAlt,
  uniUserPlus,
  uniThumbsUp,
  uniSuitcaseAlt,
  uniBuilding,
  uniCube,
  uniCommentsAlt,
  uniComments,
  uniAt,
  uniGithub,
  uniExternalLinkAlt,
  uniFileShareAlt,
]);
Vue.use(Unicon);

Vue.config.productionTip = false;

Vue.prototype.$goRoute = (path) => {
  router.push(path);
};

Vue.prototype.$linkOpen = (url) => {
  window.open(url, "_blank");
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
