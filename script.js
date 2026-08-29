/* Weston Wears - front-end e-commerce demo
   No server, payment gateway, database, or secure authentication is used.
*/

const products = [
  {
    id: 1,
    name: "Noor Silk Saree",
    category: "Sarees",
    description: "Flowing silk-look saree with a refined border for festive evenings.",
    price: 3499,
    oldPrice: 4299,
    rating: 4.9,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Aster Cotton Kurti",
    category: "Kurtis",
    description: "Lightweight cotton kurti with an easy silhouette for daily wear.",
    price: 1299,
    oldPrice: 1599,
    rating: 4.7,
    tag: "EVERYDAY",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Meher Draped Dress",
    category: "Dresses",
    description: "A polished draped dress that moves beautifully from brunch to dinner.",
    price: 2199,
    oldPrice: 2799,
    rating: 4.8,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Riva Cotton Suit",
    category: "Suits",
    description: "Comfort-first cotton suit set with clean detailing and soft texture.",
    price: 1899,
    oldPrice: 2299,
    rating: 4.6,
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Zehra Chiffon Dupatta",
    category: "Dupattas",
    description: "Airy chiffon dupatta with a subtle finish to complete your look.",
    price: 899,
    oldPrice: 1099,
    rating: 4.5,
    tag: "FRESH",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Misha Celebration Lehenga",
    category: "Lehengas",
    description: "Statement festive set with graceful volume and elegant detailing.",
    price: 5499,
    oldPrice: 6499,
    rating: 4.9,
    tag: "OCCASION",
    image: "https://images.unsplash.com/photo-1595880484746-1f3a1f1b1d99?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Ava Casual Kurti",
    category: "Kurtis",
    description: "Relaxed everyday kurti in a versatile cut that layers effortlessly.",
    price: 999,
    oldPrice: 1299,
    rating: 4.6,
    tag: "VALUE",
    image: "https://images.unsplash.com/photo-1583391733978-40b9b7d9ccde?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Saanvi Premium Saree",
    category: "Sarees",
    description: "Premium drape with a rich finish designed for standout occasions.",
    price: 4299,
    oldPrice: 4999,
    rating: 4.9,
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1617624855296-2d0d2f0cb19f?auto=format&fit=crop&w=900&q=85"
  }
];

