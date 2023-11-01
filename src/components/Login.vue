<template>
       <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark col-6 container">
        <div class="justify-content-center">
          <h1 class="display-4 font-italic">Please Login</h1>
        
          <form @submit.prevent="login" class="col">
        <custom-input name="email" label="Email:" v-model="email" type="email" id="email" placeholder="Enter email" @updatedValue="email=$event"/>
        <custom-input name="password" label="Password:" v-model="password" id="password" type="password" placeholder="Enter password" @updatedValue="password=$event" />
        <button type="submit" class="btn btn-primary btn-block">Login</button>
        <p v-if="showError" :class="errorClass" class="mt-3 alert alert-danger">{{ errorMessage }}</p>
      </form>
        </div>
      </div> 
</template>
<script>
import CustomInput from "./CustomInput.vue"
 import { mapGetters } from "vuex"
 import { eventBus } from '@/main';

export default {
    name:"LoginComp",
    components: {
    CustomInput
  },
  computed : {
        ...mapGetters(['user', 'role'])
        },
   data() {
    return {
      email: "",
      password: "",
      showError: false,
      errorMessage: "",
    };
  },
    methods: {
    login() {
      this.showError = false;

      if (!this.validacijaPolja()) {
        return;
      }

      const registeredUser = this.findRegisteredUser();

      if (!registeredUser) {
        this.showError = true;
        this.errorMessage = "Wrong credentials";
        return;
      }


        let userData = {
          email: registeredUser.email,
          role: registeredUser.role,
        };
        this.$store.commit("login", userData)
        let updateUser = JSON.parse(localStorage.getItem('user'))
        eventBus.$emit('refreshHeader', updateUser)

        this.$router.push("/cards");
     
    },

    findRegisteredUser() {
      return this.user.find((u) => u.email === this.email && u.password === this.password);
    },

    validacijaPolja() {
      if (this.email.trim() === "" || this.password.trim() === "") {
        this.showError = true;
        this.errorMessage = "Please fill in all fields";
        return false;
      }
      return true;
    },
   
  },
}
</script>