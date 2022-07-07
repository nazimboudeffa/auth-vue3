import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/login', component: LoginPage},
        {path: '/register', component: RegisterPage}
    ]
})

export default router