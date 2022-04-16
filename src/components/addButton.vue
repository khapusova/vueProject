<template>
    <div class="btn-div">
        <button @click="addRow()">{{text}}</button>
    </div>
</template>
<script>
import {addPictures} from '../modules.js';
export default {
    name: "addRowButton",
    props:{
        text: String,
        lst: Array
    },
    methods:{
        addRow(){
            addPictures(3,this.lst);
    }
    }
}
</script>
