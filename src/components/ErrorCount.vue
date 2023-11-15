<template>
     <div class="error" v-if="errorCount >= 10" >
        Erreur de connexion
     </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    errorCount: Number,
})
</script>
<style scoped lang="scss">

</style>