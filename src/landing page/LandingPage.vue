<template>
    <div>
        <div 
        v-for="movie in allmovies.movies" 
        :key="movie.id"
        >
        <router-link :to="'/movie/' + movie.id">
            <div :id="movie.id"  
                class="" >{{movie.title}}
            </div>
            <img :src="movie.image">
            <div>{{movie.rate}}</div>
            <div v-for="genre in movie.genres" :key="genre.id">
                {{genre.title}}
            </div>
            <h5>top casts:</h5>
            <div v-for="actor in movie.cast.slice(0,5)" :key="actor">
                {{actor}}
            </div>
        </router-link>        
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default({
    computed: { 
        ...mapState({movies: state => state.movies}),
        ...mapGetters('movies', ["allmovies"])
    }, 
    methods: {
        ...mapActions('movies', ['getAllMovies']),
    },
    created() {
        this.getAllMovies();
    },
    
})
</script>

<style scoped>

</style>