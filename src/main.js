import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


import { DefaultApolloClient } from "@vue/apollo-composable"
import apolloClient from "./plugins/apolloclient";


createApp({
    setup() { provide(DefaultApolloClient, apolloClient); },
    render: () => h(App),
}).mount('#app')
