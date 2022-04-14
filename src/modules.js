import {contentSourse} from './contentSource.js'

export async function createObjectList(amountOfObjects){
    let result = [];
    for (var i = 0; i < amountOfObjects; i++) {
        await result.push(new contentSourse('https://api.thecatapi.com/v1/images/search', {}, "url"));
        await result[i].changeTempJSONinfo();
     }
     return result;
}