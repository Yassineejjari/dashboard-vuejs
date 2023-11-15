<template>
    <div>
        <div class="box">
            <div class="title"> {{ title }}</div>
            <div class="interieur">
                <div class="chiffre"> {{ chiffre }}</div>
                <awesome-icon v-if="directionFleche" :icon="directionFleche"></awesome-icon>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps,computed } from 'vue'

const props = defineProps({
    title:{
        type:String,
        default:'',
        required: true
    },
    chiffre:{
        type:Number,
        required: false
    },
    valeurRef:{
        type: Number,
        required: false
    }
    


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
</script>
<style scoped lang="scss">
.box {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font:color #ffff ;
    
}
.chiffre{
    font-size: 70px;
    font-weight: bold;
    margin: 30px 0;
    @media screen and (min-width: 1200px){
      font-size: 80px;
    }
}
.interieur{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.title{
    padding-top: 7%;
    font-weight: bold;
}
.fleche {
    color: rgb(0, 146, 32);
    font-size: 62px;
}
</style>