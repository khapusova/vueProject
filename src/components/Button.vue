<template>
    <div class="btn-div">
        <button @click="reloadAll(lst)">Reload all pictures</button>
    </div>
</template>

<script>
export default {
    name: "Button-reloading",
    props:{
        text: String,
        lst: Array,
        
    },
    methods:{
        reloadAll(pcsLst){
            pcsLst.forEach( (el) => 
            el.forEach((pict)=>{
                pict.changeTempJSONinfo();
            }));
        }
    }
    
}
</script>

<style scoped>
button{
    background-color: slategrey;
    color: aliceblue;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    font: 1em sans-serif;
}
button:hover{
    background-color: rgb(52, 62, 71);
    color: rgb(205, 215, 225);
    width: 200px;
    height: 60px;
    border-radius: 40px;
    font: 1em sans-serif;
}
</style>
