<template>
<div >
  <div class="container jumbotron p-3 p-md-5 text-white rounded bg-dark col-6" v-if="!users">
    <div class="row justify-content-center align-items-center">
      <h1 class="mt-5">Registration</h1>
    <form>
      <custom-input name="username" label="Username" v-model="username" id="username" placeholder="Enter username" @updatedValue="username=$event"/>
      <custom-input name="email" label="Email" v-model="email" type="email" id="email" placeholder="Enter email" @updatedValue="email=$event" />
      <custom-input name="password" label="Password" v-model="password" id="password" type="password" placeholder="Password" @updatedValue="password=$event" />
      <custom-input name="repassword" label="Confirm Password" v-model="rePassword" id="repassword" type="password" placeholder="Confirm Password" @updatedValue="rePassword=$event" />
      <button @click="submitForm()" class="btn btn-primary">Registration</button>
    </form>
      <div v-if="error" class="alert alert-danger">
        <p v-if="!username.trim()">Username is required.</p>
        <p v-if="!email.trim()">Email is required.</p>
        <p v-if="!password.trim()">Password is required.</p>
      </div>
    </div>
  </div>
  <div v-else>
            <h1>You are already registered.</h1>
        </div>
</div>
</template>
<script>
import CustomInput from "./CustomInput.vue"
import { mapGetters } from 'vuex';


export default {
    name:"RegisterComp",
    components:{
        CustomInput
    },
    data(){
        return{
            username: "",
            email: "",
            password: "",
            rePassword: "",
            error: "",
            users: JSON.parse(localStorage.getItem('user')),
        }
    },computed: {
            ...mapGetters(['user'])
        },
       methods:{
            submitForm(){
                this.error = ""
                let newUsername = this.username
                let newEmail = this.email
                let newPassword = this.password
                let newRePassword = this.rePassword

                let regUsername = /^[a-z]{3,10}.?([a-z]{3,10})?/
                let regEmail = /^[a-z]+([.]?[a-z]*[\d]*)*@[a-z]+([.]?[a-z]+)*(.[a-z]{2,3})+$/
                let regPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

                if(!regUsername.test(newUsername)){
                    this.error = "Invalid username.";
                }
                if(!regEmail.test(newEmail)){
                    this.error += " Invalid mail.";
                }
                if(!regPass.test(newPassword)){
                    this.error += " Invalid password.";
                }
                if(newPassword != newRePassword){
                    this.error += " Passwords don't match."
                }

                let checkUser = this.user.find(x => x.username == newUsername || x.email == newEmail)
                if(checkUser){
                    this.error += " User already exists."
                }

                if(this.error){
                    return
                }

                let userObj = {
                    username: newUsername,
                    email: newEmail,
                    password: newPassword,
                }
                
                this.$store.commit("addUser", userObj)
                
                this.$router.push("/login")
            }
        },
        getters:{
            users(state){
                return state.user
            },
        }
  
};

</script>