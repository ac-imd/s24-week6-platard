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
const selectedCategory = 'All'


// 1. Displays categories
const $categories = document.getElementById('categories')
$categories.innerHTML = ''

const templates = []

// ternary operator... condition ? exprIfTrue : exprIfFalse

for (const category of categories ){
    templates.push(`<li class="nav-item">
<a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === selectedCategory ? 'active' : ''}">${category}</a>
</li>`) 
}

$categories.innerHTML = templates.join('')


// 2. Add a new category with innerHTML


// 3. Add a new category with insertAdjacentHTML
$categories.insertAdjacentHTML('beforeend', `<li class="nav-item">
    <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${'saldals' === selectedCategory ? 'active' : ''}">Sandals</a>
    </li>` )

// 4. Display products
// const $products = document.getElementById('products')

// const htmlTemplate = []

// for (const product of products){
//     htmlTemplate.push(/*html*/`<div class="col col-12 col-md-6 col-lg-4 p-3 bg-light">
//         <img class="img-fluid" src="images/${product.image}" alt="Blue T-Shirt" />
//         <h2>${product.title}</h2>
//         <div class="d-flex justify-content-between">
//             <p><strong><em>$${product.price}</em></strong></p>
//             <button class="btn btn-secondary rounded-0">Buy</button>
//         </div>
//     </div>`)
// }

// $products.innerHTML = htmlTemplate.join('')


// 5. Use createElement to display products

const $products = document.getElementById('products')
for (const product of products){
    //create the main div element: $product
    const $product = document.createElement('div')
    $product.className = "col col-12 col-md-6 col-lg-4 p-3 bg-light"
    //create the image element: $image
    const $image = document.createElement('img')
    $image.className = "img-fluid"
    $image.src = `images/${product.image}`
    $image.alt = product.title
    // console.log($image)
    $product.appendChild($image)
    //create the title element: $title
    const $title = document.createElement('h2')
    $title.textContent = product.title
    $product.appendChild($title)
    console.log($product)
    //create the container for price and buy button: $priceContainer
    const $priceContainer = document.createElement('div')
    $priceContainer.className = "d-flex justify-content-between"
    //create the price element: $price
    const $price = document.createElement('p')
    const $strong = document.createElement('strong')
    const $em = document.createElement('em')
    $em.textContent = `$${product.price}`
    $strong.appendChild($em)
    $price.appendChild($strong)
    $priceContainer.appendChild($price)

    //create the buy button: $buyButton
    const $buyButton = document.createElement('button')
    $buyButton.className = "btn btn-secondary rounded-0"
    $buyButton.textContent = "Buy"
    $priceContainer.appendChild($buyButton)
    //append the price element and buy button to the price container
    $product.appendChild($priceContainer)
    //append the product to the products container
    $products.appendChild($product)

} //closes for loop

