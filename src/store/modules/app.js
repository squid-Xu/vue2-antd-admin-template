const state = {
    sidebarOpened: false,// sidebar 是否展开
    sidebarStyle: 'dark',//侧边栏主题颜色 light dark
    headerStyle: 'light',//顶部主题颜色 light dark
}

const mutations = {
    TOGGLE_SIDEBAR: (state) => {
        state.sidebarOpened = !state.sidebarOpened
    },
    TOGGLE_THEME: (state, { type, value }) => {
        state[type] = value
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    toggleTheme({ commit }, payload) {
        commit('TOGGLE_THEME', payload)
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}