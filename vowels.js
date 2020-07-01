function regexVar(str) {
//  ^ => Coincide con el primer elemento:
// () => Almacena el valor coincidente
// [aeiou] => Encuentra los caracteres relacionados
// . => coincide con cualquier caracter:
// + => para 1 o más apariciones (esto asegura la longitud del str> 3) 
// \1 => coincide con la coincidencia almacenada previamente. 
    // \2 busca el elemento coincidente almacenado hace 2 instancias 
    //\ 3 busca el elemento coincidente almacenado hace 3 instancias, etc. 

//  $ asegura que el elemento coincidente esté al final de la secuencia, 

    let re = /^([aeiou]).+\1$/;
    return re;
}
