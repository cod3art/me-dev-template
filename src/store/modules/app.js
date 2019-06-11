// initial state
const state = {
  requestLoading: 0 // 请求 loding 的数量
};

// getters
const getters = {
  getLoadingStatus: function(state) {
    let loadingState = state.requestLoading;

    // 如果当前请求数量大于 0, 表明需要展示 loading，返回 true，反之返回 false
    if (loadingState > 0) {
      return true;
    } else {
      return false;
    }
  }
};

// actions
const actions = {
  setLoading: function({ commit }, status) {
    commit("setRequestLoading", status);
  }
};

// mutations
const mutations = {
  setRequestLoading: function({ state }, status) {
    // error 的时候直接重置
    if (status === 0) {
      state.requestLoading = 0;
      return;
    }
    state.requestLoading = status
      ? ++state.requestLoading
      : --state.requestLoading;

    state.requestLoading = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
