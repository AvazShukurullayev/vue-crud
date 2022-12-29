import roleService from "@/service/role.service";
import env from "@/env/env";

const roleModule = {
  state: {
    roles: [],
    message: null,
  },
  getters: {
    getRoles(state) {
      return state.roles;
    },
    getMessage(state) {
      return state.message;
    },
  },
  mutations: {
    setRoles(state, payload) {
      state.roles = payload;
    },
    setForm(state, payload) {
      state.message = payload;
    },
    setNewRoles(state, payload) {
      state.roles = payload;
    },
  },
  actions: {
    async actionRoles({ commit }, payload) {
      try {
        let res = await roleService.rolesGet(`${env.apiUrl}role`);
        commit("setRoles", res.result.data);
      } catch (error) {
        console.log("error result =>", error);
      }
    },
    async actionForm({ commit }, payload) {
      try {
        let message = await roleService.rolesPost(
          `${env.apiUrl}role/store`,
          payload
        );
        commit("setForm", message);
      } catch (error) {
        console.log("error message => ", error);
      }
    },
    async actionUpdateElement({ commit }, payload) {
      try {
        console.log("PUT method payload =>", payload);
        let updatedItem = await roleService.rolesUpdate(
          `${env.apiUrl}update`,
          payload
        );
        console.log("put method updated Item => ", updatedItem);
      } catch (error) {
        console.log("Action Update Element Error => ", error);
      }
    },
    async actionRemoveElement({ commit }, payload) {
      try {
        const result = await roleService.rolesDelete(
          `${env.apiUrl}role/delete/`,
          payload
        );
      } catch (error) {
        console.log("Action Remove Element Error => ", error);
      }
    },
  },
};

export default roleModule;
