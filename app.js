

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
        itemimage: './images/omlet.jpg',
        itemName : 'omlait Paratah',
        itemPrice: '180 PKR',
        itemDescripition: 'lorem lreeandadjjdsajkjsaddasasddsadsalknsasdasdandsa',
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
buttonContainer.innerHTML += `<button class="btn btn-outline-primary" onclick="showItems('${button.toLowerCase()}')">${button}</button>`;

});

function showItems(category) {
    const MenuContainer = document.getElementById('menu-items-display');
    MenuContainer.innerHTML = "";

    var filteredItems = foodMenu.filter(function(item) {
        if (item.itemCategory == category || category == 'All') {
            return true;
        }
    });

    if (filteredItems.length === 0) {
        filteredItems = foodMenu;
    }

    let row = document.createElement('div');
    row.classList.add('row');

    filteredItems.forEach(function(item) {
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        col.classList.add('col-sm-6');
        col.classList.add('mb-3');

        const div = document.createElement('div');
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";

        div.innerHTML = `
            <div class="card" style="width: 30rem; border:1px solid lightgrey; border-radius:15px; box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset; -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset; -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;">
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
    });

    MenuContainer.appendChild(row);
}


showItems();


function addItem(event) {
    event.preventDefault(); // Prevent the form from submitting

    const image = document.getElementById('imageInput').value;
    const name = document.getElementById('nameInput').value;
    const price = document.getElementById('priceInput').value;
    const description = document.getElementById('descriptionInput').value;
    const category = document.getElementById('categoryInput').value;

    const newItem = {
        itemimage: image,
        itemName: name,
        itemPrice: price,
        itemDescripition: description,
        itemCategory: category,
    };

    foodMenu.push(newItem);
    showItems('All'); 
}




