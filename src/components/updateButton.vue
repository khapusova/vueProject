<template>
    <div class="btn-div">
        <button @click="updateAll(lst)">{{text}}</button>
    </div>
</template>

<script>
export default {
    name: "updateButton",
    props:{
        text: String,
        lst: Array,
        
    },
    methods:{
        updateAll(pcsLst){
            pcsLst.forEach( (el) => 
            el.forEach((pict)=>{
                pict.changeTempJSONinfo();
            }));
        }
    }
    
}
</script>

