<template>
    <div class="attente">{{ lastData }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    lastData: String,
})
</script>
<style scoped lang="scss">
.attente {
    color: whitesmoke;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    padding: 10px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}


</style>