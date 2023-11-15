<template>
        <div class="boutonsnavbar">
            <router-link class="stylelink" to="/">Demandes de garantie</router-link>
            <router-link class="stylelink" to="/expertises">Expertises</router-link>
        </div>
        <div class="cadreheuredate">
            <DateDisplay/>
            <Clock/>
        </div>
        
        <router-view ></router-view>

        

</template>

<script setup>

import DateDisplay from './components/DateDisplay.vue'
import Clock from './components/Clock.vue'

</script>



<style scoped lang="scss">
.stylelink{
    color:whitesmoke;
    font: 400 1em/1.5 'apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: flex;
    text-decoration: none;
    align-items: center;
    font-size:20px ;
    gap: 15px;
    padding: 10px 15px;
    background-color: rgb(17, 17, 16);
    border-radius: 6px;
    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
    &:hover {
        color: rgb(0, 0, 0);
        background-color: rgb(254, 254, 254);
        transition: all 0.5s;
        
        &:before {
        left: 0;
        transform: translate(-50%, -50%);
        // animation: criss-cross-left 0.8s;
        }
        
        &:after {
        right: 0;
        transform: translate(50%, -50%);
        // animation: criss-cross-right 0.8s;
        }
    }
}
    .boutonsnavbar{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        width: 100%;
        height: 100px;
        @media screen and (min-width: 1200px) {
            height: 130px;
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