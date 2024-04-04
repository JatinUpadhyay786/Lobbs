import { fetchData } from "../api/data";
export const state = () => ({
  animeData: {},
});

export const mutations = {
  SET_ANIME_DATA(state, payload) {
    state.animeData = payload;
  },
};

export const actions = {
  async FETCH_ANIME_DATA(context) {
    const response = await fetchData();
    let temp = JSON.parse(JSON.stringify(response));
    context.commit("SET_ANIME_DATA", temp.content || {});
  },
};
