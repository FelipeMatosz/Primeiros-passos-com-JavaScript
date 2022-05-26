function ARRAY (arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError ("Parâmetros inválidos");
    if(typeof arr !== 'object') throw new TypeError ("Array não é do tipo objeto");
    if(typeof num !== 'number') throw new TypeError ("Numero não é do tipo number");
    if(arr.lenght !== num) throw new RangeError ("O tamanho do array é diferente do numero");
    

    return arr;
    }

    catch(e) {
        if( e instanceof ReferenceError){
            console.log("Erro do tipo ReferenceError");
            console.log(e.message);
        }

        else if( e instanceof TypeError){
            console.log("Erro do tipo TypeError");
            console.log(e.message);
        }

        else if( e instanceof RangeError){
            console.log("Erro do tipo RangeError");
            console.log(e.messsage);
        }
        else {
            console.log(" Erro de tipo não conhecido:") + e;
        }
    }
}

console.log(ARRAY());


