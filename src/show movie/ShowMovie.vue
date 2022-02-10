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

        <form @submit="sendingComment">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                <textarea class="form-control" v-model="title" id="exampleFormControlTextarea1" rows="3" placeholder="Write your comment..."></textarea>
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
    methods: {
        ...mapActions('movies', ['getOneMovie','sendingAComent']),
    },
    computed: { 
        ...mapState({movies: state => state.movie}),
        ...mapGetters('movies', ['oneMovie']),
        sendingComment(){
            let user = JSON.parse(localStorage.getItem('user'));
            this.sendingAComent(this.oneMovie.movie.id,user.token,title)
        }
    },
    data() {
        return {
            title: ""
        };
    }, 
    created() {
        this.getOneMovie(new URL(location.href).pathname.split("/").at(-1));
    },
})
</script>

<style scoped>

</style>