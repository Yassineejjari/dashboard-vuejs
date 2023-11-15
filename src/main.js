import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import HomeView from './components/views/HomeView.vue'
import ExpertisesView from './components/views/ExpertisesView.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', name:'Home', component: HomeView },
    { path: '/expertises', name: 'Expertises', component: ExpertisesView },
    ]
const router = createRouter({
    history: createWebHistory(),
    routes
    })


library.add(faArrowDown,faArrowUp)
createApp(App)
.component('awesome-icon',FontAwesomeIcon)
.use(router)
.mount('#app')
