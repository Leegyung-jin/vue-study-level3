import {
    fetchAskList,
    fetchCommentItem,
    fetchJobsList, fetchList,
    fetchNewsList,
    fetchUserInfo
} from "../api";

export default {
    // prsomise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // FETCH_JOBS({ commit }) {
        // return fetchJobsList()
        // .then(({ data }) => {
        //     commit('SET_JOBS', data);
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    // #2
    // FETCH_LIST({ commit }, pageName) {
        // #3
        // return fetchList(pageName)
        // .then(response => {
        //     // #4
        //     console.log("4")
        //     commit('SET_LIST', response.data);
        //     return response.data;
        // })
        // .catch(error => console.log(error));
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data)
        return response;
    },
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data)
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data)
        return response;
    },
}