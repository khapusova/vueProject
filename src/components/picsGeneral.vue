<template>
    <div :key= pic.id  v-for="pic in picsList" class="general-picture-block">
        <singlePic :pic ="pic"/>
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
    }
}
</script>