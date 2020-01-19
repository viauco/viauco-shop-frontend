<template>
<div class="modal-card">
    <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('SignUpTitle') }}</p>
    </header>
    <form @submit="checkForm" action="#" method="post">
        <section class="modal-card-body">
            <div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            type="text"
                            class="input"
                            :class="{ 'is-danger': $v.name.$error }"
                            :placeholder="$t('UserName')"
                            v-model.trim="$v.name.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                        </span>
                        <span v-if="$v.name.$error" class="icon is-small is-right">
                            <i class="" :class="{'fa fa-exclamation-circle' : $v.name.$error, 'fa fa-check': !$v.name.$error}"></i>
                        </span>
                    </p>
                    <p v-if="$v.name.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('UserName')}) }}</p>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            class="input"
                            :class="{ 'is-danger': $v.email.$error }"
                            type="email"
                            :placeholder="$t('email')"
                            v-model.trim="$v.email.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <span v-if="$v.email.$error" class="icon is-small is-right">
                            <i :class="[$v.email.$error ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                        </span>
                    </p>
                    <p v-if="$v.email.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('Email')}) }}</p>
                    <p v-if="$v.email.email" class="help is-danger">{{ $t('EmailInvalidFormat') }}</p>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            class="input"
                            :class="{'is-danger': $v.password.$error}"
                            type="password"
                            :placeholder="$t('Password')"
                            v-model.trim="$v.password.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                        <span v-if="$v.password.$error" class="icon is-small is-right">
                            <i :class="[$v.password.$error ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                        </span>
                    </p>
                    <p v-if="$v.password.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('Password') }) }}</p>
                </div>
                
            </div>
        
        </section>
        <footer class="modal-card-foot">
            <button :disabled="loading && $v.$invalid" class="button is-success" @click="onRegister">{{ $t('btnRegister') }}</button>
        </footer>
    </form>
</div>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators'
import bus from '@/services/bus'

export default {
    name: 'registration',

    data () {
        return {
            name: '',
            email: '',
            password: '',
            loading: false
        };
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            email: email
        },
        password: {
            required      
        },
    },
    methods: {
        onRegister() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.loading = true;
            this.$store.dispatch('register', {
                email: this.email, password: this.password, username: this.name
            })
            .then( (response) => {
                bus.$emit('onDialogIndex',{ index: 0})
            } )
            .catch( (error) => {
                
            } )
            .finally( () => {
                this.loading = false;
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.fa-exclamation-circle {
  color: red;
}
.fa-check {
  color: green;
}
.modal-card{
    width: 400px;
}
</style>


