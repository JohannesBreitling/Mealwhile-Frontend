<script lang="ts" setup>
import { reactive } from "vue"

import { rules } from "@/assets/rules"

import MWInput from "@/components/MWInput.vue"
import MWButton from "@/components/MWButton.vue"

import MWErrorAlert from "@/components/MWErrorAlert.vue"
import { authHandler } from "../api/MWAuthHandler"

let register = () => {
    console.log("moin")
}

let checkUsername = async () => {
    if (data.username == '') {
        return;
    }
    
    data.usernameHint = 'messages.loadUsername'
    let response = await authHandler.checkUsername(data.username)

    if (response.code != 200) {
        return;
    }

    if (response.data.toString() === 'true') {
        data.usernameHint = 'messages.usernameAvaiable'
        data.usernameRules = [rules.noUsername]
    } else {
        data.usernameHint = 'messages.usernameNotAvaiable'
        data.usernameRules = [rules.noUsername, rules.usernameNotAvaiable]
    }
    
}
 
const data = reactive({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    userGroupId: '',
    usernameHint: '',
    usernameRules: [rules.noUsername]
})

</script>

<template>
    <div class="h-100 mw-center">
        <v-sheet rounded border class="pa-8 mw-form">
            <v-form @submit.prevent="register" validate-on="blur">
                <span class="text-h4">{{ $t('register.message') }}</span>
                <MWInput :rules="[rules.userGroupLength]" @input-change="(s) => (data.username = s)" has-append label-key="keywords.userGroup" class="mt-4">
                    <template v-slot:append>
                        <v-tooltip :text="$t('register.userGroupInfo')">
                            <template v-slot:activator="{props}">
                                <v-btn
                                    icon="mdi-information"
                                    variant="flat"
                                    v-bind="props"
                                ></v-btn>
                            </template>
                        </v-tooltip>
                    </template>
                </MWInput>

                <v-divider class="mt-2"></v-divider>

                <MWInput :hint="$t(data.usernameHint)" :rules="data.usernameRules" @input-change="(s) => {data.username = s; checkUsername()}" label-key="keywords.username" class="mt-4"></MWInput>

                <MWInput :rules="[rules.noFirstname]" @input-change="(s) => data.firstname = s" label-key="keywords.firstname" class="mt-4"></MWInput>
                <MWInput :rules="[rules.noLastname]" @input-change="(s) => data.lastname = s" label-key="keywords.lastname" class="mt-4"></MWInput>
                <MWInput :rules="[rules.shortPassword]" @input-change="(s) => data.password = s" label-key="keywords.password" type="password" class="mt-4"></MWInput>
                <MWButton label-key="keywords.register" type="submit" class="mt-4"></MWButton>
                
                <MWErrorAlert v-if="data.wrongPassword" class="mt-8" message-key="wrongPassword"></MWErrorAlert>
                <MWErrorAlert v-if="data.userNotFound" class="mt-8" message-key="userNotFound"></MWErrorAlert>
            </v-form>
            
        </v-sheet>
    </div>
</template>