<template>
    <div class="donne-attente" v-if="attente">
        Actualisation des données
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    attente: Boolean,
})
</script>

<style scoped lang="scss">
.donne-attente {
    color: rgb(255, 255, 255);
    position: fixed;
    z-index: 1000;
    bottom: 0;
}
</style>