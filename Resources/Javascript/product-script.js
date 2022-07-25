let loadmorebtn= document.querySelector('#load-more');
let currentItem=1;

loadmorebtn.onclick=()=>{
    let boxes=[...document.querySelectorAll('.product-row')]
    for (var i=currentItem;i<currentItem+1;i++){
        boxes[i].style.display='flex';
    }
    currentItem+=1;
    if(currentItem>=boxes.length){
        loadmorebtn.style.display='none';
    }
}





let carts= document.querySelectorAll('.ProductButton');

let productsInCart = [
    {
        name:'Bandages',
        tag:'bandages',
        price: 150,
        inCart: 0
    },
    {
        name:'Gloves',
        tag:'gloves',
        price: 300,
        inCart: 0
    },
    {
        name:'Thermometer',
        tag:'thermometer',
        price: 1150,
        inCart: 0
    },
    {
        name:'Plaster',
        tag:'plaster',
        price: 35,
        inCart: 0
    },
    {
        name:'Syringe',
        tag:'syringe',
        price: 280,
        inCart: 0
    },
    {
        name:'Tweezers',
        tag:'tweezers',
        price: 720,
        inCart: 0
    },
    {
        name:'Betadine',
        tag:'betadine',
        price: 1260,
        inCart: 0
    },
    {
        name:'Pregnancy Test',
        tag:'pTest',
        price: 180,
        inCart: 0
    },
    {
        name:'Scale',
        tag:'scale',
        price: 4720,
        inCart: 0
    },
    {
        name:'Surgical Mask Pack',
        tag:'masks',
        price: 800,
        inCart: 0
    },
    {
        name:'Blood-Sugar-Machine',
        tag:'bsmach',
        price: 2500,
        inCart: 0
    },
    {
        name:'Blood Pressure Machine',
        tag:'bpmach',
        price: 7800,
        inCart: 0
    }
]


for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(productsInCart[i]);
    })
}

function onLoadCartnumber(){
    let productNumbers= localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.section2 span').textContent =productNumbers;
    }
}

function cartNumbers(productsInCart){
    console.log('selected',productsInCart);
    let productNumbers=localStorage.getItem('cartNumbers');
    console.log(productNumbers);
    productNumbers=parseInt(productNumbers)

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.section2 span').textContent =productNumbers+ 1;
    }else{
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.section2 span').textContent =1;
    }
    setIems(productsInCart);
    
}
function setIems(productsInCart){
    let cartItems = localStorage.getItem('presentInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){

        if(cartItems[productsInCart.tag] == undefined){
            cartItems={
                ...cartItems,
                [productsInCart.tag]:productsInCart
            }
        }
        cartItems[productsInCart.tag].inCart += 1;
    }else{
        productsInCart.inCart=1;

        cartItems ={
            [productsInCart.tag]: productsInCart
        }
    }



    localStorage.setItem('presentInCart',JSON.stringify(cartItems));
}

onLoadCartnumber();