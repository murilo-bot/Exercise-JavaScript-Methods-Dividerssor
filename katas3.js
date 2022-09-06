const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(returnNumbers){ 
    
     
    const itemLista = document.createElement('li');
    const itemTexto = document.createElement('h4');

    itemTexto.innerText = returnNumbers;

    itemLista.appendChild(itemTexto);

    const lista = document.querySelector('ul');

    lista.appendChild(itemLista);

    
}
function kata1() {

    let result = [];

    for(let i = 1; i <= 25; i++){
        result.push(i);
    }
    showResults(result)
    return result.join(", ")    
}
kata1()

function kata2() {

    let result = [];

    for(let i = 25; i >= 1; i--){
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata2()

function kata3() {

    let result = [];

    for(let i = -1; i >= -25; i--){
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata3()

function kata4() {

    let result = [];

    for(let i = -25; i <= -1; i++){
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata4()

function kata5() {

    let result = [];

    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0)
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata5()

function kata6() {

    let result = [];

    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0)
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata6()

function kata7() {
    
    let result = [];

    for(let i = 1; i <= 100; i++){
        if(i % 7 === 0)
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata7()

function kata8() {

    let result = [];

    for(let i = 100; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0)
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata8()

function kata9() {

    let result = [];

    for(let i = 1; i <= 100; i++){
        if(i % 5 === 0 && i % 2 !== 0)
        result.push(i);
    }
    showResults(result)
    return result.join(", ")
}
kata9()

function kata10() {
    showResults(sampleArray)
    return sampleArray.join(", ")
}
kata10()

function kata11() {
    
    let result = [];

    for(let i = 0; i < sampleArray.length;i++){
        if(sampleArray[i] % 2 === 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result)
    return result.join(", ")
    
}
kata11()

function kata12() {

    let result = [];

    for(let i = 0; i < sampleArray.length;i++){
        if(sampleArray[i] % 2 !== 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result)
    return result.join(", ")
}
kata12()

function kata13() {

    let result = [];

    for(let i = 0; i < sampleArray.length;i++){
        if(sampleArray[i] % 8 === 0){
            result.push(sampleArray[i]);
        }
    }
    showResults(result)
    return result.join(",")
}
kata13()

function kata14() {
    
    result = [];

    for(let i = 0; i < sampleArray.length; i++){
        result.push(sampleArray[i] * sampleArray[i]);
        
    }
    showResults(result)
    return result.join(", ")
}
kata14()

function kata15() {

    let result = 0;

    for(let i = 1; i <= 20; i++){
        result += i;
    }
    showResults(result)
    return result.toString()
}
kata15()

function kata16() {

    let result = 0;

    for(let i = 0; i < sampleArray.length; i++){
        result += sampleArray[i];
    }
    showResults(result)
    return result.toString()
}
kata16()

function kata17() {
    
    let menor = sampleArray[0];

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < menor){
            menor = sampleArray[i];
        }
    }
    showResults(menor)
    return menor.toString()
}
kata17()

function kata18() {

    let maior = sampleArray[0];

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > maior){
            maior = sampleArray[i];
        }
    }
    showResults(maior)
    return maior.toString()
}
kata18()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}