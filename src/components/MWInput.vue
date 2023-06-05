<script lang="ts" setup>

import { reactive } from 'vue';

const props = defineProps({
    labelKey: String,
    type: String,
    rules: Array
});

let data = reactive({ text: '' })

</script>


<template>
    <div>
        <v-text-field
        :type="type"
        variant="outlined"
        :label="$t(labelKey)"
        class="rounded-0"
        :rules="props.rules"
        v-model="data.text"
        required
        @keyup="$emit('input-change', data.text)"
        ></v-text-field>
    </div>
</template>

<style scoped>

</style>