const categoryData = [
  { name: "Sarees", note: "Graceful drapes", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80" },
  { name: "Kurtis", note: "Easy everyday style", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80" },
  { name: "Dresses", note: "Modern silhouettes", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80" },
  { name: "Suits", note: "Polished comfort", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80" },
  { name: "New Arrivals", note: "Fresh Weston edits", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80" }
];

const policyData = {
  terms: {
    title: "Terms & Conditions",
    html: `<h3>Demo storefront</h3><p>Weston Wears is presented here as a front-end e-commerce demo. Product information, checkout details, order IDs, and account data shown by this site are for demonstration only.</p><h3>Product information</h3><p>Sample prices, descriptions, availability, and imagery should be reviewed and replaced with your real business information before launch.</p><h3>Orders</h3><p>Submitting the checkout form creates only a demo order in the browser. It does not send an order to a server or process a real payment.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    html: `<h3>Browser-only data</h3><p>This demo stores cart data and optional demo account information in your browser's localStorage. Nothing is sent to a database by this code.</p><h3>Contact form</h3><p>The contact form is validated in the browser and shows a success message. It does not transmit messages to Weston Wears.</p><h3>Before production</h3><p>Connect this interface to a secure backend and publish a real privacy policy that matches how customer information is actually collected and stored.</p>`
  },
  return: {
    title: "Return Policy",
    html: `<h3>Demo policy</h3><p>Because this is a front-end demo, no real purchases or returns are processed here. Replace this sample text with your actual return window, eligibility rules, exchange process, and contact details.</p><h3>Suggested production details</h3><p>Clearly state the return timeframe, product condition requirements, exclusions, shipping responsibility, and how customers can start a return.</p>`
  },
  refund: {
    title: "Refund / Return Policy",
    html: `<h3>Demo policy</h3><p>No real refunds are issued by this front-end project. For a live store, publish the exact refund method, processing window, eligible products, cancellations, and return shipping rules.</p>`
  },
  shipping: {
    title: "Shipping Policy",
    html: `<h3>Demo shipping</h3><p>The checkout uses a simple delivery charge for demonstration. A production store should show delivery areas, expected dispatch time, estimated delivery window, charges, and tracking information.</p>`
  },
  faq: {
    title: "Frequently Asked Questions",
    html: `<h3>Is this a real payment system?</h3><p>No. Checkout uses Cash on Delivery as a demo option and does not process payments.</p><h3>Will my order reach the business?</h3><p>No. The order confirmation is generated only in the browser.</p><h3>Can the products be changed?</h3><p>Yes. Edit the products array near the top of script.js to change names, descriptions, prices, categories, ratings, and images.</p>`
  }
};

const STORAGE_KEYS = {
  cart: "westonWearsCart",
  account: "westonWearsDemoAccount"
};

let cart = loadCart();
let currentCategory = "all";
let currentSearch = "";
let checkoutCartSnapshot = [];
let toastTimer;

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved
      .filter(item => products.some(product => product.id === item.id) && Number(item.quantity) > 0)
      .map(item => ({
        id: item.id,
        quantity: Number(item.quantity)
      }));
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function money(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function getProduct(id) {
  return products.find(product => product.id === Number(id));
}

function getCartItems() {
  return cart
    .map(item => ({
      product: getProduct(item.id),
      quantity: item.quantity
    }))
    .filter(item => item.product);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartSubtotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

function deliveryCharge(subtotal = cartSubtotal()) {
  return subtotal >= 3000 || subtotal === 0 ? 0 : 99;
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categoryData.map(category => `
    <button class="category-card" type="button" data-category="${category.name}">
      <img src="${category.image}" alt="${category.name} collection" loading="lazy" />
      <span class="category-card-content">
        <small>${category.note}</small>
        <h3>${category.name}</h3>
      </span>
    </button>
  `).join("");
}

function productMatches(product) {
  const query = currentSearch.trim().toLowerCase();

  const categoryMatch =
    currentCategory === "all" ||
    (
      currentCategory === "New Arrivals"
        ? product.tag === "NEW"
        : product.category === currentCategory
    );

  const textMatch =
    !query ||
    `${product.name} ${product.description} ${product.category}`
      .toLowerCase()
      .includes(query);

  return categoryMatch && textMatch;
}

function renderProducts() {
  const visibleProducts = products.filter(productMatches);

  $("#productGrid").innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h2>${product.name}</h2>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="rating">
          <span class="stars" aria-label="${product.rating} out of 5 stars">★★★★★</span>
          <span>${product.rating}</span>
        </div>

        <div class="price-line">
          <span class="price">${money(product.price)}</span>
          <span class="old-price">${money(product.oldPrice)}</span>
          <span class="discount">
            ${Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
          </span>
        </div>

        <div class="product-actions">
          <button class="btn btn-secondary add-to-cart" type="button" data-id="${product.id}">
            Add to Cart
          </button>

          <button class="btn btn-primary buy-now" type="button" data-id="${product.id}">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  `).join("");

  const noProducts = $("#noProducts");

  noProducts.classList.toggle(
    "hidden",
    visibleProducts.length !== 0
  );

  $("#productResultText").textContent =
    currentSearch || currentCategory !== "all"
      ? `${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"} found`
      : `Showing all ${products.length} products`;

  $$(".filter-chip").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter.toLowerCase() === currentCategory.toLowerCase()
    );
  });
}

function updateCartUI() {
  const count = cartCount();

  $$(".cart-count").forEach(el => {
    el.textContent = count;
  });

  $("#cartCount").textContent = count;
  $("#cartCountMobile").textContent = count;

  const items = getCartItems();

  $("#cartItems").innerHTML = items.map(({ product, quantity }) => `
    <div class="cart-line">
      <img src="${product.image}" alt="${product.name}" />

      <div>
        <h3>${product.name}</h3>

        <div class="cart-line-price">
          ${money(product.price)} each
        </div>

        <div class="qty-controls" aria-label="Quantity controls">
          <button
            type="button"
            data-cart-action="decrease"
            data-id="${product.id}"
            aria-label="Decrease ${product.name} quantity"
          >−</button>

          <span>${quantity}</span>

          <button
            type="button"
            data-cart-action="increase"
            data-id="${product.id}"
            aria-label="Increase ${product.name} quantity"
          >+</button>
        </div>

        <button
          class="remove-link"
          type="button"
          data-cart-action="remove"
          data-id="${product.id}"
        >
          Remove
        </button>
      </div>

      <div class="cart-line-total">
        ${money(product.price * quantity)}
      </div>
    </div>
  `).join("");

  const empty = items.length === 0;

  $("#cartEmpty").classList.toggle("hidden", !empty);
  $("#cartSummary").classList.toggle("hidden", empty);
  $("#cartSubtotal").textContent = money(cartSubtotal());
}

function setCartQuantity(id, nextQuantity) {
  const item = cart.find(entry => entry.id === Number(id));

  if (!item) return;

  if (nextQuantity <= 0) {
    cart = cart.filter(entry => entry.id !== Number(id));
  } else {
    item.quantity = nextQuantity;
  }

  saveCart();
  updateCartUI();
}

function addToCart(id, quantity = 1) {
  const product = getProduct(id);

  if (!product) return;

  const item = cart.find(entry => entry.id === product.id);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      quantity
    });
  }

  saveCart();
  updateCartUI();

  showToast(`${product.name} added to cart`);
}

function openOverlay() {
  $("#overlay").classList.add("open");
  document.body.classList.add("panel-open");
}

function closeOverlay() {
  $("#overlay").classList.remove("open");
  document.body.classList.remove("panel-open");
}

function openCart() {
  $("#cartPanel").classList.add("open");
  $("#cartPanel").setAttribute("aria-hidden", "false");

  openOverlay();
}

function closeCart() {
  $("#cartPanel").classList.remove("open");
  $("#cartPanel").setAttribute("aria-hidden", "true");

  closeOverlay();
}

function openModal(id) {
  const modal = $("#" + id);

  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const focusTarget = modal.querySelector(
    "input, textarea, button:not(.close-btn)"
  );

  if (focusTarget) {
    setTimeout(() => focusTarget.focus(), 40);
  }
}

function closeModal(id) {
  const modal = $("#" + id);

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

function closeAll() {
  closeCart();

  $$(".modal.open").forEach(modal => {
    closeModal(modal.id);
  });

  $("#mobileNav").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}

function openSearch() {
  openModal("searchModal");

  $("#modalSearchInput").value = currentSearch;
}

function applySearch(value) {
  currentSearch = value;

  $("#productSearch").value = value;
  $("#modalSearchInput").value = value;

  renderProducts();
}

function openAccount() {
  syncAccountUI();
  openModal("accountModal");
}

function loadAccount() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.account) || "null"
    );
  } catch {
    return null;
  }
}

