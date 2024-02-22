import { menuArray } from './object.js';

let emojiSec = document.querySelector('.emojiSec');
let infoSec = document.querySelector('.infoSec');
let image = document.querySelector('.image');
let order = document.querySelector('.order');
let remove = document.querySelector('.remove')
let totalPrice= document.querySelector('.Totalprice')
let orderContent = document.querySelector('.orderContent')
let itemCont = document.querySelector('.ItemContent')
let ComOrderBtn= document.querySelector('.ComOrderBtn');
let form =document.querySelector('.form')
let PayBtn= document.querySelector('.paybtn')
let h1 = document.querySelector('.h1')
let input= document.querySelector('.InputName');
let end = document.querySelector('.end');
let code= document.querySelector('.Code');
let CCV= document.querySelector('.CCV');
let container= document.querySelector('.container')



function renderMenu() {
    let emojiHTML = '';
    let infoHTML = '';
    let images = '';

    for (const item of menuArray) {
        emojiHTML += `<p class="emoji">${item.emoji}</p>`;
        infoHTML += `
            <div class="item-info">
                <p class="name">${item.name}</p>
                <p class="ing">${item.ingredients.join(', ')}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
        
        images += `<p class="plus">${item.plus}</p>`;
    }

    emojiSec.innerHTML = emojiHTML;
    infoSec.innerHTML = infoHTML;
    image.innerHTML = images;
}

renderMenu();


image.addEventListener('click', function(e) {
    order.style.display = 'inline';
   end.style.display='none';
   
    const clickedIndex = Array.from(this.children).indexOf(e.target);
    const ItemPrice = menuArray[clickedIndex].price;
    const itemName = menuArray[clickedIndex].name;
    
    orderContent.innerHTML += `
    <div class="ItemContent">
        <p>${itemName}</p>
        <p class="remove">Remove</p> 
        <p>${ItemPrice}</p>
     </div>   
  `;
    totalPrice.innerHTML = Number(totalPrice.innerHTML) + ItemPrice;
});

orderContent.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        const itemToRemove = e.target.parentElement;
        const itemPrice = parseFloat(itemToRemove.querySelector('p:nth-child(3)').textContent);
        totalPrice.textContent = parseFloat(totalPrice.textContent) - itemPrice;
        itemToRemove.remove();
    }
});

ComOrderBtn.addEventListener('click', function(e){
    
    if(totalPrice.innerHTML==0){
        alert('You did not add anything')
        form.style.display="none";
    } else{
        form.style.display="block";
        input.value="";
        CCV.value="";
        code.value="";
        container.style.opacity="0.6";
        form.style.opacity="1";
    }
})
form.addEventListener('submit', function(event) {
    event.preventDefault();
        let name = input.value; 
        end.style.display = 'inline';
        end.innerHTML = `Thanks, ${name}! Your order is on its way!`;
        form.style.display = 'none';
        order.style.display = 'none';
        orderContent.innerHTML = '';
        totalPrice.innerHTML = 0;
        container.style.opacity = '1';
    
});








