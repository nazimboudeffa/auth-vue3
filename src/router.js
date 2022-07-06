import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: LoginPage}
    ]
})

export default router