let plus=document.getElementsByClassName("plus")
let minus=document.getElementsByClassName("minus")
let total_price=document.getElementById("price")
let banner=document.getElementById("cart-banner")
var sum=0;
function changePrice(){
    total_price.innerText=sum;
    if(total_price.innerText>0){
        banner.style.display="block";
    }
    else{
        banner.style.display="none";
    }
}
for(let i=0;i<plus.length;i++){
    let button_plus=plus[i];
    button_plus.addEventListener("click",function(event){
        var buttonClicked=event.target;
        var number=buttonClicked.previousElementSibling;
        var price_ele=buttonClicked.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild;
        //var price=parseFloat(price_ele.innerText.replace("&#8377 ",""));
        price=parseFloat(price_ele.innerText);
        number.value++;
        sum=sum+price;
        changePrice(sum);
    })


    let button_minus=minus[i];
    button_minus.addEventListener("click",function(event){
        var buttonClicked=event.target;
        var number=buttonClicked.nextElementSibling;
        var price_ele=buttonClicked.parentElement.parentElement.firstElementChild.lastElementChild.lastElementChild;
        price=parseFloat(price_ele.innerText);
        if(number.value>0){
            number.value--;
            sum=sum-price;
            changePrice(sum);
        }
    })
}