function syncAccountUI() {
  const account = loadAccount();

  const loggedIn =
    Boolean(account && account.name && account.email);

  $("#accountLoggedOut").classList.toggle("hidden", loggedIn);
  $("#accountLoggedIn").classList.toggle("hidden", !loggedIn);

  $("#loginBtn").classList.toggle("hidden", loggedIn);
  $("#logoutBtn").classList.toggle("hidden", !loggedIn);

  $("#mobileLoginBtn").classList.toggle("hidden", loggedIn);
  $("#mobileLogoutBtn").classList.toggle("hidden", !loggedIn);

  if (loggedIn) {
    $("#accountWelcome").textContent =
      `Welcome, ${account.name}`;

    $("#accountAvatar").textContent =
      account.name.trim().charAt(0).toUpperCase();
  }
}

function handleLogin(event) {
  event.preventDefault();

  const name = $("#loginName").value.trim();
  const email = $("#loginEmail").value.trim();

  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    showToast("Enter a valid name and email");
    return;
  }

  localStorage.setItem(
    STORAGE_KEYS.account,
    JSON.stringify({
      name,
      email
    })
  );

  syncAccountUI();

  $("#loginForm").reset();

  showToast("Demo login successful");
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.account);

  syncAccountUI();

  showToast("You have been logged out");

  closeModal("accountModal");
}

function openCheckout(items) {
  if (!items.length) {
    showToast("Your cart is empty");
    return;
  }

  checkoutCartSnapshot = items.map(item => ({
    ...item
  }));

  renderCheckout();

  $("#checkoutView").classList.remove("hidden");
  $("#checkoutSuccessView").classList.add("hidden");

  $("#checkoutForm").reset();
  $("#checkoutError").textContent = "";

  openModal("checkoutModal");
}

function openBuyNow(id) {
  const product = getProduct(id);

  if (!product) return;

  openCheckout([
    {
      product,
      quantity: 1
    }
  ]);
}

