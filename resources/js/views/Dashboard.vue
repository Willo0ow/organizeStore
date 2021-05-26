<template>
  <v-card>
      <v-card-title>
          <v-icon color="black">{{icons.mdiApps}}</v-icon>
          <span class="ml-4">Dashboard</span>
          <v-btn link to="/about" dark class="ml-auto">About</v-btn>
      </v-card-title>
  </v-card>
</template>

<script>
import { mdiApps } from '@mdi/js';
export default {
    data(){
        return{
            icons: {
                mdiApps
            }
        }
    }
}
</script>