document.addEventListener('DOMContentLoaded', async () => {
    const items = document.querySelector('.container-items');

    items.innerHTML = "";

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();

        result.forEach(res => {
            switch(res.category){
                case `men's clothing`:
                    category = 'clothe';
                    break;
                case `women's clothing`:
                    category = 'clothe';
                    break;
                case `electronics`:
                    category = 'tech';
                    break;
                case `jewelery`:
                    category = 'beauty';
                    break;
                default:
                    category = 'promo';
            }

            const item = document.createElement('div');
            item.classList.add('item-card');
            item.innerHTML = `
                <img src="${res.image}" alt="${res.title}">
                <div class="card-content">
                  <p class="item-name">${res.title}</p>
                  <div class="inner-content">
                    <p class="item-price">$${res.price}</p>
                    <p class="tag ${category}">${category}</p>
                  </div>
                  <button class="add-btn">Add to Dish</button>
                </div>
            `;
            items.appendChild(item);
        });
      } catch (error) {
        console.error(error);
      }
});