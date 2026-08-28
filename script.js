/* =========================
   VÉLORA — ECOMMERCE JAVASCRIPT
   ========================= */

let cart = JSON.parse(localStorage.getItem("veloraCart")) || [];

/* ---------- ELEMENTS ---------- */

const cartPanel = document.querySelector(".cart-panel");
const cartItemsContainer = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total-price");
const cartButton = document.querySelector(".cart-button");
const closeCart = document.querySelector(".close-cart");

/* ---------- CART ---------- */

function addToCart(product) {

    const existingProduct = cart.find(
        item => item.id === product.id
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    showToast("Added to cart");
}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();
}

function changeQuantity(id, change) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );
}

/* ---------- RENDER CART ---------- */

function renderCart() {

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `
            <p style="text-align:center;color:#777;padding:40px 0;">
                Your cart is empty.
            </p>
        `;

    } else {

        cart.forEach(item => {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>₹${item.price}</p>

                    <div style="margin-top:8px;">

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                            style="padding:3px 8px;"
                        >
                            −
                        </button>

                        <span style="margin:0 10px;">
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                            style="padding:3px 8px;"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    ×
                </button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });
    }

    updateCartCount();
    updateCartTotal();
}

/* ---------- CART COUNT ---------- */

function updateCartCount() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

/* ---------- CART TOTAL ---------- */

function updateCartTotal() {

    const total = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * item.quantity,
        0
    );

    if (cartTotal) {
        cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
    }
}

/* ---------- OPEN CART ---------- */

if (cartButton) {

    cartButton.addEventListener("click", () => {

        cartPanel.classList.add("open");

    });
}

/* ---------- CLOSE CART ---------- */

if (closeCart) {

    closeCart.addEventListener("click", () => {

        cartPanel.classList.remove("open");

    });
}

/* ---------- PRODUCT BUTTONS ---------- */

document.querySelectorAll(".add-to-cart").forEach(
    (button, index) => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".product-card");

            if (!card) return;

            const name =
                card.querySelector("h3")?.textContent ||
                "VÉLORA Product";

            const priceText =
                card.querySelector(".price")?.textContent ||
                "0";

            const price =
                parseInt(
                    priceText.replace(/[^\d]/g, "")
                ) || 0;

            const image =
                card.querySelector("img")?.src || "";

            addToCart({
                id: Date.now() + index,
                name,
                price,
                image
            });

        });
    }
);

/* ---------- SEARCH ---------- */

const searchInput =
    document.querySelector("#searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchTerm =
                this.value.toLowerCase().trim();

            document
                .querySelectorAll(".product-card")
                .forEach(card => {

                    const productName =
                        card
                            .querySelector("h3")
                            ?.textContent
                            .toLowerCase() || "";

                    card.style.display =
                        productName.includes(searchTerm)
                            ? ""
                            : "none";
                });
        }
    );
}

/* ---------- CATEGORY FILTER ---------- */

document.querySelectorAll(".filter-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".filter-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );

        button.classList.add("active");

        const category =
            button.dataset.category;

        document
            .querySelectorAll(".product-card")
            .forEach(card => {

                const productCategory =
                    card.dataset.category;

                if (
                    category === "all" ||
                    productCategory === category
                ) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });
    });
});

/* ---------- NEWSLETTER ---------- */

const newsletterForm =
    document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                this.querySelector("input").value;

            if (!email) return;

            showToast("Thanks for subscribing!");

            this.reset();
        }
    );
}

/* ---------- TOAST ---------- */

function showToast(message) {

    let toast =
        document.querySelector(".toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}

/* ---------- SMOOTH SCROLL ---------- */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

/* ---------- INITIALIZE ---------- */

renderCart();
