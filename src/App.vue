<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <v-app>
        <v-container class="vh-100">
            <RouterView @page-error="(t) => console.log(t)" />  
        </v-container>
        <v-footer class="mw-bg-primary-dark">
            <div>
                <span class="text-h5">Sprache</span><br>
                <span @click="console.log('moin')" class="mw-clickable">Englisch</span><br>
                <span @click="console.log('moin')" class="mw-clickable">Deutsch</span><br>
            </div>
        </v-footer>
    </v-app>
</template>

<style scoped>



</style>
