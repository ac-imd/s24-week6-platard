// Data
const products = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 },
    { id: 9, title: 'Teal T-Shirt', image: 'teal-t-shirt.jpg', price: 7.99, stock: 2, quantity: 1 }
]
const categories = ['All', 'T-shrts', 'Electronics', 'Furniture']
const newCategory = 'Sandal'
const selectedCategory = 'Electronics'


// 1. Displays categories
//ternary operator    condition ? exprIfTrue : exprIfFalse
const $categories = document.getElementById('categories')
$categories.innerHTML = ''
const templates = []

// for(const category of categories){
categories.forEach( category => templates.push(`<li class="nav-item">
    <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === selectedCategory ? 'active' : '' }">${category}</a>
    </li>
    ` ) // closes push
) //closes forEach

// }

$categories.innerHTML = templates.join('')

// 3. Add a new category with insertAdjacentHTML
$categories.insertAdjacentHTML('beforeend', `<li class="nav-item">
    <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${newCategory === selectedCategory ? 'active' : '' }">${newCategory}</a>
    </li>
    `)


// 4. Display products




// 5. Use createElement to display products

    //create the main div element: $product
    //create the image element: $image
    //create the title element: $title
    //create the container for price and buy button: $priceContainer
    //create the price element: $price
    //create the buy button: $buyButton
    //append the price element and buy button to the price container
    //append the product to the products container