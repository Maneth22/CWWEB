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