<template>
    
        <div :key=pic.id  v-for="pic in picsList" class="single-picture" >
            <singlePic :pic ="pic" />
        </div>
    
</template>

<script>

import singlePic from './singlePic.vue';
export default {
    name: "picsGeneral",
    props: {
        picsList: Array,
    },
    components:{
        singlePic
    },
}
</script>


<style scoped>


.single-picture {
    margin: 20px;
    max-width: 31.333%;
    padding: 0 10px;
    height: 240px;
 

}
  
.single-picture img {
    width: 100%;
    height: 100%;
    

}
</style>