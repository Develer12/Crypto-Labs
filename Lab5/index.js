const Alphavit = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
    ['q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x'], 
    ['y', 'z', ' ', ' ']
];
const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//[3]   1. Маршрутная перестановка (маршрут: зигзагом)  
//      2. Множественная перестановка, ключевые слова –  имя и фамилия 

console.log(`Aphabet: ${Alphavit}`);

function ZigWay(){
    let Alpha = [];
    let n = 0;
    let arrCount = Alphavit.length;
    let count = Alphavit[0].length;
    for(let i = 0; i <= count; i++){
        if(i%2 == 1){
            for(let j = 0; j < arrCount; j++){
                Alpha[n++] = Alphavit[j][i];
                if(n == 27)
                break;
            }
        }
        else{
            for(let j = arrCount-1; j >= 0; j--){
                Alpha[n++] = Alphavit[j][i];
                if(n == 27)
                break;
            }
        }
        if(n == 27)
            break;
    }
    console.log(`Apha: ${Alpha}`);
    return Alpha;
}

function WaySH(key){
    console.log('WaySH');
    let timer = Date.now();
    let Alpha = ZigWay();
    key = key.toLowerCase();
    let keySH = [];

    for(let i = 0; i < key.length ; i++){
        keySH[i] = Alpha[Alphabet.indexOf(key[i])];
    }

    console.log('Key: ' + key);
    console.log('KeySH: ' + keySH.join(''));
    console.log(`Time: ${Date.now() - timer}`)

    let ghystogram = {};

    for(let i = 0; i < keySH.length; i++){
        if(ghystogram[keySH[i]] == undefined){
            ghystogram[keySH[i]] = 1;
        }
        else{
            ghystogram[keySH[i]]++;
        }
    }

    let ghysto = document.getElementById('ghysto');
    ghysto.innerHTML = '';

    for(let letter in ghystogram){
        let percent = (ghystogram[letter]/keySH.length);
        DrowGhysto(ghysto, percent, letter)
        console.log(letter + ' = ' + ghystogram[letter]);
    }

    console.log('--------------------------------------------');
}

function ManySH(key){
    console.log('ManySH');
    let timer = Date.now();
    key = key.toLowerCase();
    let keySH = [];

    let Alpha = [];

    for(let i = 0; i < key.length ; i++){
        keySH[i] = Alpha[Alphabet.indexOf(key[i])];
    }

    console.log('Key: ' + key);
    console.log('KeySH: ' + keySH.join(''));
    console.log(`Time: ${Date.now() - timer}`)

    let ghystogram = {};

    for(let i = 0; i < keySH.length; i++){
        if(ghystogram[keySH[i]] == undefined){
            ghystogram[keySH[i]] = 1;
        }
        else{
            ghystogram[keySH[i]]++;
        }
    }

    let ghysto = document.getElementById('ghysto');
    ghysto.innerHTML = '';

    for(let letter in ghystogram){
        let percent = (ghystogram[letter]/keySH.length);
        DrowGhysto(ghysto, percent, letter)
        console.log(letter + ' = ' + ghystogram[letter]);
    }

    console.log('--------------------------------------------');
}

function DrowGhysto(ghysto, percent, letter){
    let h = 200 * percent;
    let line = document.createElement('div');
    line.innerHTML = `
    <div style="width: 50px; height: ${h}px; background-color: coral;">
        ${Math.floor(percent*100)}%
    </div>
    <p>${letter}</p>`
    ghysto.append(line);
}