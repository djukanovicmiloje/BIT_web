
const Device = function(brand, model, os, price){
    this.brand = brand;
    this.model = model;
    this.os = os;
    this.price = price;//`${parseInt(Math.random()*500)}$`;
}

const brandList = ['samsung', 'htc', 'apple', 'huawei', 'nokia'];
let deviceList = [];

function collectDataFromApi(brandList){
    for(var i = 0; i < brandList.length; i++){
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://fonoapi.freshpixl.com/v1/getlatest/?token=5ce9349deaf222352367e5680c04aef9a4e05cf26e621ba8&limit=1&brand=${brandList[i]}`);
        ajax.onload = function(){
            let apiData = JSON.parse(this.responseText);
            console.log(apiData)
            for(let i = 0; i < apiData.length; i++){
                let device = new Device(apiData[i].Brand, apiData[i].DeviceName, apiData[i].os, apiData[i].price);
                deviceList.push(device);
            }
        }
        ajax.send();
    }
}

collectDataFromApi(brandList);


// console.log(apiData);

// 

// function generateDeviceList(){
// for(let i = 0; i < apiData.length; i++){
//     for(let j = 0; j < apiData[i].length; j++){
//         let device = new Device(apiData[i][j].Brand, apiData[i][j].DeviceName, apiData[i][j].os, apiData[i][j].price);
//         console.log(device)
//         deviceList.push(device);
//     }
// }
// console.log(deviceList);
// }

// setTimeout(generateDeviceList, 5000)
