<template>
    <div>
        <div class="container">
            <div class="container_groupe">
        
                <Count 
                    title="Aujourd'hui"
                    :chiffre="metrics?.sentToday"
                    :valeurRef="metrics?.sentYesterdayAtSameTime"
                />
                
                
                <Count 
                    title="Hier"
                    :chiffre="metrics?.sentYesterday" 
                
                />
            </div>
        
            <div class="container_groupe">
                    <Count 
                        title="Cette semaine"
                        :chiffre="metrics?.sentThisWeek"
                        :valeurRef="metrics?.sentLastWeekAtSameTime" />
                    <Count 
                        title="Semaine dernière"
                        :chiffre="metrics?.sentLastWeek" />
            </div>
            <div class="container_groupe">    
                    <Count 
                        title="Ce mois"
                        :chiffre="metrics?.sentThisMonth" 
                        :valeurRef="metrics?.sentLastMonthAtSameTime"/>
                    <Count 
                        title="Mois dernier"
                        :chiffre="metrics?.sentLastMonth" />
            </div>
            <div class="container_groupe">
                    <Count 
                        title="Cette année"
                        :chiffre="metrics?.sentThisYear"
                        :valeurRef="metrics?.sentLastYearAtSameTime" />
                    <Count 
                        title="Année dernière"
                        :chiffre="metrics?.sentLastYear" />
            </div>
        </div>

        <Lastdata
        :lastData="lastData"
        />
        <ActualiserDonnees
        :attente="attente"
        />
        <ErrorCount
        :errorCount="errorCount"
        />
    </div> 

</template>

<script setup>

import Count from '../Count.vue'
import { onMounted, ref } from 'vue'
import Lastdata from '../Lastdata.vue'
import ErrorCount from '../ErrorCount.vue'
import ActualiserDonnees from '../ActualiserDonnees.vue'
import axios from 'axios'

const attente = ref(false)
const lastData = ref('')
const options = {hour: '2-digit', minute: '2-digit', second: '2-digit'}
const metrics = ref(null)
const errorCount = ref(0)
const recupereDonnees = () => {
     attente.value = true
     console.log('attente')
     axios.get('https://atelier.cycleurope.fr/api/v5/metrics/support/tickets')
        .then(response => {
            attente.value = false
            console.log(response)
            metrics.value = response.data.data
            lastData.value = new Date().toLocaleString("fr-FR" , options)
            errorCount.value = 0
        })
        .catch(error => {
            console.log(error)
            errorCount.value++
        })
    }


onMounted(() => { 
recupereDonnees()
setInterval(recupereDonnees, 30000)
})

</script>



<style scoped lang="scss">
.container{
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
width: 100%;
padding: 50px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
 display:grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 20px; 
}
}



.container_groupe{
display: grid;
grid-template-columns: 1fr ;
gap: 20px;
border-radius: 13px;
//padding: 50px;
width: 100%;
@media screen and (min-width: 1200px){
.container_groupe{
display: grid;
grid-template-columns: 1fr 1fr  ;
gap: 20px;
border-radius: 13px;
}
}
}
.cadreheuredate {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
box-sizing: border-box;
padding-top: 50px;
justify-content: space-between;
}

.donne-attente {
color: whitesmoke;
position: fixed;
z-index: 1000;
bottom: 0;
}
</style>