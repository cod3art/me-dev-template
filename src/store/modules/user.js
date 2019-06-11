// initial state
const state = {
  session: {
    token: "", // 登录令牌
    signkey: "", // 登录密钥
    username: "" // 用户名
  }
};

// getters
const getters = {
  checkAuth: (state, getters, rootState, commit) => {
    var session = state.session;

    if (!state.session || !state.session.token || !state.session.signkey) {
      var session = JSON.parse(localStorage.getItem("session"));

      state.session = session;
    }

    return (
      state.session &&
      state.session.token &&
      state.session.token != "" &&
      state.session.token != null &&
      state.session.signkey &&
      state.session.signkey != "" &&
      state.session.signkey != null
    );
  },

  getSession: (state, getters, rootState, commit) => {
    var session = state.session;

    if (!state.session || !state.session.token || !state.session.signkey) {
      var session = JSON.parse(localStorage.getItem("session"));

      state.session = session;
    }

    return session;
  }
};

// actions
const actions = {
  setSession({ state, commit }, session) {
    commit("setSession", { session: session });
  },

  removeSession({ state, commit }) {
    commit("removeSession");
  }
};

// mutations
const mutations = {
  // 设置登录令牌
  setSession(state, { session }) {
    state.session = session;

    localStorage.setItem("session", JSON.stringify(session));
  },

  // 移除登录令牌
  removeSession() {
    localStorage.removeItem("session");
    state.session = { token: "", signkey: "" };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
