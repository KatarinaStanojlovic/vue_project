<template>
  <div id="app">
  <html lang="en">
  <HeadComp/>

  <body cz-shortcut-listen="true">

    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class=" text-center">
            <a class="blog-header-logo text-dark" href="#">Get Cat</a>
            <hr/>
          </div>
         
        </div>
      </header>

     <NavComp :link="linkovi"  />

      <div id="main">
        <!--Ukljucivanje kartica sa mackama-->
        <router-view ></router-view>
      </div>
    </div>


   <FooterComp/>
  

</body></html>
  </div>
</template>

<script>
import HeadComp from './components/Head.vue'
import FooterComp from "./components/Footer.vue"
import NavComp from "./components/Nav.vue"

export default {
  name: 'App',
  components: {
    HeadComp,
    FooterComp,
    NavComp
  },
  data(){
    return{
      linkovi:[{
        path:"/home",
        text: "Home"
      }
      ,
       {
        path:"/cards",
        text: "Cats"
      }
      ]
    }
  },
    

    // filteredLinks() {
    //   if (!this.isLogged) {
    //     return this.l.filter((link) => link.text === "Login" || link.text === "Register" || link.text === "Author");
    //   } else {
    //     const role = localStorage.getItem("role");
    //     if (role === "admin") {
    //       return this.links.filter((link) => link.text !== "Login" && link.text !== "Register" && link.text !== "Cart");
    //     } else if (role === "user") {
    //       return this.links.filter((link) => link.text === "Products" || link.text === "Cart" || link.text === "Odjava");
    //     }
    //   }
    //   return [];
    // },
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app a{
  text-decoration: none;
 
  }
.blog-header-logo {
     font-size: 2.25rem;
  }
</style>
