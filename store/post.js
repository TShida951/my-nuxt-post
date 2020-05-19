import { INITIAL_DATA } from './index';

const state = () => {
  return { items: [] };
};

function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts);
    }, 1000);
  });
}

const actions = {
  fetchPosts(context) {
    return fetchPostsAPI().then((posts) => {
      context.commit('setPosts', posts);
    });
  },
};

const mutations = {
  setPosts(state, posts) {
    state.items = posts;
  },
};

export default {
  state,
  actions,
  mutations,
  fetchPostsAPI,
};
