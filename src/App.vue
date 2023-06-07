<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

import { i18n } from './i18n/i18n'

let changeLocale = (locale: "de" | "en") => {
    i18n.global.locale = locale;
}

</script>

<template>
    <v-app>
        <v-container class="vh-100">
            <RouterView @page-error="(t) => console.log(t)" />  
        </v-container>
        <v-footer class="mw-bg-primary-dark">
            <div>
                <span class="text-h5">Sprache</span><br>
                <span @click="changeLocale('en')" class="mw-clickable">Englisch</span><br>
                <span @click="changeLocale('de')" class="mw-clickable">Deutsch</span><br>
            </div>
        </v-footer>
    </v-app>
</template>

<style scoped>



</style>
