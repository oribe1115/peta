/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './lib/apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

registerPlugins(app)

app.mount('#app')
