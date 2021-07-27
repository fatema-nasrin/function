//temperature converter


//celsius to fehrenhight

    function celsTofern(cels){
    let fern = (cels * (9/5))+32;
    return fern;
    }

let result= celsTofern(2);
console.log(result)



//ferenhight to celcius

function fernTocels(fern){
    let cels = (fern-32) * (5/9);
    return cels;
}
let result= fernTocels(15);
console.log(result)