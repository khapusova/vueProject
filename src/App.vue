<template>
  <div class="general">
  <picsGeneral :picsList="picturesList"/>
  </div>
  <Button text="Reload all pictures" :lst="picturesList" />
</template>

<script>

import picsGeneral from './components/picsGeneral.vue';
import Button from './components/Button.vue';
import {contentSourse} from './contentSource.js'

export default {
  name: 'App',
  components: {
    picsGeneral,
    Button,
  },

  data(){
    return {picturesList : []};
  },

  created(){

    let cats_1 = new contentSourse('https://api.thecatapi.com/v1/images/search', {}, "url");
    cats_1.changeTempJSONinfo();
    let cats_2 = new contentSourse('https://api.thecatapi.com/v1/images/search', {},"url");
    cats_2.changeTempJSONinfo();
    let cats_3 = new contentSourse('https://api.thecatapi.com/v1/images/search', {},"url");
    cats_3.changeTempJSONinfo();


    this.picturesList = [cats_1,cats_2, cats_3];
  }
}





</script>

<style>


.general{
    display: flex;
    flex-wrap: wrap;
    margin: 0 50px;
    padding: 30px;
    
    
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
