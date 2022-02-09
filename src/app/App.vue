<template>
    <div>
    <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <div class="container-fluid">
            <router-link class="navbar-brand" to="/landingpage">پاپ مووی</router-link>
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
                        <router-link to="/login" class="btn btn-link for_link">ورود</router-link>
                    </li>

                    <li class="nav-item signup">
                        <router-link to="/register" class="btn btn-link for_link">عضویت</router-link> 
                    </li>
                </ul>

            </div>
            </div>
        </nav>
    </header>

    <div class="jumbotron">
        <div class="container">
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

<style scoped>
    .for_link{
        text-decoration: none;
    }
</style>