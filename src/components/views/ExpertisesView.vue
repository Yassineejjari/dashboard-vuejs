<template>
    
        <div class="container">
            
        
                <Count 
                    title="Total"
                    :chiffre="metrics?.total"
                    
                />
                
                
                <Count 
                    title="Acceptées"
                    :chiffre="metrics?.accepted" 
                
                />
            
        
            
                    <Count 
                        title="Refusées"
                        :chiffre="metrics?.rejected"
                     />
                    <Count 
                        title="En attente"
                        :chiffre="metrics?.pending" />
        </div>
        <div class="containerdeux">
                <CountExpertises
                    title="Vélos"
                    total-titre="Total:"
                    :total="metrics?.bikes.total"
                    sous-titre="Acceptées"
                    sous-titre2="Refusées"
                    :percentage-total="pctBikes"
                    :chiffre-accepte="metrics?.bikes.accepted" 
                    :chiffre-refuse="metrics?.bikes.rejected" />
                <CountExpertises
                  title="Composants"
                  total-titre="Total:"
                  :total="metrics?.components.total"
                  sous-titre="Acceptées"
                  sous-titre2="Refusées"
                  :percentage-total="pctComponents"
                  :chiffre-accepte="metrics?.components.accepted"
                  :chiffre-refuse="metrics?.components.rejected"  />
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
    

</template>
<script setup>
import CountExpertises from '../CountExpertises.vue'
import Count from '../Count.vue'
import { onMounted, ref } from 'vue'
import Lastdata from '../Lastdata.vue'
import ErrorCount from '../ErrorCount.vue'
import ActualiserDonnees from '../ActualiserDonnees.vue'
import axios from 'axios'
import { usePercentage } from '../../composables/usePercentage.js'


const attente = ref(false)
const lastData = ref('')
const options = {hour: '2-digit', minute: '2-digit', second: '2-digit'}
const metrics = ref(null)
const errorCount = ref(0)
const pctBikes = ref('en attente')
const pctComponents = ref('en attente')
const recupereDonnees = () => {
     attente.value = true
     console.log('attente')
     axios.get('https://atelier.cycleurope.fr/api/v5/metrics/support/expertises')
        .then(response => {
            attente.value = false
            console.log(response)
            metrics.value = response.data
            lastData.value = new Date().toLocaleString("fr-FR" , options)
            pctBikes.value = usePercentage(metrics.value.bikes.total, metrics.value.total)
            pctComponents.value = usePercentage(metrics.value.components.total, metrics.value.total)
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
padding: 25px 25px 25px 25px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
 display:grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 20px; 
}
}
.containerdeux{
display: grid;
grid-template-columns:  1fr 1fr;
gap: 20px;
padding: 25px 25px 25px 25px;
box-sizing: border-box;
@media screen and (min-width: 1200px){
 display:grid;
 grid-template-columns:  1fr 1fr;
 gap: 20px; 

}
}



.container_groupe{
display: grid;
grid-template-columns: 1fr ;
gap: 20px;
border-radius: 13px;
background-color: aqua;
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


</style>