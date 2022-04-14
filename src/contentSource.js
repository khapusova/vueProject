export class contentSourse{

    constructor(APIurl,tempJSONinfo,keyWord){
        this.APIurl = APIurl;
        this.tempJSONinfo = tempJSONinfo;
        this.keyWord = keyWord;
    }



    changeTempJSONinfo(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", this.APIurl, false );
      xmlHttp.send( null );

      let responseParsed = JSON.parse(xmlHttp.responseText);
      this.tempJSONinfo = responseParsed[0];
      console.log(this.tempJSONinfo);
    }
    }
