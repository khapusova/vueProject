<template>
  
  <picsGeneral :picsList="picturesList"/>
  <div class="btns">
<updateButton text="Update all pictures" :lst="picturesList" />
<addRowButton text = "Add three pictures" :lst = "this.picturesList"/>
     </div>
</template>

<script>
import addRowButton from './components/addButton.vue';
import picsGeneral from './components/picsGeneral.vue';
import updateButton from './components/updateButton.vue';
import {createObjectList} from './modules.js';
export default {
  name: 'App',
  components: {
    picsGeneral,
    updateButton,
    addRowButton,
  },
  data(){
    return {picturesList : []};
  },
   created(){
    createObjectList(3)
                          .then((data) => {this.picturesList = data })
                          .catch((err) => { console.log(err) });
  }
}
</script>

<style>

.gen div::after{
  display: inline;
  
}
.general{
    display: block;
    flex-wrap: wrap;
    margin: 0 50px;
    padding: 30px;
  }  
.btns{
  display: flex;
  align-items: center;
  justify-content: center;}
.btns button{

    margin: 30px;
    padding: auto;
    background-color: slategrey;
    color: aliceblue;
    width: 200px;
    height: 60px;
    border-radius: 40px;
    font: 1em sans-serif;
    
}
.btns button:hover{
    background-color: rgb(52, 62, 71);
    color: rgb(205, 215, 225);
    width: 200px;
    height: 60px;
    border-radius: 40px;
    font: 1em sans-serif;
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

