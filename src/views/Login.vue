<template>
  <div class="">
     <b-card
        title="Login"
        tag="section"
        style="max-width: 20rem;"
        class="mb-2 mx-auto"
    >
     <b-form >
        <b-card-text>
          
      <b-form-group
        id="input-group-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Email"
          :state="emailValidation"
          required
        ></b-form-input>
        <b-form-valid-feedback  :state="emailValidation">Perfect !</b-form-valid-feedback>
        <b-form-invalid-feedback  :state="emailValidation">Email is not valid</b-form-invalid-feedback>
      </b-form-group>
       
        <b-form-group
        id="input-group-2"
      >
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          placeholder="Password"
          :state="passwordValidation"
          required
        ></b-form-input>
        <b-form-valid-feedback :state="passwordValidation">
            Perfect !
        </b-form-valid-feedback>
        <b-form-invalid-feedback  :state="passwordValidation">
            Password should be 8 or more characters
        </b-form-invalid-feedback>
      </b-form-group>
   
        </b-card-text>

        <b-button @click="onLogin()" variant="primary">Login</b-button>

        </b-form> 
    </b-card>
  </div>
</template>

<script>
import fb from '../plugins/firebase'

export default {
    name: 'Login',
    data() {
      return{
          email:'',
          password:''
      }
    },
    computed: {
        emailValidation() {
            if(this.email == '')
            {
              return null
            }else {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(this.email).toLowerCase());
            }
        },
        passwordValidation() {
            if(this.password == '')
            {
                return null
            } else if (this.password.length < 8)
            {
                return false
            } else {
                return true
            }
        }
    },
    methods:{
        onLogin(){
            if(this.emailValidation && this.passwordValidation) 
            {
                fb.auth().signInWithEmailAndPassword(this.email , this.password).then(()=>{
                    this.$router.push('/')
                }).catch((err)=>{
                    console.error(err.message)
                })
            }
        }
    }
}
</script>

<style>

</style>