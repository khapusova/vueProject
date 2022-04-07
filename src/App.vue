<template>
  
  <picsGeneral :picsList="picturesList"/>

</template>

<script>

import picsGeneral from './components/picsGeneral.vue';

export default {
  name: 'App',
  components: {
    picsGeneral,
  },
  data(){
    return {picturesList : []};
  },
  created(){
    this.picturesList = [{text:"PICTURE1",
                          id:1},
                          // {text:"PICTURE2",
                          // id:2}, 
                          // {text:"PICTURE3",
                          // id:3}
                          ];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
