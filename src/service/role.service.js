import apiService from "@/service/api.service";

const roleService = {
  rolesGet: async (url) => {
    return await apiService.get(url);
  },
  rolesPost: async (url, data) => {
    return await apiService.post(url, data);
  },
  rolesUpdate: async (url, data) => {
    return await apiService.update(url, data);
  },
  rolesDelete: async (url, id) => {
    return await apiService.delete(url, id);
  },
};

export default roleService;
