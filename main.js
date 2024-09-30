
document.addEventListener('DOMContentLoaded',()=>{
    const productList=document.getElementById("productList");
    const searchInput=document.getElementById("searchInput");
    const categoryFilter=document.getElementById("categoryFilter");

    function renderProducts(filteredProducts){
        productList.innerHTML='';
        filteredProducts.forEach(product=>{
            const productItem=document.createElement('div');
            productItem.className='product-item';
            productItem.innerHTML=`
            <img src="${product.imgUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price : ${product.Price}</p>
            <p>${product.description}</p>
            <button>Add to Cart</button>
            `;

            productList.appendChild(productItem);
        });
    }
    function filterProducts()
    {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory=categoryFilter.value;
        const filteredProducts=products.filter(product=>{
            const matchesSearch=product.name.toLowerCase().includes(searchTerm);
            const matchesCategory=selectedCategory === '' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        renderProducts(filteredProducts);
    }

    searchInput.addEventListener('input',filterProducts);
    categoryFilter.addEventListener('change',filterProducts);

    renderProducts(products);
})

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formFeedback.textContent = "Please fill in all fields.";
            formFeedback.style.color = "red";
            return;
        }
      
        formFeedback.textContent = "Thank you for your message!";
        formFeedback.style.color = "green";

        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterFeedback = document.getElementById('newsletterFeedback');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('newsletterEmail').value.trim();

        if (!email) {
            newsletterFeedback.textContent = "Please enter a valid email address.";
            newsletterFeedback.style.color = "red";
            return;
        }
   
        newsletterFeedback.textContent = "Thank you for subscribing!";
        newsletterFeedback.style.color = "green";

        newsletterForm.reset();
    });
});


// JavaScript to toggle the mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('show');
  });
  