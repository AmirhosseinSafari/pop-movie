<template>
    <div>
        <h3>{{oneMovie.movie.title}}</h3>
        <img :src="oneMovie.movie.image">
        <div>{{oneMovie.movie.rate}}</div>
        <div v-for="genre in oneMovie.movie.genres" :key="genre.id">
            {{genre.title}}
        </div>
        <h5>top casts:</h5>
        <div v-for="actor in oneMovie.movie.cast" :key="actor">
            {{actor}}
        </div>
        <p>{{oneMovie.movie.description}}</p>

        <form action="">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default({
    computed: { 
        ...mapState({movies: state => state.movie}),
        ...mapGetters('movies', ["oneMovie"])
    }, 
    methods: {
        ...mapActions('movies', ['getOneMovie']),
    },
    created() {
        this.getOneMovie(new URL(location.href).pathname.split("/").at(-1));
    },
})
</script>

<style scoped>

</style>