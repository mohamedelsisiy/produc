var allProducts = document.querySelectorAll("#products li")
var divShow     = document.querySelector("#show")
var btn         = document.querySelector("#btn-showPrice")
var PriceShow  = document.querySelector("#PriceShow")
var totalprice = 0

allProducts.forEach(function(item){
    item.onclick = function(){
        divShow.innerHTML+= `<div style="margin-top:30px"><hr>${item.textContent} </div>`
        // get attribute return value
         totalprice +=  +(item.getAttribute("price")) 
        if(divShow!==""){
            btn.style.display="block"
            PriceShow.style.display ="block"
            PriceShow.style.height="150px"
            btn.style.width="200px"
            btn.style.height="50px"
            btn.style.borderRadius="20px"
            btn.style.margin="auto"
            divShow.style.textAlign="center"
            divShow.style.color="green"
            
        }

    }
})

btn.onclick=function(){
    PriceShow.innerHTML = " this is totalPrice  =  " +totalprice
}


