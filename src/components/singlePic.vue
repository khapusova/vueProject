<template>


<img :src='pic.tempJSONinfo[pic.keyWord]' @click="changePicture()">





</template>


<script>

export default {
    name: "singlePic",
    props:{
        pic:Object,
    },
    methods:{
        changePicture(){
            this.pic.changeTempJSONinfo();
        }
    }
}
</script>
