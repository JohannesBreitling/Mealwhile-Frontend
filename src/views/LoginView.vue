<script setup lang="ts">

import { reactive } from "vue";
import MWInput from "@/components/MWInput.vue"
import MWButton from "@/components/MWButton.vue"

import MWErrorAlert from "@/components/MWErrorAlert.vue"

import { authHandler } from '../api/MWAuthHandler'
import MWErrorAlertVue from "../components/MWErrorAlert.vue";

import { i18n } from "@/i18n/i18n";
import { tokenService } from "@/token/TokenService";
import router from "@/router";

import { rules } from '../assets/rules'

let data: { username : string, password: string, userNotFound: boolean, wrongPassword: boolean } = reactive({
    username: '',
    password: '',
    userNotFound: false,
    wrongPassword: false
});

let emit = defineEmits(['page-error'])

let login = async () => {
    // Reset the error messages
    data.userNotFound = false
    data.wrongPassword = false

    // Validate the inputs
    if (data.password == '' || data.username == '' || data.password == null || data.username == null) {
        return
    }

    let response = await authHandler.authenticate(data.username, data.password);

    // Check if response is error
    if (response.isError) {
        if (response.code == 400) {
            data.wrongPassword = true
            return;
        }

        if (response.code == 404) {
            data.userNotFound = true
            return;
        }

        emit("page-error", response)
    }

    // save token and navigate to homepage
    tokenService.saveToken(response.data['token'])
    console.debug("Token saved to cookie")
    data.userNotFound = false
    data.wrongPassword = false

    router.push({ name: 'home' });
}

</script>

<template>
    <div class="h-100 mw-center">
        <v-sheet rounded border class="pa-8 mw-form">
            <v-form @submit.prevent="login" validate-on="blur">
                <span class="text-h4">{{ $t('login.message') }}</span>
                <MWInput :rules="[rules.noUsername]" @input-change="(s) => (data.username = s)" label-key="keywords.username" class="mt-4"></MWInput>
                <MWInput :rules="[rules.noPassword]" @input-change="(s) => data.password = s" label-key="keywords.password" type="password" class="mt-4"></MWInput>
                <MWButton label-key="keywords.login" type="submit" class="mt-4"></MWButton>
                <div class="mt-4">
                    <router-link class="mw-link-secondary" to="register">{{ $t('messages.noAccount') }}</router-link>
                </div>
                
                <MWErrorAlert v-if="data.wrongPassword" class="mt-8" message-key="wrongPassword"></MWErrorAlert>
                <MWErrorAlert v-if="data.userNotFound" class="mt-8" message-key="userNotFound"></MWErrorAlert>
            </v-form>
            
        </v-sheet>
    </div>
</template>

<style scoped>

.mw-login-form {
    max-width: 600px;
}

</style>