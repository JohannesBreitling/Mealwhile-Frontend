<script lang="ts" setup>

const props = defineProps({
    messageKey: String
})

</script>

<template>
    <div>
        <v-alert
            color="#bd3020"
            icon="$error"
            variant="outlined"
            :title="$t('errors.title.' + messageKey)"
            :text="$t('errors.message.' + messageKey)"
        ></v-alert>
    </div>
</template>