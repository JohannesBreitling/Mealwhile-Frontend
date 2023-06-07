<script lang="ts" setup>

import { reactive } from 'vue';

const props = defineProps({
    labelKey: String,
    type: String,
    rules: Array,
    hasAppend: Boolean,
    hint: String,
    loading: Boolean
});

let data = reactive({ text: '' })

</script>


<template>
    <v-text-field
        :type="type"
        variant="outlined"
        :label="$t(labelKey)"
        :hint="hint"
        persistent-hint
        :loading="loading"
        :rules="props.rules"
        v-model="data.text"
        required
        @keyup="$emit('input-change', data.text)"
    >
    
        <template v-slot:append v-if="props.hasAppend">
            <slot name="append"></slot>
        </template>
    </v-text-field>
</template>

<style scoped>

</style>