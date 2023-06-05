import './assets/main.css'

// Vue
import { createApp } from 'vue'
import App from './App.vue'

// Pinia state management
import { createPinia } from 'pinia'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Vue router
import router from './router'

// Internationalization
import { i18n } from './i18n/i18n';
// Create the vue application
const app = createApp(App)

// Create the vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  components,
  directives
})


app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(i18n)


app.mount('#app')
