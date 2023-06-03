<script setup lang="ts">

import { reactive } from "vue";
import MWInput from "@/components/MWInput.vue";
import MWButton from "@/components/MWButton.vue";

let formdata: { username : string, password: string } = reactive({
    username: '',
    password: ''
});

let login = () => {
    console.log("Moin")
}

</script>

<template>
    <div class="h-100 mw-center">
        <v-sheet rounded border class="pa-8 mw-login-form">
            <v-form @submit.prevent="login">
                <span class="text-h4">{{ $t('login.message') }}</span>
                <MWInput label-key="keywords.username" class="mt-4"></MWInput>
                <MWInput label-key="keywords.password" type="password" class="mt-4"></MWInput>
                <MWButton label-key="keywords.login" type="submit" class="mt-4"></MWButton>
            </v-form>
        </v-sheet>
    </div>
</template>

<style scoped>

.mw-login-form {
    max-width: 600px;
}

</style>