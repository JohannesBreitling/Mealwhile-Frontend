<script lang="ts" setup>

import { i18n } from '../i18n/i18n'

defineProps({
    labelKey: String,
    type: String
});

let rules = [
    v => !!v || i18n.global.messages['de'].messages.rules.noUsername
]

</script>


<template>

    <div>
        <v-text-field
        :type="type"
        variant="outlined"
        :label="$t(labelKey)"
        class="rounded-0"
        :rules="rules"
        required
        ></v-text-field>
    </div>

</template>

<style scoped>

</style>