function renderCheckout() {
  const subtotal = checkoutCartSnapshot.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );

  const delivery = deliveryCharge(subtotal);

  $("#checkoutProduct").innerHTML =
    checkoutCartSnapshot.map(({ product, quantity }) => `
      <div class="checkout-product-card">
        <img src="${product.image}" alt="${product.name}" />

        <div>
          <span class="product-category">
            ${product.category}
          </span>

          <h3>${product.name}</h3>

          <p>${money(product.price)} each</p>

          <div class="qty-inline">
            <button
              type="button"
              data-checkout-action="decrease"
              data-id="${product.id}"
              aria-label="Decrease quantity"
            >−</button>

            <strong>${quantity}</strong>

            <button
              type="button"
              data-checkout-action="increase"
              data-id="${product.id}"
              aria-label="Increase quantity"
            >+</button>
          </div>
        </div>
      </div>
    `).join("");

  $("#checkoutSubtotal").textContent =
    money(subtotal);

  $("#checkoutDelivery").textContent =
    delivery === 0 ? "FREE" : money(delivery);

  $("#checkoutTotal").textContent =
    money(subtotal + delivery);
}

function updateCheckoutQuantity(id, delta) {
  const target = checkoutCartSnapshot.find(
    item => item.product.id === Number(id)
  );

  if (!target) return;

  target.quantity += delta;

  if (target.quantity <= 0) {
    checkoutCartSnapshot =
      checkoutCartSnapshot.filter(
        item => item.product.id !== Number(id)
      );
  }

  if (!checkoutCartSnapshot.length) {
    closeModal("checkoutModal");
    showToast("Checkout item removed");
    return;
  }

  renderCheckout();
}

function placeOrder(event) {
  event.preventDefault();

  const requiredIds = [
    "customerName",
    "customerPhone",
    "customerEmail",
    "customerAddress",
    "customerCity",
    "customerPostal"
  ];

  const valid = requiredIds.every(
    id => $("#" + id).value.trim()
  );

  const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      $("#customerEmail").value.trim()
    );

  const phoneValid =
    /^[0-9+\-\s]{7,18}$/.test(
      $("#customerPhone").value.trim()
    );

  const error = $("#checkoutError");

  if (!valid) {
    error.textContent =
      "Please complete every customer detail field.";
    return;
  }

  if (!emailValid) {
    error.textContent =
      "Please enter a valid email address.";
    return;
  }

  if (!phoneValid) {
    error.textContent =
      "Please enter a valid phone number.";
    return;
  }

  const orderId =
    `WW-${Date.now().toString().slice(-6)}-${Math.floor(10 + Math.random() * 90)}`;

  $("#orderId").textContent = orderId;

  $("#checkoutView").classList.add("hidden");
  $("#checkoutSuccessView").classList.remove("hidden");

  checkoutCartSnapshot.forEach(snapshotItem => {
    const cartItem = cart.find(
      item => item.id === snapshotItem.product.id
    );

    if (cartItem) {
      cartItem.quantity -= snapshotItem.quantity;

      if (cartItem.quantity <= 0) {
        cart = cart.filter(
          item => item.id !== snapshotItem.product.id
        );
      }
    }
  });

  saveCart();
  updateCartUI();

  showToast("Demo order placed successfully");
}

function openPolicy(key) {
  const policy =
    policyData[key] || policyData.terms;

  $("#policyTitle").textContent = policy.title;
  $("#policyContent").innerHTML = policy.html;

  openModal("policyModal");
}

function showToast(message) {
  clearTimeout(toastTimer);

  $("#toastText").textContent = message;
  $("#toast").classList.add("show");

  toastTimer = setTimeout(() => {
    $("#toast").classList.remove("show");
  }, 2600);
}

function submitContact(event) {
  event.preventDefault();

  const name = $("#contactName").value.trim();
  const email = $("#contactEmail").value.trim();
  const message = $("#contactMessage").value.trim();

  const success = $("#contactSuccess");

  if (!name || !email || !message) {
    success.style.color = "#a16b5d";
    success.textContent =
      "Please complete all fields.";
    return;
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    success.style.color = "#a16b5d";
    success.textContent =
      "Please enter a valid email address.";
    return;
  }

  success.style.color = "var(--success)";
  success.textContent =
    "Thanks! Your demo message has been validated successfully.";

  event.currentTarget.reset();
}

