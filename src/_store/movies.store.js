import { moviesService } from '../_services';
import { router } from '../_helpers';

const state = {
    movies: {},
    movie: {}
};

const getters = {
    allmovies: state => state.movies,
    oneMovie: state => state.movie
  };

const actions = {
    getAllMovies({ dispatch, commit }) {
    
        moviesService.getMovies()
            .then(
                data => {
                    commit('setAllMovies', data);
                },
                error => {
                    commit('setAllMoviesFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    getOneMovie({dispatch, commit}, id){
        
        moviesService.getAMovie(id)
            .then(
                data => {
                    commit('setOneMovie', data);
                },
                error => {
                    commit('setOneMovieFaliure', error);
                    dispatch('alert/error', error, { root: true });
                }
            )
    },
    sendingAComent({dispatch}, {id, token, text}){
        moviesService.sendCommentForMovie(id,token, text)
            .then(
                error => {
                    dispatch('alert/error', error, { root: true });
                }
            )
    }
};

const mutations = {
    setAllMovies(state, data) {
        state.movies = data
    },
    setAllMoviesFailure(state){
        state.movies = []
    },
    setOneMovie(state, data){
        state.movie = data
    },
    setOneMovieFaliure(state){
        state.movie = []
    }
};

export const movies = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
