<template>
  <div class="general">
  <picsGeneral :picsList="picturesList"/>
  </div>
  <Button text="Reload all pictures" :lst="picturesList" />
</template>

<script>

import picsGeneral from './components/picsGeneral.vue';
import Button from './components/Button.vue';
import {createObjectList} from './modules.js'

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
    createObjectList(6)
                          .then((data) => {this.picturesList = data })
                          .catch((err) => { console.log(err) });

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
