<template>
<p>{{pic.tempJSONinfo}}</p>
<img :src='pic.tempJSONinfo[pic.keyWord]' alt="" @click="changePicture()">
</template>


<script>

    // <p>{{pic.tempJSONinfo}}</p>
    // <img :src='pic.tempJSONinfo[pic.keyWord]' alt="" @click="changePicture()">
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