<template>
    <div>

        <div class="pop-intro">
            <div class="pop-logo-container">
                <img src="src/static/images/main-logo.png" alt="">
            </div>
            <div class="pop-intro-title">
                <span class="pop-orange">&#160;پاپ&#160;</span>موی
            </div>
            <div class="pop-intro-desc">
                با یه کامپیونیتی پر از آدمای عشق فیلم مثل خودت همراه شو و کلی فیلم خوب برای تماشا پیدا کن. تازه ما یه سیستم پیشنهاد فیلم داریم که بر اساس رفتار و علایق شما بهترین فیلم ها رو بهتون پیشنهاد می ده. پس منتظر چی هستی؟ 
            </div>

            <button class="pop-primary-btn">
                عضویت
            </button>
        </div>
        <div class="container" style="margin-bottom:55px;">
            <div class="pop-h1">
                برخی از <span class="pop-orange">محبوب ترین ها</span>
            </div>
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-4 pop-card-container"
                v-for="movie in allmovies.movies.slice(0,12)" 
                    :key="movie.id">
                    <div class="pop-card-movie"
                    >
                    <router-link :to="'/movie/' + movie.id">
                        <div :id="movie.id"  
                            class="pop-card-movie-title" >{{movie.title}}
                        </div>
                        <img :src="movie.image">
                    </router-link>        
                    </div>
                </div>
                
            </div>
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

<style>
.pop-intro{
    height: 488px;
    text-align: center;
    background: url(/src/static/images/background.jpg) no-repeat;
    background-size: cover;
    width: 100%;
}
.pop-orange{
    color:var(--orange);
}
.pop-intro-title{
    color:white;
    font-size:36px;
}
.pop-logo-container{
    padding-top: 30px;
}
.pop-intro-desc{
    font-size: 19px;
    color: white;
    padding: 35px;
    padding-top: 32px;
    font-weight: normal;
}
.pop-primary-btn{
    background-color: var(--orange);
    color:white;
    border:none;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 15px;
}
.pop-primary-btn:hover{
    background-color: white;
    color:var(--orange);
    transform: scale(1.05);
}
.pop-primary-btn:active{
    transform: scale(0.95);;
}
.pop-h1{
    font-size: 34px;
    text-align: center;
    padding: 19px;
    margin-top: 10px;
}
.pop-card-container{
    margin-top: 21px;
}
.pop-card-movie{
    padding:0px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    max-height: 268px;
    position: relative;
}
.pop-card-movie:hover{
    transform: scale(1.03);
}
.pop-card-movie-title{
    position: absolute;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0px;
    bottom: 0px;
    padding: 38px 0px;
    text-align: center;
    backdrop-filter: blur(10px);
}
.pop-card-movie img{
    width:100%;
    height:100%;
    object-fit:fill;
}

</style>