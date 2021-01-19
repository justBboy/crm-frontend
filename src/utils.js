
export function getTitles(body){
    if(!body[0]){
        return
    }
    else{
        return Object.keys(body[0]).splice(1)
    }
}

export function randomArrayIndex(arr){
    let indx = Math.floor(Math.random() * arr.length);
    return arr[indx]
}
