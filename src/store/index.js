import Vue from "vue";
import Vuex from "vuex";

import roleModule from "./role.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    roleModule,
  },
});
