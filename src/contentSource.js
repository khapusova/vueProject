export class contentSourse{

    constructor(APIurl,tempJSONinfo,keyWord){
        this.APIurl = APIurl;
        this.tempJSONinfo = tempJSONinfo;
        this.keyWord = keyWord;
    }



    async changeTempJSONinfo(){
        const response = await fetch(this.APIurl);
        const responseJSON = await response.json();
        this.tempJSONinfo = responseJSON[0];
        console.log( this.tempJSONinfo); 
    
    }
    }
