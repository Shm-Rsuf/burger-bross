import { burgers } from './data';

const burgerWrapper = document.querySelector('.burger-card-wrapper');

class App {
  constructor() {
    this._getBurgerData();
  }

  _getBurgerData() {
    burgers.forEach(burger => this._renderBurger(burger))
  }

  _currencyConvert(amount) {
    return amount.toLocaleString('bn-BD', { style: 'currency', currency: 'BDT' })
  }

  _renderBurger(burger) {
    const html =
      `<div
    class="burger-card overflow-hidden w-60 h-80 rounded-lg shadow-md duration-300"
  >
    <div
      class="burger-img h-36 overflow-hidden flex justify-center items-center"
    >
      <img
        class="block w-full"
        src=${burger.img}
        alt="${burger.title}"
      />
    </div>
    <div class="burger-texts flex flex-col items-start p-5 gap-3">
      <h3 class="capitalize text-xl font-semibold text-orange-400">
        ${burger.title}
      </h3>
      <p class="uppercase tex-lg font-semibold">${this._currencyConvert(burger.price)}</p>
      <button ${onclick = this._orderHandler.bind(this)}
        class="order bg-orange-500 py-2 px-4 block rounded-md uppercase text-white mt-4 hover:bg-gray-700 duration-300"
      >
        Order now
      </button>
    </div>
  </div>
    `;
    burgerWrapper.insertAdjacentHTML('afterbegin', html);
  }

  _orderHandler() {

  }
}

const myApp = new App();
