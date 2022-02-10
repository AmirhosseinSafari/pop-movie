<template>
    <div>
    <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light pop-header">
            <div class="container-fluid">
            <router-link class="navbar-brand" to="/landingpage"> <img src="src/static/images/header-logo.png" alt="PopMovie"> </router-link>
            <span class="navbar-brand pop-header-desc">سریعتر از همیشه فیلم های مورد علاقتو پیدا کن.</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="تبدیل">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <!--<ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">  </a>
                </li>
                </ul>-->
                
                <!--<form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="جستجو" aria-label="جستجو">
                <button class="btn btn-outline-success" type="submit">جستجو</button>
                </form>-->

                <ul class="d-flex navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item login">
                        <router-link to="/login" class="btn btn-link pop-link">ورود</router-link>
                    </li>
                    <li class="nav-item signup">
                        <router-link to="/register" class="btn btn-link pop-link">عضویت</router-link> 
                    </li>
                </ul>


            </div>
            </div>
        </nav>
    </header>

    <div class="jumbotron pop-full-width">
        <div class="">
            <div class="row">
                <div class="col-sm-12 offset-sm-3">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};
</script>

<style>
    :root{
        --gray:#767676;
        --orange:#FF7A00;
    }
    html, body{
       overflow-x: hidden;
    }
   @font-face {
    font-family: BYekan;
    src: url(/src/static/fonts/BYekan+Bold.ttf);
    font-weight: bold;
    }

    @font-face {
    font-family: BYekan;
    src: url(/src/static/fonts/BYekan+.ttf);
    font-weight: normal;
    }
    *{
        font-family: BYekan;
        transition-duration: 0.4s;
    }

    .for_link{
        text-decoration: none;
    }

    .pop-header{
        background-color:white;
        
        box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.1);
    }
    .pop-header-desc{
        font-size: 14px;
        font-family: BYekan;
        color:var(--gray)
    }
    .pop-link{
        text-decoration: none;
        color:var(--gray);
        font-size: 16px;
        margin:5px;
    }
    .pop-link:hover{
        color:white;
        text-decoration: none;
        background-color:var(--orange);
    }
    .jumbotron{
        background-color: white;
        
    }
    .pop-full-width{
        margin:0px;
        margin-top: 63px;
        padding: 0px;
    }

</style>
