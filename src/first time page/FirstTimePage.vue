<template>
<div>
    <h4>لطفا ژانر های مورد علاقه خود را انتخاب کنید:</h4>
    <form action=""> 
        <div 
        v-for="genre in allGenres" 
        :key="genre.id"
        >
            <button type="button" 
                    :id="genre.id" 
                    @click="toggleSelected(genre.id)" 
                    class="btn btn-warning" >{{genre.title}}
            </button>
        </div>
    </form>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default({
    computed: { 
        ...mapState({genres: state => state.genres}),
        ...mapGetters('genres', ["allGenres"])
    }, 
    methods: {
        ...mapActions('genres', ['getAllGenres']),
        toggleSelected(key){
            let btn = document.getElementById(key)
            if(btn.classList.contains("active")){
                btn.classList.remove("active");
            }
            else{
                btn.classList.add("active");
            }
        }
    },
    created() {
        this.getAllGenres();
    },
    
})
</script>

<style scoped>

</style>