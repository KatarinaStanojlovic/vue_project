import cats from './cats.json'
import axios from 'axios';

export default{
    state: {
        cats: cats,
        searchCat: { keyword:null },
        deletedCat: [],
    },
    mutations:{
        api(state){
            axios.get('https://api.api-ninjas.com/v1/cats?family_friendly=5&offset=20' , {
              headers:{
                'X-Api-Key': "teA3E56z98sWqLU9+aojmA==yoj8ORLSmmCf0EJT"
              }
            })
            .then((response) =>
            {
              
              state.cats = response.data
            })
            .catch((error) => {
              console.log(error)
            })
        },
        changeKeyword(state, keyword){
            state.searchCat.keyword = keyword
        },
        deleteCat(state, name){
            state.deletedCat.push(name)
        },
        updateCat(state, newCat){
            var cat = state.cats.find(x => x.name == newCat.name)
            cat.name = newCat.name
            cat.image_link = newCat.image_link
            cat.min_weight = newCat.min_weight
            cat.max_weight = newCat.max_weight
            cat.playfulness = newCat.playfulness
            cat.family_friendly = newCat.family_friendly
            cat.min_life_expectancy = newCat.min_life_expectancy
            cat.max_life_expectancy = newCat.max_life_expectancy
            cat.grooming = newCat.grooming
            cat.shedding = newCat.shedding
            cat.other_pets_friendly = newCat.other_pets_friendly
            cat.children_friendly = newCat.children_friendly
        },
      
    },
    actions: {
        changeKeyword(context, keyword){
            context.commit('changeKeyword',keyword)
        },
    },
    getters: {
        cats(state){
            if(state.searchCat.keyword){
                return state.cats.filter(function(c){
                    return c.name.toLowerCase().includes(state.searchCat.keyword.toLowerCase().trim());
                })
            }
            return state.cats
        },
        notDeletedCats(state, getters){
            return getters.cats.filter(x => !state.deletedCat.includes(x.name))
        }
    }

}