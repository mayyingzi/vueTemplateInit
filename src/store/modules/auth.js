import { SET_TOKEN, CLEAR_TOKEN } from '../mutationTypes';

const state = {
    token: null
};

const mutations = {
    [SET_TOKEN](state, token) {
        state.token = token;
    },
    [CLEAR_TOKEN](state) {
        state.token = null;
    }
};

// actions
export const actions = {
    setToken({ commit }, token) {
        commit(SET_TOKEN, token);
    },

    clearToken({ commit }) {
        commit(CLEAR_TOKEN);
    }
};

export default {
    state,
    mutations
};
