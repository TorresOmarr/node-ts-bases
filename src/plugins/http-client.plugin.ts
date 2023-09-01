const axios = require("axios");

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
    // const resp = await fetch( url );
    // return await resp.json();
  },
};
