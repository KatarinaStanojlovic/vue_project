<template>
    <div>
        <section class="section-margin--small mb-5" v-if="user && user.role == 'admin'">
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                  <section class="lattest-product-area pb-40 category-list">
                    <form class="row login_form d-flex justify-content-center">

                        <custom-input name="min_weight" label="Min weight" v-model="min_weight" type="text" placeholder="min weight" 
                        id="min_weight" @updatedValue="min_weight=$event"/>
                        <custom-input name="max_weight" label="Max weight" id="max_weight" v-model="max_weight" type="text" placeholder="max weight" @updatedValue="max_weight=$event"/>
                        <custom-input name="min_life_expectancy" id="min_life_expectancy" label="min_life_expectancy" v-model="min_life_expectancy" type="text" placeholder="Min life expectancy" @updatedValue="min_life_expectancy=$event"/>

                        <custom-input name="max_life_expectancy " id="max_life_expectancy" label="max_life_expectancy " v-model="max_life_expectancy" type="text" placeholder="max_life_expectancy " @updatedValue="max_life_expectancy =$event"/>
                        <custom-input name="shedding  " label="shedding" id="shedding" v-model="shedding  " type="text" placeholder="shedding" @updatedValue="shedding  =$event"/>
                        <custom-input name="family_friendly" label="family_friendly" id="family_friendly" v-model="family_friendly" type="text" placeholder="family_friendly" @updatedValue="family_friendly  =$event"/>
                        <custom-input name="playfulness  " label="playfulness" id="playfulness" v-model="playfulness  " type="text" placeholder="playfulness" @updatedValue="playfulness  =$event"/>
                        <custom-input name="grooming" label="grooming" id="grooming" v-model="grooming" type="text" placeholder="grooming" @updatedValue="grooming=$event"/>
                        <custom-input name="other_pets_friendly" id="other_pets_friendly" label="other_pets_friendly" v-model="other_pets_friendly" type="text" placeholder="other_pets_friendly" @updatedValue="other_pets_friendly=$event"/>
                        <custom-input name="children_friendly" id="children_friendly" label="children_friendly" v-model="children_friendly" type="text" placeholder="children_friendly" @updatedValue="children_friendly=$event"/>
                         <custom-input name="image_link" label="image_link" id="image_link" v-model="image_link" type="text" placeholder="image_link" @updatedValue="image_link=$event"/>

                        <div class="col-md-12 form-group d-flex justify-content-center" id="imgPrev">
                            <img v-if="image_link" width="400" :src="image_link" class="img img-round" />
                        </div>
                        <div class="col-md-4 form-group">
                            <input type="button" value="Update" class="button button-register w-100" @click="editCat()" />
                        </div>
                    </form>
                  </section>
                  <!-- End Best Seller -->
                </div>
              </div>
            </div>
          </section>
          <div v-else>
            <h1>Error 404: Page not found</h1>
          </div>
    </div>	  
</template>
<script>

import CustomInput from "./CustomInput.vue"
import { mapGetters } from 'vuex'

    export default{
        name: 'EditCard', 
         components:{
        CustomInput
    },
        data(){
            return{
                name: '',
                image_link: '',
                min_weight: 0,
                max_weight: 0,
                min_life_expectancy: 0,
                max_life_expectancy : 0,
                shedding :0,
                family_friendly: 0,
                playfulness: 0,
                grooming: 0,
                other_pets_friendly: 0,
                children_friendly: 0,
                selectedItem: '',
                user: JSON.parse(localStorage.getItem('user')),
            }
        },
        created(){
            this.selectedItem = this.$route.params.name;
        },
        mounted(){
            this.name = this.$route.params.name
            if(this.$route.params.name){
                let cat = this.notDeletedCats.filter(x => x.name == this.name)[0]
                this.image_link = cat.image_link
                this.min_weight = cat.min_weight
                this.max_weight = cat.max_weight
                this.playfulness = cat.playfulness
                this.max_life_expectancy = cat.max_life_expectancy
                this.min_life_expectancy = cat.min_life_expectancy
                this.family_friendly = cat.family_friendly
                this.grooming = cat.grooming
                this.shedding = cat.shedding
                this.other_pets_friendly = cat.other_pets_friendly
                this.children_friendly = cat.children_friendly
            }
        },
        computed: {
            ...mapGetters(['notDeletedCats'])
        },
        methods: {
            editCat: function() {
                this.$store.commit("updateCat", 
                {
                    name: this.name,
                    image_link: this.image_link,
                    min_weight: this.min_weight,
                    max_weight: this.max_weight,
                    playfulness: this.playfulness,
                    family_friendly: this.family_friendly,
                    min_life_expectancy: this.min_life_expectancy,
                    max_life_expectancy: this.max_life_expectancy,
                    grooming: this.grooming,
                    shedding: this.shedding,
                    other_pets_friendly: this.other_pets_friendly,
                    children_friendly: this.children_friendly,
                })
            },
        },
        watch: {
            selectedItem(){
                let cat = this.notDeletedCats.filter(x => x.name == this.selectedItem)[0]
                this.name = cat.name
                this.image_link = cat.image_link
                this.min_weight = cat.min_weight
                this.max_weight = cat.max_weight
                this.playfulness = cat.playfulness
                this.max_life_expectancy = cat.max_life_expectancy
                this.min_life_expectancy = cat.min_life_expectancy
                this.family_friendly = cat.family_friendly
                this.grooming = cat.grooming
                this.shedding = cat.shedding
                this.other_pets_friendly = cat.other_pets_friendly
                this.children_friendly = cat.children_friendly
            }
        }
    }
</script>
<style>
    #imgPrev img{
        border: 2px solid black;
        margin:0px auto;
    }
</style>