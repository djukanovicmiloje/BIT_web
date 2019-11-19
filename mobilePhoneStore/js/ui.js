$body = document.querySelector('#store');

const Device = function(model, image, price, os, resolution, procesor, weight){
    this.model = model;
    this.image = image;
    this.price = parseInt(Math.random()*500 + 100);
    this.os = os;
    this.resolution = resolution;
    this.procesor = procesor;
    this.weight = weight;
}
let deviceList = [];

const ShoppingBag = function(){
    this.itemList = [];
    this.total = 0;
}
ShoppingBag.prototype.addProduct = function(device){
    if(device instanceof Device){
        this.itemList.push(device);
        this.total += device.price;
    }
}

var shoppingBag = new ShoppingBag();

function createDeviceCardAndAppend(device){
    let $device = document.createElement('div');
    $device.classList.add('device');

    let $deviceImage = document.createElement('img');
    $deviceImage.setAttribute('src', device.image);


    let $model = document.createElement('h2');
    $model.textContent = device.model;

    let $price = document.createElement('h4')
    $price.textContent =` Price: ${device.price}$`;

    let $moreInfoBtn = document.createElement('div');
    $moreInfoBtn.setAttribute('class','moreInfoBtn')
    $moreInfoBtn.textContent = 'More Info';
    $moreInfoBtn.addEventListener('click', function(){
        this.nextSibling.classList.toggle('expand');
    })

    let $moreInfo = document.createElement('div');
    $moreInfo.setAttribute('class', 'moreInfo')
    let listOfProperities = ['os','resolution','procesor', 'weight'];

    for(let i = 0; i < listOfProperities.length; i++){
        $prop = document.createElement('li');
        $prop.textContent = device[listOfProperities[i]];

        $moreInfo.appendChild($prop);
    }
    $filler = document.createElement('div');
    $filler.setAttribute('class', 'filler');
    $moreInfo.appendChild($filler);

    let $addToCart = document.createElement('div');
    $addToCart.textContent = 'Add To Cart';
    $addToCart.classList.add('add');
    console.log(shoppingBag);
    $addToCart.addEventListener('click',function(){        
        shoppingBag.addProduct(device);
    })

    $device.appendChild($deviceImage);
    $device.appendChild($model);
    $device.appendChild($price);
    $device.appendChild($moreInfoBtn);
    $device.appendChild($moreInfo);
    $device.appendChild($addToCart);

    $body.appendChild($device);
}



function randomChar(){
    let charString = 'abcdefghijklmnopqrstuvwxyz';
    return charString[parseInt(Math.random()*25)];
}

function loadMore(){
    requestNewDevice = new XMLHttpRequest();
    requestNewDevice.open('GET', `https://fonoapi.freshpixl.com/v1/getlatest/?token=5ce9349deaf222352367e5680c04aef9a4e05cf26e621ba8&limit=99&brand=${randomChar()}&position=${parseInt(Math.random()*99)}`);
    requestNewDevice.onload = function(){
        let deviceAPI = JSON.parse(this.responseText);
        
        let requestNewPicture = new XMLHttpRequest();
        requestNewPicture.open('GET', 'https://dog.ceo/api/breeds/image/random');
        requestNewPicture.onload = function (){
            let model = deviceAPI[0].DeviceName;        
            let pictureUrl = JSON.parse(this.responseText).message;
            let price = deviceAPI[0].price;
            let os = deviceAPI[0].os;
            let resolution = deviceAPI[0].resolution;
            let procesor = deviceAPI[0].cpu;
            let weight = deviceAPI[0].weight;

            let device = new Device(model, pictureUrl, price, os, resolution, procesor, weight);
            
            
            deviceList.push(device);

            createDeviceCardAndAppend(device);
        }
        requestNewPicture.send();
    }
    requestNewDevice.send();
}


//setInterval(loadMore, 1000)

// while(!true){
//     let requestNewPicture = new XMLHttpRequest();
//     requestNewPicture.open('GET', 'https://dog.ceo/api/breeds/image/random');
//     requestNewPicture.send();
// }

// loadMore()
// loadMore()
// loadMore()
// loadMore()
// loadMore()
// loadMore()
// loadMore()
// loadMore()
// loadMore()

for(var i = 0; i < 15; i++){
    loadMore()
}

let timeOUT, timeIN;

window.addEventListener('scroll', function(){  
    let scrolled = window.scrollY; 
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;

    timeOUT = new Date().getTime();    

    dt = timeIN ? timeOUT - timeIN : 3001;
    console.log(dt);
    
    if(scrolled + 200 > scrollable && dt > 500){
        
        timeIN = new Date().getTime();

        loadMore()
        loadMore()
        loadMore()
    }
})



