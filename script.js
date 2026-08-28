/* =========================
   PRODUCT DATA
========================= */

const products = [

    {
        id: 1,
        name: "Elegant Silk Saree",
        category: "Sarees",
        price: 2499,
        oldPrice: 3299,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Classic Designer Saree",
        category: "Sarees",
        price: 1899,
        oldPrice: 2499,
        image: "https://images.unsplash.com/photo-1610189012906-4e1f9c5d5c4a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Premium Cotton Kurti",
        category: "Kurtis",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Printed Casual Kurti",
        category: "Kurtis",
        price: 699,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1610030469668-8e9f5e8f2c75?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Luxury Floral Bedsheet",
        category: "Bedsheets",
        price: 1299,
        oldPrice: 1699,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Premium Cotton Bedsheet",
        category: "Bedsheets",
        price: 999,
        oldPrice: 1399,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Festive Embroidered Kurti",
        category: "Kurtis",
        price: 1199,
        oldPrice: 1599,
        image: "https://images.unsplash.com/photo-1585488431377-0fb5f4c5f0a5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Premium Wedding Saree",
        category: "Sarees",
        price: 2999,
        oldPrice: 3999,
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    }

];


/* =========================
   CART
========================= */

let cart = JSON.parse(localStorage.getItem("navaCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("navaWishlist")) || [];


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(list = products) {

    const container = document.getElementById("products");

    if (list.length === 0) {

        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px;">
                <h3>No products found.</h3>
                <p style="color:#888;margin-top:10px;">
                    Try another search.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML = list.map(product => {

        const isWishlisted = wishlist.includes(product.id);

        return `

        <div class="product-card">

            <div
                class="product-image"
                style="background-image:url('${product.image}')"
            >

                <div class="product-actions">

                    <button
                        class="wishlist ${isWishlisted ? "active" : ""}"
                        onclick="toggleProductWishlist(${product.id})"
                    >
                        ${isWishlisted ? "♥" : "♡"}
                    </button>

                </div>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="price">

                    Rs. ${product.price}

                    <span class="old-price">
                        Rs. ${product.oldPrice}
                    </span>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    ADD TO CART
                </button>

            </div>

        </div>

        `;

    }).join("");

}


/* =========================
   FILTER CATEGORY
========================= */

function filterCategory(category) {

    document.querySelectorAll(".filter").forEach(button => {

        button.classList.remove("active");

    });


    if (category === "All") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product => product.category === category
            );

        displayProducts(filtered);

    }


    document.getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SEARCH
========================= */

function openSearch() {

    document
        .getElementById("searchOverlay")
        .classList.add("active");

    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 200);

}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("active");

}


function searchProducts() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const results = products.filter(product =>

        product.name.toLowerCase().includes(query) ||

        product.category.toLowerCase().includes(query)

    );


    displayProducts(results);

}


/* =========================
   SORT
========================= */

function sortProducts() {

    const value =
        document.getElementById("sortProducts").value;


    let sorted = [...products];


    if (value === "low") {

        sorted.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (value === "high") {

        sorted.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (value === "name") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    displayProducts(sorted);

}


/* =========================
   ADD TO CART
========================= */

function addToCart(id) {

    const product =
        products.find(item => item.id === id);


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast("Product added to cart!");

}


/* =========================
   SAVE CART
========================= */

function saveCart() {

    localStorage.setItem(
        "navaCart",
        JSON.stringify(cart)
    );

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    cartTotal.textContent =
        `Rs. ${totalPrice.toLocaleString()}`;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;

    }


    cartItems.innerHTML = cart.map(item => `

        <div class="cart-item">

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>
                    Rs. ${item.price.toLocaleString()}
                </p>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>

        </div>

    `).join("");

}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    saveCart();

    updateCart();

}


/* =========================
   REMOVE FROM CART
========================= */

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

}


/* =========================
   OPEN CART
========================= */

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


/* =========================
   WISHLIST
========================= */

function toggleProductWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        showToast("Removed from wishlist.");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist!");

    }


    localStorage.setItem(
        "navaWishlist",
        JSON.stringify(wishlist)
    );


    updateWishlistCount();

    displayProducts();

}


function updateWishlistCount() {

    document.getElementById(
        "wishlistCount"
    ).textContent = wishlist.length;

}


function toggleWishlist() {

    if (wishlist.length === 0) {

        showToast("Your wishlist is empty.");

        return;

    }


    const wishProducts =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );


    displayProducts(wishProducts);

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CHECKOUT
========================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast("Your cart is empty.");

        return;

    }


    closeCart();

    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


/* =========================
   PLACE ORDER
========================= */

function placeOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;

    const payment =
        document.getElementById("paymentMethod").value;


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    const orderMessage =

`Hello NAVA Fashion!

I want to place an order.

Name: ${name}
Phone: ${phone}
Address: ${address}

Payment: ${payment}

Order:
${cart.map(
    item =>
        `${item.name} x ${item.quantity} = Rs. ${item.price * item.quantity}`
).join("\n")}

Total: Rs. ${total}

Thank you!`;


    /*
       CHANGE THIS NUMBER TO YOUR
       SHOP'S WHATSAPP NUMBER.

       Example:
       9779812345678
    */

    const whatsappNumber = "97798XXXXXXXX";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;


    alert(
        "Your order is ready! You will now be redirected to WhatsApp."
    );


    window.open(
        whatsappURL,
        "_blank"
    );


    cart = [];

    saveCart();

    updateCart();

    closeCheckout();

}


/* =========================
   NEWSLETTER
========================= */

function subscribe(event) {

    event.preventDefault();

    showToast(
        "Thanks for subscribing!"
    );

    event.target.reset();

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");


    if (
        menu.style.display === "block"
    ) {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================
   INITIALIZE
========================= */

displayProducts();

updateCart();

updateWishlistCount();
