<template>
   <div>
    <section class="section-margin--small mb-5">
        <div class="container">
        <div class="row">
            <div class="col-md-12">
            <!-- Start Filter Bar -->
            <div class="filter-bar d-flex flex-wrap justify-content-center">
                <div>
                <div class="input-group mb-3 filter-bar d-flex flex-wrap justify-content-center">
                <div class="filter-bar-search">
                    <input type="text" class="form-control" placeholder="Search by race..." v-model="keyword">
                </div>
                </div>
                </div>
            </div>
            <!-- End Filter Bar -->
            <!-- Start Best Seller -->
            <section class="lattest-product-area pb-40 category-list">
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-5 mt-3" v-for="cat,index in notDeletedCats" :key="index">
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" alt="Card image cap" :src="cat.image_link">
                            <div class="card-body">
                                <h5 class="card-title">{{cat.name}}</h5>
                            </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Friendly (1-5): {{cat.other_pets_friendly}}</li>
                                <li class="list-group-item">Playfulness (1-5): {{cat.playfulness}}</li>
                                <li class="list-group-item">Grooming (1-5): {{cat.grooming}}</li>
                                </ul>
                            <div class="card-body" v-if="user ">
                                <a href="#" class="card-link" @click="catDetails(cat.name)">More details</a>
                                 <a href="#" class="card-link" @click="editCat(cat.name)" v-if="user && user.role == 'admin'">Edit</a>
                                <a href="#" class="card-link" @click="deleteCat(cat.name)" v-if="user && user.role == 'admin'">Remove</a>
                               </div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Best Seller -->
            </div>
        </div>
        </div>
    </section>	  
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name:"CardComp",
    data(){
      return{ 
        keyword:"",
        user: JSON.parse(localStorage.getItem('user')),
      }
    },
    computed:{
      ...mapGetters(['cats', 'notDeletedCats'])
    },
    created() {
            if(this.notDeletedCats.length == 0){
                this.apiCats()
            }
            this.$store.dispatch("changeKeyword", this.keyword)
        },
         watch: {
            keyword: function(){
                this.$store.dispatch("changeKeyword", this.keyword)
            }
        },
    methods: {
      apiCats() {
        this.$store.commit("api"); 
     
        return this.cats;
        },
     deleteCat(name){
                this.$store.commit("deleteCat", name)
            },
    editCat(name){
                this.$router.push({name: 'edit', params: {name: name} })
            },
     catDetails(name){
                this.$router.push({ name: 'details', params: {name: name}})
            }, 
    }

}
</script>