function initEvents() {
  $$(".js-open-search").forEach(btn =>
    btn.addEventListener("click", openSearch)
  );

  $$(".js-open-account").forEach(btn =>
    btn.addEventListener("click", openAccount)
  );

  $$(".cart-trigger").forEach(btn =>
    btn.addEventListener("click", openCart)
  );

  $("#loginBtn").addEventListener(
    "click",
    openAccount
  );

  $("#mobileLoginBtn").addEventListener(
    "click",
    openAccount
  );

  $("#logoutBtn").addEventListener(
    "click",
    logout
  );

  $("#mobileLogoutBtn").addEventListener(
    "click",
    logout
  );

  $("#menuToggle").addEventListener("click", () => {
    const nav = $("#mobileNav");

    nav.classList.toggle("open");

    $("#menuToggle").setAttribute(
      "aria-expanded",
      nav.classList.contains("open")
    );
  });

  $$(".mobile-nav-link").forEach(link =>
    link.addEventListener("click", () => {
      if (
        link.tagName === "A" ||
        link.classList.contains("cart-trigger") ||
        link.classList.contains("js-open-search") ||
        link.classList.contains("js-open-account")
      ) {
        $("#mobileNav").classList.remove("open");

        $("#menuToggle").setAttribute(
          "aria-expanded",
          "false"
        );
      }
    })
  );

  $("#overlay").addEventListener(
    "click",
    closeCart
  );

  $$("[data-close]").forEach(btn =>
    btn.addEventListener("click", () => {
      const target = btn.dataset.close;

      if (target === "cartPanel") {
        closeCart();
      } else {
        closeModal(target);
      }
    })
  );

  $("#productSearch").addEventListener(
    "input",
    event => applySearch(event.target.value)
  );

  $("#clearSearch").addEventListener(
    "click",
    () => applySearch("")
  );

  $("#modalSearchInput").addEventListener(
    "input",
    event => applySearch(event.target.value)
  );

  $$("[data-search-tag]").forEach(btn =>
    btn.addEventListener("click", () => {
      applySearch(btn.dataset.searchTag);

      $("#shop").scrollIntoView({
        behavior: "smooth"
      });

      closeModal("searchModal");
    })
  );

  $$(".filter-chip").forEach(button =>
    button.addEventListener("click", () => {
      currentCategory = button.dataset.filter;

      renderProducts();
    })
  );

  $("#resetFilters").addEventListener(
    "click",
    () => {
      currentCategory = "all";
      applySearch("");
    }
  );

  $("#categoryGrid").addEventListener(
    "click",
    event => {
      const card =
        event.target.closest("[data-category]");

      if (!card) return;

      currentCategory = card.dataset.category;
      currentSearch = "";

      $("#productSearch").value = "";

      renderProducts();

      $("#shop").scrollIntoView({
        behavior: "smooth"
      });
    }
  );

  $("#productGrid").addEventListener(
    "click",
    event => {
      const add =
        event.target.closest(".add-to-cart");

      const buy =
        event.target.closest(".buy-now");

      if (add) {
        addToCart(Number(add.dataset.id));
      }

      if (buy) {
        openBuyNow(Number(buy.dataset.id));
      }
    }
  );

  $("#cartItems").addEventListener(
    "click",
    event => {
      const button =
        event.target.closest("[data-cart-action]");

      if (!button) return;

      const id = Number(button.dataset.id);

      const current =
        cart.find(item => item.id === id)?.quantity || 0;

      const action =
        button.dataset.cartAction;

      if (action === "increase") {
        setCartQuantity(id, current + 1);
      }

      if (action === "decrease") {
        setCartQuantity(id, current - 1);
      }

      if (action === "remove") {
        setCartQuantity(id, 0);
        showToast("Item removed from cart");
      }
    }
  );

  $("#checkoutCartBtn").addEventListener(
    "click",
    () => openCheckout(getCartItems())
  );

  $("#checkoutProduct").addEventListener(
    "click",
    event => {
      const button =
        event.target.closest("[data-checkout-action]");

      if (!button) return;

      updateCheckoutQuantity(
        Number(button.dataset.id),
        button.dataset.checkoutAction === "increase"
          ? 1
          : -1
      );
    }
  );

  $("#loginForm").addEventListener(
    "submit",
    handleLogin
  );

  $("#accountLogoutBtn").addEventListener(
    "click",
    logout
  );

  $("#checkoutForm").addEventListener(
    "submit",
    placeOrder
  );

  $("#contactForm").addEventListener(
    "submit",
    submitContact
  );

  $$(".js-open-policy").forEach(btn =>
    btn.addEventListener("click", () =>
      openPolicy(btn.dataset.policy)
    )
  );

  document.addEventListener(
    "keydown",
    event => {
      if (event.key === "Escape") {
        closeAll();
      }
    }
  );
}

function init() {
  renderCategories();
  renderProducts();
  updateCartUI();
  syncAccountUI();

  $("#year").textContent =
    new Date().getFullYear();

  initEvents();
}

document.addEventListener(
  "DOMContentLoaded",
  init
);
