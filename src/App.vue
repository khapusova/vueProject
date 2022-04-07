<template>
  <div class="general">
  <picsGeneral :picsList="picturesList"/>
  </div>
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
    let cats_1 = new contentSourse('https://api.thecatapi.com/v1/images/search', {}, "url");
    cats_1.changeTempJSONinfo();
    let cats_2 = new contentSourse('https://api.thecatapi.com/v1/images/search', {},"url");
    cats_2.changeTempJSONinfo();
    let cats_3 = new contentSourse('https://api.thecatapi.com/v1/images/search', {},"url");
    cats_3.changeTempJSONinfo();
    

    // while(dogs.tempJSONinfo[dogs.keyWord].indexof("mp4") !== -1){
    //   dogs.changeTempJSONinfo();
    // }
    

    this.picturesList = [cats_1,cats_2, cats_3
                          // { const APIurl : String   :
                          //  class objects
                            
                          // {text:"PICTURE2",
                          // id:2}, 
                          // {text:"PICTURE3",
                          // id:3}
                          ];
  }
}

class contentSourse{
    constructor(APIurl,tempJSONinfo,keyWord){
        this.APIurl = APIurl;
        this.tempJSONinfo = tempJSONinfo;
        this.keyWord = keyWord;
    }



    changeTempJSONinfo(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", this.APIurl, false ); // false for synchronous request
      xmlHttp.send( null );

      let responseParsed = JSON.parse(xmlHttp.responseText);
      this.tempJSONinfo = responseParsed[0];
      console.log(this.tempJSONinfo);
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
