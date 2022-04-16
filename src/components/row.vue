<template>
<div class = "three-pictures">
    <div :key=pic.id  v-for="pic in lst" class="single-picture" >
            <singlePic :pic ="pic" />
        </div>
</div>

</template>
<script>

import singlePic from './singlePic.vue';
export default {
    name: "rowOfPictures",
    props:{
        lst: Array
    },
    components:{
        singlePic
    },
    
    methods:{
        
    },
    
}
</script>

<style scoped>
.three-pictures{
    display: inline-flex;
    white-space:wrap;
}
.single-picture {
    margin: 20px;
    max-width: 31.333%;
    padding: 0 10px;
    height: 240px;
 
}
.single-picture img{
 
    width: 100%;
    height: 100%;
    

}
    

</style>