<template>
     <div class="nav-scroller py-1 mb-2">

        <ul class="nav d-flex justify-content-between">
          <li  v-for="(l, index) in link" :key="index" >
       
          <router-link  :to="l.path"  class="p-2 text-muted" href="#">{{l.text}} </router-link> 
          
          </li> 
           <li  v-if="!this.user" >
          <router-link  to="/login" class="p-2 text-muted" href="#" > Login </router-link> 
          <router-link  to="/register" class="p-2 text-muted" href="#" > Sign in </router-link> 
            </li>
           <li v-else>
             <a class="p-2 text-muted" href="#" @click="logOutU()" >Logout </a>
            </li>
            
        </ul>
      </div>
</template>
<script>

import { eventBus } from '@/main'
//import { mapGetters } from "vuex"

export default {
    name:"NavComp",
    data(){
          return{
            user: JSON.parse(localStorage.getItem('user'))
           
          }
        },
    props:{
      link:{
        type:Array,
        required:true
      },
      isLogged:{
        type:Boolean
      }
    },
    created(){
          eventBus.$on('refreshHeader', updateData => { this.user = updateData})
        },
        //  eventBus se koristi za slanje i prijem događaja (eventova) između komponenata koje nisu direktno povezane (Login i Nav u mom slucaju)
        //
    watch: {
        user: function(){
            this.$forceUpdate();
          }
          //pratimo promene "user" podatka u komponenti
          //osvezavamo komponentu sa $force kada se "user" promeni
        },
    methods:{
       logOutU(){
          this.$store.commit("logOut")
          this.user=""
          this.$router.push("/login");
          },
    
          
    }
}
</script>