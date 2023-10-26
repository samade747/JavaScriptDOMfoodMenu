// creating a array of object of food items

const foodMenu = [
    // each object represent a food item
    {
     itemimage: './images/karai.jpg',
     itemName : 'Karai',
     itemPrice: '1200 PKR',
     itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
     itemCategory: 'Dinner',
     
    },


    {
        itemimage: './images/karai.jpg',
        itemName : 'omlait Paratah',
        itemPrice: '180 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'Breakfast',
        
       },


       {
        itemimage: './images/salad.jpg',
        itemName : 'salad',
        itemPrice: '150 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'lunch',
        
       },

       {
        itemimage: './images/shake1.jpg',
        itemName : 'Chocolate Shake',
        itemPrice: '180 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'shakes',
        
       },


]
// array mai category ke buttons
const buttons = ['All', 'Breakfast', 'Lunch', 'shakes'];

// container la rha hoin for catogery buttons
const buttonContainer = document.getElementById('Menu-items-category');

// create buttons for each category by forEach loop
buttons.forEach(function(button){
// creaing html code for buttons 
buttonContainer.innerHTML += `<button onclick="showItems('${button.toLowerCase()}')">${button}</button>`;

});

// function for display food items based on Category

function showItems(category) {
    // getting the container for menu items 
    const MenuContainer = document.getElementById('menu-items-display');
    


// clearing the existing content
MenuContainer.innerHTML = "";


// filtering the food items based on category 
var filteredItems = foodMenu.filter(function(item){
    if( item.itemCategory == category){
        return true;
    }
});
// when no items display
if (filteredItems.length === 0){
    filteredItems = foodMenu;
}

filteredItems.forEach(function (item) {
    for (let i = 0; i < 2; i++) {
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        col.classList.add('col-sm-6');
        col.classList.add('mb-3');
    
        const div = document.createElement('div');
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";

        div.innerHTML = `
            <div class="card" style="width: 18rem; border:1px solid lightgrey; border-radius:15px; box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset; -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset; -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;">
                <img class="card1img" style="border-radius:15px;" src="${item.itemimage}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-titleard1Name" style="color:rgb(252, 163, 9); text-transform:capitalize;">${item.itemName}</h5>
                    <h6 class="card-title card1Price" style="font-size:large;">RS : <span style="color:rgb(252, 163, 9);">${item.itemPrice}</span></h6>
                    <p class="card-text" style="color:black; font-size:medium;">${item.itemDescripition}</p>
                </div>
            </div>
        `;

        col.appendChild(div);
        row.appendChild(col);
    }
});
}
// Finally, append the row to your container
MenuContainer.appendChild(row);


// Displaying the item
// filteredItems.forEach(function (item){
//   MenuContainer.innerHTML += `  
  
//       <div class="d-flex  align-items-center justify-content-center gap-2 mt-5">
//       <img src=${item.itemimage} alt="" style="width: 400px; height: 400px;">
//       <div class="d-flex align-items-center justify-content-between mb-3 card">
         
//           <h5 class="m-0">${item.itemName}</h5> 
//           <p class="m-0 price">${item.itemPrice}</p>
        
//         <p class="m-0 text-justify">${item.itemDesc}</p>
//       </div>
//     </div>
//       </div>                   
//   </div>        
//   </div>


// let row = document.createElement('div')
// row.classList.add('row')

// filteredItems.forEach( function (item) {
//   MenuContainer.innerHTML +=
  
//   for (i = 0 ; i < 2 ; i++ ) {
//       col =  document.createElement('div')
//           col.classList.add('col-md-4')
//           col.classList.add('col-sm-6')
//           col.classList.add('mb-3')
//   }
  
//   div = document.createElement('div')
//   div.style.display = "flex"
//   div.style.justifyContent = "center"
//   div.style.alignItems = "center"
 
  
//   `<div 
//   class="card" 
//   style="width: 18rem; 
//   border:1px solid lightgrey;  
//   border-radius:15px; box-shadow: box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
//   -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
//   -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;">

//   <img 
//   class="card1img" 
//   style="border-radius:15px;" 
//   src="${images[imageIndex]}" 
//   class="card-img-top">

//   <div 
//   class="card-body">

//   <h5 
//   class="card-titleard1Name" 
//   style="color:rgb(252, 163, 9); 
//   text-transform:capitalize;">
//   ${menuCard.name}</h5>

//   <h6 class="card-title 
//   card1Price" 
//   style="font-size:large;">
//   RS : 
//   <span 
//   style="color:rgb(252, 163, 9);">
//   ${menuCard.RS}</span></h6>

//   <p 
//   class="card-text" 
//   style="color:black; 
//   font-size:medium;"> 
//   ${menuCard.text}</p>

//   </div>`

//   col.appendChild(div)
//   row.appendChild(col)
//   cardContainer.appendChild(row)
// })
// });


// // Initial invocation of showItems to display all items
// showItems();




