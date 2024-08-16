
const data = {
	"product": [{
            "prodId":"1",
			"brand": "Ailang",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$129.99",
            "image": "ailang.jpg",
            "quantity": 0
		},
        {
            "prodId":"2",
			"brand": "Blancpain",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$239.94",
            "image": "blancpain.jpg",
            "quantity": 0
		},
        {
            "prodId":"3",
			"brand": "Bulova",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$595",
            "image": "bulova.jpg",
            "quantity": 0
		},
        {
            "prodId":"4",
			"brand": "Citizen",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$174",
            "image": "citizen.jpg",
            "quantity": 0
		},
        {
            "prodId":"5",
			"brand": "Fossil",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$174",
            "image": "fossil.jpg",
            "quantity": 0
		},
        {
            "prodId":"6",
			"brand": "Hublot",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$374",
            "image": "hublot.jpg",
            "quantity": 0
		},
        {
            "prodId":"7",
			"brand": "Longines",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$674",
            "image": "longines.jpg",
            "quantity": 0
		},
		{
            "prodId":"8",
			"brand": "Vacheron",
            "description": "Mens watches are more than just a timepiece.",
			"price": "$624",
            "image": "vacheron.jpg",
            "quantity": 0
		}
	]
}

let cartModal = document.getElementById("myCart");
let cart = document.getElementById("cart-icon");
let xBtn = document.querySelector("span.close");
let badge = document.getElementById("notif");
let badgeCnter = document.getElementById("NotificationBadge")
let orderCntr = 0;
let addedOrders = [];
let tempOrders = [];

const tableId = document.getElementById('tableId');

cart.onclick = function(){
    cartModal.style.display = "block";
    displayCartList();
    tatalOrder();
    
}
xBtn.onclick = function(){
    cartModal.style.display = "none";
}
window.onload = () => {
    displayData(data.product);
}

function displayData(){
    for(let prod = 0; prod < data.product.length; prod++){
        const orderObj = data.product[prod];
        const name = data.product[prod].brand;
        const price = data.product[prod].price;
        const image = data.product[prod].image;
        const description = data.product[prod].description;
        
        const prodList = document.createElement('div');
        const prodImg = document.createElement('img');
        const prodName = document.createElement('h3');
        const prodPrice = document.createElement('h4');
        const prodDecript = document.createElement('p');
        const orderBtn = document.createElement('button');
        
        prodImg.className = 'pImg';
        prodList.className = 'prodcon';
        orderBtn.className = 'prodbtn';
        prodImg.src = "./images/watches/" + image ;
        prodName.textContent = name;
        prodDecript.textContent = description;
        prodPrice.textContent = price;
        orderBtn.textContent = 'Order';
        orderBtn.onclick = () => getProductId(orderObj);
        prodList.appendChild(prodImg);
        prodList.appendChild(prodName);
        prodList.appendChild(prodDecript);
        prodList.appendChild(prodPrice);
        prodList.appendChild(orderBtn);
        
        document.getElementById("prodBox").appendChild(prodList);
        
    }
}

window.onclick = function(event){
    if(event.target == cartModal){
        cartModal.style.display = "none";
    }
}
function getProductId(itemObj) {
    let chck = addedOrders.some((id) => id.prodId === itemObj.prodId);

    if (chck === false){        
        addedOrders.push(itemObj);
        addedOrders[addedOrders.length -1].quantity = 1;
        console.log(addedOrders)
        orderCntr++;
        displayNotif();
    }
    else{
        let orderIndex = addedOrders.findIndex((id) => id.prodId === itemObj.prodId);
        if (orderIndex != -1) {
            console.log(orderIndex);
            addOrder(orderIndex);
            console.log(addedOrders);
        }         
    }
    
    
}
function addOrder(prodIndx){
    addedOrders[prodIndx].quantity = addedOrders[prodIndx].quantity + 1;
    orderCntr++;
    displayNotif();
    displayCartList();
}

function minusOrder(prodIndx){
    if(addedOrders[prodIndx].quantity != 0){
        addedOrders[prodIndx].quantity = addedOrders[prodIndx].quantity - 1;
        orderCntr--;
    }
    
    displayNotif();
    displayCartList();
}

function displayNotif(){
    if(orderCntr != 0){
        badge.style.display = "block";
        badgeCnter.textContent = String(orderCntr);        
    }
    else {        
        badge.style.display = "None";
        updateCartList();
    }
}

function displayCartList(){
    
    tableId.innerHTML = "";
    updateCartList();
      
    addedOrders.forEach((addedProduct,index) => {             
    const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td class="cart-prod-name">${addedProduct.brand}</td>
            <td class="cart-prod-price">${addedProduct.price}</td>
            <td ><button onclick ="minusOrder(${index | 0})">-</button></td>
            <td class="cart-prod-quantity">${addedProduct.quantity}</td>
            <td ><button onclick ="addOrder(${index | 0})" >+</button></td>

        `
        tableId.appendChild(listItem);

    });
    tatalOrder(); 
    
}

function tatalOrder(){
    let totalOrders = 0;
    if(orderCntr!=0){
        for(let amount = 0; amount < addedOrders.length; amount++){
            let p = addedOrders[amount].price;
            let q = addedOrders[amount].quantity;
            let price = parseFloat(p.replace("$", ""));
            console.log(price);
            totalOrders = totalOrders + (q * price);
            document.getElementById("totalId").innerHTML = "Total: $" + String(totalOrders.toFixed(2));
        }
    }
    else{
        document.getElementById("totalId").innerHTML = ""
    }
    
}

function  updateCartList(){
    tempOrders = [];
    for(let i = 0; i < addedOrders.length; i ++){
        if(addedOrders[i].quantity  != 0){
            tempOrders.push(addedOrders[i]);
        }
    }
    addedOrders = [];
    addedOrders = tempOrders.slice();
    tatalOrder();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";
}
