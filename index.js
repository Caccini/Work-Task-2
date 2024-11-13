const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('active'); 
});

closeMenu.addEventListener('click', () => {
  mobileNav.classList.remove('active'); 
});

  

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            discount: 44,
            image: '/images/img1.png',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/img2.png',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/img3.png',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/img4.png',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/img5.png',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/img1.png',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/img2.png',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/img3.png',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/img4.png',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/img5.png',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/img1.png',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/img2.png',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/img3.png',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/img4.png',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/img5.png',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/img1.png',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/img2.png',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/img3.png',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/img4.png',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: '/images/img5.png',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        }, {
            discount: 44,
            image: '/images/img1.png',
            title: 'Прахосмукачка за сухо и мокро почистване',
            oldPrice: 339.00,
            currentPrice: 191.00,
            savings: 148.00
        },
        {
            discount: 33,
            image: '/images/img2.png',
            title: 'Бензинов генератор за ток Power Plus PWX5160',
            oldPrice: 2037.00,
            currentPrice: 1364.00,
            savings: 673.00
        },
        {
            discount: 42,
            image: '/images/img3.png',
            title: 'Прахосмукачка за пепел и камини STAHL The Ash',
            oldPrice: 119.00,
            currentPrice: 69.00,
            savings: 50.00
        },
        {
            discount: 36,
            image: '/images/img4.png',
            title: 'Газов калорифер STAHL SGAS50 50kW',
            oldPrice: 390.00,
            currentPrice: 249.00,
            savings: 141.00
        },
        {
            discount: 29,
            image: 'images/img5.png',
            title: 'Абрихт-щрайхмус ZIPPER ZI-HB254N 1500W',
            oldPrice: 1179.00,
            currentPrice: 836.00,
            savings: 343.00
        },
        
        
    ];

    function createProductCard(product) {
        return `
            <div class="product-card">
                <div class="discount-badge">-${product.discount}%</div>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-bottom">
                        <div class="price">
                            ${product.currentPrice.toFixed(2)} лв.
                            <div class="old-price">${product.oldPrice.toFixed(2)} лв.</div>
                        </div>
                        <button class="cart-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -4 24 24" width="28" fill="currentColor"><path d="M7 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM.962 1.923A.962.962 0 0 1 .962 0h1.151c.902 0 1.682.626 1.878 1.506l1.253 5.642c.196.88.976 1.506 1.878 1.506h7.512l1.442-5.77H6.731a.962.962 0 0 1 0-1.922h9.345a1.923 1.923 0 0 1 1.866 2.39L16.5 9.12a1.923 1.923 0 0 1-1.866 1.457H7.122a3.846 3.846 0 0 1-3.755-3.012L2.113 1.923H.962z"></path></svg></button>
                    </div>
                </div>
            </div>
        `;
    }

    const productsGrid = document.getElementById('productsGrid');
    const loadMoreButton = document.getElementById('loadMore');
    
    if (!productsGrid || !loadMoreButton) {
        console.error('Required elements not found');
        return;
    }

    let currentPage = 0;
    const productsPerPage = 8;

    function displayProducts() {
        const startIndex = currentPage * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = products.slice(startIndex, endIndex);
        
        productsToShow.forEach(product => {
            productsGrid.insertAdjacentHTML('beforeend', createProductCard(product));
        });

        if (endIndex >= products.length) {
            loadMoreButton.style.display = 'none';
        }

        document.querySelectorAll('.view-button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.background = '#e0e0e0';
            });
            button.addEventListener('mouseleave', () => {
                button.style.background = '#f5f5f5';
            });
        });
    }

    displayProducts();

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        displayProducts();
    });

    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                alert('Търсене: ' + searchInput.value);
            }
        });
    }

    const hamburgerButton = document.querySelector('.hamburger-button');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    if (hamburgerButton && closeMenuButton && mobileMenu && overlay) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.style.display = 'block';
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.style.display = 'none';
        });
    }

    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            alert('Search clicked');
        });
    }

    document.querySelectorAll('.back-to-site, .mobile-back').forEach(button => {
        button.addEventListener('click', (e) => {
            if (document.referrer) {
                e.preventDefault();
                window.location.href = document.referrer;
            }
        });
    });
});



window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
    
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 1500); 
});

document.addEventListener('DOMContentLoaded', function() {
    const sortingDropdown = document.querySelector('.sorting-dropdown');
    if(sortingDropdown) {
        sortingDropdown.addEventListener('click', function(e) {
            e.stopPropagation(); 
        });
    } else {
        console.log('Dropdown not found'); 
    }
});