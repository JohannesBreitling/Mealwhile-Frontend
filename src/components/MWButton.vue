<script setup lang="ts">

defineProps({
    labelKey: String,
    type: String
})

</script>

<template>
    <div class="mw-button">
        <v-btn color="#68a32e" hide-details elevation="0" variant="outlined" block :type="type">{{ $t(labelKey) }}</v-btn>
    </div>
</template>

<style scoped>

.mw-button {
    width: 100%;
}



</style>
