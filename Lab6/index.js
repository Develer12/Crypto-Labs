const rotor = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['e', 'k', 'm', 'f', 'l', 'g', 'd', 'q', 'v',
    'z', 'n', 't', 'o', 'w', 'y', 'h', 'x', 'u',
    's', 'p', 'a', 'i', 'b', 'r', 'c', 'j'],
    ['a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x',
    'b', 'l', 'h', 'w', 't', 'm', 'c', 'q', 'g',
    'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e'],
    ['b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r',
    't', 'x', 'v', 'z', 'n', 'y', 'e', 'i', 'w',
    'g', 'a', 'k', 'm', 'u', 's', 'q', 'o']
];
const reflector = {
    'a': 'y', 'b': 'r', 'c': 'u', 'd': 'h',
    'e': 'q', 'f': 's', 'g': 'l', 'i': 'p',
    'j': 'x', 'k': 'n', 'm': 'o', 't': 'z', 'v': 'w'
};

const rotorShifts = [0, 2, 2];
//[1] I II III B 0-2-2 

function shiftRotor(n){
    temp = [];
    shCount = rotorShifts[n-1];
    for(let i = 0; i < rotor[n].length; i++){
        temp[i] = (i-shCount<0)?
            rotor[n][rotor[n].length + (i-shCount)] : rotor[n][i-shCount];
    }
    for(let i = 0; i < rotor[n].length; i++){
        rotor[n][i] = temp[i];
    }
}

function Enigma(key){
    console.log('Enigma');
    key = key.toLowerCase();
    let keySH = [];
    for(e in key){
        keySH[e] = key[e];
    }

    for(let k = 0; k < key.length; k++){
        for(let n = rotor.length-1; n > 0; n--){
            keySH[k] = rotor[n][rotor[0].indexOf(keySH[k])];
        }

        for(e in reflector){
            if(keySH[k] == reflector[e]){
                keySH[k] = e;
            }
            else if(keySH[k] == e){
                keySH[k] = reflector[e];
            }   
        }

        for(let n = 1; n < rotor.length; n++){
            keySH[k] = rotor[n][rotor[0].indexOf(keySH[k])];
        }

        for(let i = 1; i < rotor.length; i++){
            shiftRotor(i);
        }
    }

    console.log('keySH: ' + keySH.join(''));
    console.log('key: ' + key);

    console.log('--------------------------------------------');
}