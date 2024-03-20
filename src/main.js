import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import NavigationBar from './components/NavigationBar.vue'

const app = createApp(app);
app.component('NavigationBar', NavigationBar);

// TailwindCSS
import 'tailwindcss/tailwind.css'

// Vuex
import { createStore } from 'vuex'
const store = createStore({
    // Your actual Vuex store configuration here
})

// Heroicons
import '@heroicons/vue/24/outline'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
const vuetify = createVuetify()

// Vue Router
import router from './router/index.js'

// Axios
import axios from 'axios'

app.use(store).use(vuetify).use(router).mount('#app')
