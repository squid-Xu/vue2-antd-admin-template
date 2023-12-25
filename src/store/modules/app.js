

const state = {
    sidebarOpened: false,// sidebar 是否展开
}

const mutations = {
    TOGGLE_SIDEBAR: (state) => {
        state.sidebarOpened = !state.sidebarOpened
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}