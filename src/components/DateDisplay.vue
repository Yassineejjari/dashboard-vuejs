<template>
    <div id="date">
        <div class="dateAujourdhui">{{ dateAujourdhui }}</div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateAujourdhui = ref('')
const afficherDate = () => {
    dateAujourdhui.value = new Date().toLocaleDateString('fr-FR' , options)
    
}
onMounted(() => { 
   
   afficherDate()
   setInterval(afficherDate, 1000)
   
})
</script>
<style scoped lang="scss">
#date{

    display: flex;
    font-size: 34px;
    font-family: 'courier new', courier, monospace;
    font-weight: bold;
}
.dateAujourdhui{
    color:whitesmoke;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:40px ;
    gap: 15px;
    @media screen and (min-width: 1200px) {
        font-size: 50px;
    }
  }

</style>