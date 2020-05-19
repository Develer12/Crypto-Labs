const app = require('express')();
const fs = require('fs');
const {ServerSignShnorr, ClientVerifyShnorr} = require('./ESignatureShnorr');
const {ServerSignElgam, ClientVerifyElgam} = require('./ESignatureElgamal');
const {ServerSignRSA, ClientVerifyRSA} = require('./ESignatureRSA');
const request = require('request-promise');

const PORT = 3001;


app.listen(PORT, async () =>{
    await request({
        method: 'GET',
        uri: 'http://localhost:3000/signature/rsa',
        json: true
    })
    .then((response) => {
        let signature = response.sign;
        let txt = response.file;

        const text = fs.createReadStream(`${__dirname}/fileC.txt`);
        let data = '';
        text.on('data', (chunk) => {
            data += chunk.toString();
        });

        let cv = new ClientVerifyRSA();
        cv.verify(signature, text, (result) => {
            if(result){
                console.log('RSA verifyed, text: ', data);
            }
            else{
                console.log('RSA not verifyed ((((((');
            }
        });
    })
    .catch((err) => {
        console.log(`RSA ERROR: ${err}`);
    });

    await request({
        method: 'GET',
        uri: 'http://localhost:3000/signature/elgamal',
        json: true
    })
    .then((response) => {
        let signature = response.sign;
        let txt = response.file;

        const text = fs.createReadStream(`${__dirname}/fileC.txt`);
        let data = '';
        text.on('data', (chunk) => {
            data += chunk.toString();
        });

        let cv = new ClientVerifyElgam();
        cv.verify(signature, text, (result) => {
            if(result){
                console.log('Elgamal verifyed, text: ', data);
            }
            else{
                console.log('Elgamal not verifyed ((((((');
            }
        });
    })
    .catch((err) => {
        console.log(`Elgamal ERROR: ${err}`);
    });

    await request({
        method: 'GET',
        uri: 'http://localhost:3000/signature/shnorr',
        json: true
    })
    .then((response) => {
        let signature = response.sign;
        let txt = response.file;

        const text = fs.readFileSync(`${__dirname}/fileC.txt`, 'utf8');

        let cv = new ClientVerifyShnorr();
        let result = cv.verify(signature, text);

        if(result){
            console.log('Shnorr verifyed, text: ', text);
        }
        else{
            console.log('Shnorr not verifyed ((((((');
        }
    })
    .catch((err) => {
        console.log(`Shnorr ERROR: ${err}`);
    });
})
.on('error', (e) => {console.log(`Listener | error: ${e.code}`)});
