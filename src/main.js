import { createApp, provide, h } from "vue";
import App from './App.vue'

import './assets/main.css'


import { DefaultApolloClient } from "@vue/apollo-composable"
import apolloClient from "./testAplloClient";


createApp({
    setup() { provide(DefaultApolloClient, apolloClient); },
    render: () => h(App),
}).mount('#app')

// const app = createApp(App)
// app.mount('#app')