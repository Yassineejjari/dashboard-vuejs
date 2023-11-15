<template>
    <div id="horloge">
        <div class="heure">{{ heure }}</div>
        <div class="points">:</div>
        <div class="Minutes">{{ minutes }}</div>
        <div class="points"><span v-show="pointsVisible">:</span></div>
        <div class="secondes">{{ secondes }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const heure = ref()
const minutes =ref()
const secondes = ref()
const pointsVisible = ref(true)
const afficherHeure = () => {
    secondes.value = new Date().getSeconds().toString().padStart(2,'0')
    minutes.value = new Date().getMinutes().toString().padStart(2,'0')
    heure.value = new Date().getHours().toString().padStart(2, '0')
    
}
const afficherPoints = () => {
    pointsVisible.value = !pointsVisible.value

    
}
onMounted(() => { 
   console.log("pret")
   afficherHeure()
   setInterval(afficherHeure, 1000)
   setInterval(afficherPoints, 500)
   
})



</script>


<style scoped lang="scss">
.points{

    width: 30px;
    display: block;
    

}
#horloge{
display: flex;
font-size: 45px;
font-family: 'courier new', courier, monospace;
font-weight: bold;
color: red;
}

</style>