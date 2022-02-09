import { moviesService } from '../_services';
import { router } from '../_helpers';

const state = {
    genres
};

const getters = {
    allGenres: state => state.genres
  };

const actions = {
    getAllGenres({ dispatch, commit }) {
    
        moviesService.getGenres()
            .then(
                data => {
                    commit('setAllGenres', data);
                },
                error => {
                    commit('setAllGenresFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
};

const mutations = {
    setAllGenres(state, data) {
        state.genres = data
    },
    setAllGenresFailure(state){
        state.getters = []
    }
};

export const genres = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
