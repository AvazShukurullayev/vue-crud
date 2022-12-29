const apiService = {
  get: async (url) => {
    return await fetch(url, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  post: async (url, data) => {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
  update: async (url, data) => {
    return await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then(res=>console.log(res.json()));
  },
  delete: async (url, id) => {
    return await fetch(`${url}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //! then json yozish I dunno
  },
};

export default apiService;

// https://admin.yoordam.uz/api/role/delete/:id delete
