<template>
    <div>
        <div v-if="user">
            <section class="blog_area single-post-area py-80px section-margin--small">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8 posts-list">
                            <div class="single-post row">
                                <div class="col-md-12">
                                    <div class="feature-img">
                                        <img class="img-fluid" :src="this.image_link" alt="">
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex justify-content-center">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-md-12 d-flex justify-content-center mt-5 mb-3">
                                            <h2>{{this.name}}</h2>
                                        </div>
                                        <div class="col-md-12 d-flex justify-content-center" id="catDetails">
                                            <ul>
                                                <li>Shedding: {{this.shedding}}</li>
                                                <li>Children friendly: {{this.children_friendly}}</li>
                                                <li>Other pets friendly: {{this.other_pets_friendly}}</li>
                                                <li>Life expectancy: {{this.min_life_expectancy}} - {{this.max_life_expectancy}}</li>
                                                <li>Weight: {{this.min_weight}} - {{this.max_weight}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div v-else>
            <h1>Error 404: Page not found</h1>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

    export default{
        name:'MoreDetailsComp',
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
                user: JSON.parse(localStorage.getItem('user')),
            }
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
        }
    }
</script>
<style>
    #catDetails ul li{
        font-size: 18px;
        list-style: none;
    }
</style>