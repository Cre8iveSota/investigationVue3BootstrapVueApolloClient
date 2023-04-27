import { createApp, provide, h } from "vue";
import App from './App.vue'
import { BootstrapVue } from './plugins/bootstrap-vue'
import "./plugins/bootstrap-vue/css";



import './assets/main.css'


import { DefaultApolloClient } from "@vue/apollo-composable"
import apolloClient from "./testAplloClient";


const app = createApp({
    setup() { provide(DefaultApolloClient, apolloClient); },
    render: () => h(App),
});

app.use(BootstrapVue)
app.mount('#app')


// const app = createApp(App)
// app.mount('#app')