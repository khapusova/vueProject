<template>
    
        <div :key=picSubLst.id  v-for="picSubLst in picsList" class="gen" >
            <row :lst ="picSubLst" />
        </div>
    
</template>

<script>
import row from './row.vue';
export default {
    name: "picsGeneral",
    props: {
        picsList: Array,
    },
    components:{
        row
    },
}
</script>


<style scoped>
.gen div::after{
  display: inline;
  
}
</style>