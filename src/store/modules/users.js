import users from "./users.json"

export default{
    state: {
        user: { email : "", role: "" },
        users : users
    },
    mutations: {
        login(state, user){
            state.user.email = user.email
            state.user.role = user.role
            let checkLogin = JSON.parse(localStorage.getItem("user"))
            if(!checkLogin){
                localStorage.setItem("user", JSON.stringify(user));
            }
            
        },
        logOut(state){
            state.user.email = ""
            state.user.role = ""
            localStorage.removeItem("user");
        },
        // initializesStore(state){
        //     if(localStorage.getItem("email")){
        //     state.email = localStorage.getItem("email")
        //     }
        // },
        addUser(state, user){
            state.users.push({
                username: user.username,
                email: user.email,
                password: user.password,
                role: 'user'
            })
        },
    },
    getters: {
        email(state){
            return state.user.email
        },
        role(state) {
            return state.user.role
        },
        user(state) {
            return state.users
        }
    },
    
}