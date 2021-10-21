class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = []; //!!список товаров
        this.allProducts = []; //!!каталог эксземпляров классов товаров - актуальное состояние текущего списка товаров
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.createTotal();
        this.sumTotal();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }
// задание 2 ..
    createTotal() { // добавили метод подсчета суммы товара
        const h2Total = document.createElement('h2');
        h2Total.classList.add('total');
        const flexRow = document.querySelector('.flex__row');
        flexRow.append(h2Total);
        h2Total.innerHTML = `ИТОГО, общая стоимость составляет: ${this.sumTotal()} \u20bd`;
    }
    sumTotal() {
        const sumT = document.querySelector('.total');
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        return sum;
    }
}
// задание 2 ..


class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();



//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);