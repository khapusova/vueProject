import {contentSourse} from './contentSource.js'

export async function createObjectList(amountOfObjects){
    let result = [];
    let subResult = [];
    for (var i = 0; i < amountOfObjects; i++) {
        await subResult.push(new contentSourse('https://api.thecatapi.com/v1/images/search', {}, "url"));
        await subResult[subResult.length-1].changeTempJSONinfo();
    
        if(i === amountOfObjects-1){
            result.push(subResult);
        }
        else{
            if((i+1)%3===0){
                result.push(subResult);
                subResult = [];
            }
        }  
     }
     console.log(`length og general array:${result.length}`);
     return result;
}

export async function addPictures(amount, lst){
 let newLst = [];
 for (var i = 0; i < amount; i++) { 
     await newLst.push(new contentSourse('https://api.thecatapi.com/v1/images/search', {}, "url"))
     await newLst[newLst.length-1].changeTempJSONinfo();
 }
 lst.push(newLst)
}
