<template>
    <div class="pop-image-bg">
        <div class="pop-box-container">
        <h2>صفحه ی عضویت</h2>
        <form @submit.prevent="handleSubmit">
    
            <div class="form-group">
                <label for="username">نام کاربری</label>
                <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">کلمه ی عبور</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <label for="email">ایمیل</label>
                <input type="email" v-model="user.email" v-validate="'required'" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
                <button class="pop-primary-btn" :disabled="status.registering">عضویت</button>
                <router-link to="/login" class="btn btn-link for_link">صرف نظر</router-link>
            </div>

        </form>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            user: {
                username: '',
                password: '',
                email: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>

<style scoped>
    .for_link{
        text-decoration: none;
    }
    .pop-image-bg{
         height: 92.5vh;
     }
     .pop-primary-btn{
        font-size: 17px;
        padding: 6px 20px;
        border-radius: 9px;
    }
</style>