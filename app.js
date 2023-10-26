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
        itemimage: './images/karai.jpg',
        itemName : 'salad',
        itemPrice: '150 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddas',
        itemCategory: 'lunch',
        
       },

       {
        itemimage: './images/karai.jpg',
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

// Displaying the item
filteredItems.forEach(function (item){
  MenuContainer.innerHTML += `
  <div class="align-items-center col-lg-6 my-5 d-flex justify-content-center gap-2 mt-2">
    <img src=${item.itemimage} alt="" class="food-icon" style="width: 400px; height: 300px;">
    <div>
      <span class="d-flex align-items-center justify-content-between mb-3">
        <h5 class="m-0">${item.itemName}</h5> 
        <p class="m-0 price">${item.itemPrice}</p>
      </span>
      <p class="m-0 text-justify">${item.itemDesc}</p>
    </div>
  </div>
`;
});
}

// Initial invocation of showItems to display all items
showItems();

