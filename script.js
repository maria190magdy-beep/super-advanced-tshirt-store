// Loader
window.addEventListener("load", () => { document.getElementById("loader").style.display="none"; });

// Cart
let cart = [];
let buttons = document.querySelectorAll(".add-cart");
buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    cart.push("product");
    document.getElementById("cart-count").innerText = cart.length;
  });
});

// Filter
let filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    let category = btn.dataset.filter;
    let products = document.querySelectorAll(".product");
    products.forEach(p=>{
      if(category==="all" || p.dataset.category===category){ p.style.display="block"; }
      else{ p.style.display="none"; }
    });
  });
});

// Search
document.getElementById("search").addEventListener("keyup", e=>{
  let term = e.target.value.toLowerCase();
  let products = document.querySelectorAll(".product");
  products.forEach(p=>{
    let title = p.querySelector("h5").innerText.toLowerCase();
    p.style.display = title.includes(term) ? "block" : "none";
  });
});

// Wishlist
let hearts = document.querySelectorAll(".wishlist");
hearts.forEach(icon=>{
  icon.addEventListener("click", ()=>{ icon.classList.toggle("text-danger"); });
});

// Quick View Modal
let modal = document.getElementById("quickViewModal");
let modalImg = document.getElementById("modal-img");
let modalTitle = document.getElementById("modal-title");
let modalPrice = document.getElementById("modal-price");
let modalClose = modal.querySelector(".close");

document.querySelectorAll(".quick-view").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    let card = btn.closest(".product-card");
    modal.style.display = "flex";
    modalImg.src = card.querySelector("img").src;
    modalTitle.innerText = card.querySelector("h5").innerText;
    modalPrice.innerText = card.querySelector("p").innerText;
  });
});

modalClose.addEventListener("click", ()=>{ modal.style.display="none"; });
window.addEventListener("click", e=>{ if(e.target==modal){ modal.style.display="none"; } });