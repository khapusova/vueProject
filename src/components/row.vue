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
    height: 150px;
    width: 300px;
    border: 2px solid #852a9121;
    background-color: #ab90ea36;
 
}
.single-picture :hover{
    border: 2px solid #852a9128;
    background-color: #ab90ea3f;
}
.single-picture img{
 
    width: auto;
    height: 100%;
    

}
    

</style>