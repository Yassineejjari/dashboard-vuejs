<template>
    <div>
        <div class="box">
            <div class="title"> 
                <div class="titre"> {{ title }} </div>
                <div class="total">  
                    <div><span>Total</span></div> 
                    <div><span class="totalNumber">{{ total }}</span></div> 
                    <div><span class="percenttotal">{{ percentageTotal }}</span></div> 
                    
                </div>
            </div>

            <div class="soustitre"> 
                <div class="accepte"> {{ sousTitre }}  </div>
                <div class="refuse">  {{ sousTitre2 }} </div>
            </div>
            <div class="interieur">
                <div class="chiffreaccepte"> {{ chiffreAccepte }}</div>
                <div class="chiffrerefuse"> {{ chiffreRefuse }}</div>
            </div>
            <div class="percent">
                <div class="percentAccepte"> <span>{{ percentAccepte }}</span></div>
                <div class="percentRefuse"> <span>{{ percentRefuse }}</span></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps,computed, ref, onUpdated } from 'vue'
import { usePercentage } from '../composables/usePercentage.js'

const percentAccepte = ref()
const percentRefuse = ref()
const percentageTotalAccepte = ref()
const percentageTotalRefuse = ref()

const props = defineProps({
    title:{
        type:String,
        default:'',
        required: true
    },
    totalTitre:{
        type:String,
        default:'',
        required: true
    },
    sousTitre:{
        type:String,
        default:'',
        required: false
    },
    sousTitre2:{
        type:String,
        default:'',
        required: false
    },
    chiffreAccepte:{
        type:Number,
        required: false
    },
    chiffreRefuse:{
        type:Number,
        required: false
    },
    total:{
        type:Number,
        required: false
    },
    percentageTotal:{
        type: String,
        required: false
    },
})

const directionFleche = computed(() => {
    if (props.valeurRef || props.valeurRef == 0 ) {
        if (props.chiffre > props.valeurRef) {
            return 'fa-solid fa-arrow-up'
        } else {
            return 'fa-solid fa-arrow-down'
        }
    } 
})


onUpdated(() => {
    console.log(props.chiffreaccepte)
    percentAccepte.value = usePercentage(props.chiffreAccepte , props.total)
    percentRefuse.value = usePercentage(props.chiffreRefuse, props.total)
    percentageTotalAccepte.value = usePercentage(props.chiffreAccepte , props.total)
    percentageTotalRefuse.value = usePercentage(props.chiffreRefuse, props.total)
})
</script>
<style scoped lang="scss">
.box {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    //text-align: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font:color #ffff ; 
    padding: 2%;
    @media screen and (min-width: 1200px){
        padding: 3% 3% 3% 3%;
        font-size: 25px;
    }
        
    .title{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        padding:4% 4% 6% 4%;
    }
    .titre{
        font-size: 20px;
        @media screen and (min-width: 1200px){
            font-size: 35px;
        }
    }
 
    .soustitre{
        display: flex;
        justify-content: space-between;
        padding: 4% 4% 7% 4%;
    }
    .interieur{
        display: flex;
        justify-content: space-between;
        padding: 2% 4% 2% 4%;
        font-size: 20px;
        @media screen and (min-width: 1200px){
            font-size: 50px;
        }
        
    }
    .totalNumber{
        font-size: 30px;
        @media screen and (min-width: 1200px){
            font-size: 50px;
        }
    }
    .percent{
        display: flex;
        justify-content: space-between;
    }
    .percenttotal{
        font-size: 20px;
        @media screen and (min-width: 1200px){
            font-size: 40px;
        }
    }
    .percentAccepte{
        font-size: 20px;
        padding: 0% 0% 0% 4%;
        color: green;
        @media screen and (min-width: 1200px){
            font-size: 40px;
        }
    }
    .percentRefuse{
        font-size: 20px;
        color: red;
        @media screen and (min-width: 1200px){
            font-size: 40px;
        }
    }
}
</style>