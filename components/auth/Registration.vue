<template>
<div class="modal-card">
    <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('SignUpTitle') }}</p>
    </header>
    <form method="post">
        <section class="modal-card-body">
            <div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            type="text"
                            class="input"
                            :class="{ 'is-danger': $v.name.$invalid }"
                            :placeholder="$t('UserName')"
                            v-model.trim="$v.name.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                        </span>
                        <span v-if="$v.name.$invalid" class="icon is-small is-right">
                            <i class="fa fa-exclamation-circle"></i>
                        </span>
                    </p>
                    <p v-if="!$v.name.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('UserName')}) }}</p>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            class="input"
                            :class="{ 'is-danger': $v.email.$invalid }"
                            type="email"
                            :placeholder="$t('Email')"
                            v-model.trim="$v.email.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <span v-if="$v.email.$invalid" class="icon is-small is-right">
                            <i class='fa fa-exclamation-circle'></i>
                        </span>
                    </p>
                    <p v-if="!$v.email.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('Email')}) }}</p>
                    <p v-if="!$v.email.email" class="help is-danger">{{ $t('EmailInvalidFormat') }}</p>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input
                            class="input"
                            :class="{'is-danger': $v.password.$invalid}"
                            type="password"
                            :placeholder="$t('Password')"
                            v-model.trim="$v.password.$model"
                        >
                        <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                        </span>
                        <span v-if="$v.password.$invalid" class="icon is-small is-right">
                            <i class="fa fa-exclamation-circle"></i>
                        </span>
                    </p>
                    <p v-if="!$v.password.required" class="help is-danger">{{ $t('FieldIsRequired', { attr: $t('Password') }) }}</p>
                </div>
                
            </div>
        
        </section>
        <footer class="modal-card-foot is-right flex-end">
            <button :disabled="loading || $v.$invalid" class="button is-success is-right" :class="{'is-loading': loading}" @click="onRegister">{{ $t('btnRegister') }}</button>
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


