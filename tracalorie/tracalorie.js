// STORAGE CONTROLLER

// ITEM CONTROLLER

const ItemCtrl = (function () {
  // ITEM CONSTRUCTOR
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // DATA STRUCTURE / STATE
  const state = {
    items: [
      { id: 0, name: 'Apple', calories: 80 },
      { id: 2, name: 'Banana', calories: 100 },
      { id: 3, name: 'Strawberry', calories: 5 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // PUBLIC METHODS
  return {
    getItems: function () {
      return state.items;
    },
    logState: function () {
      return state;
    },
  };
})();

// UI CONTROLLER
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
  };

  // PUBLIC METHODS
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `
              <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
    `;
      });

      // INSERT LIST ITEMS
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
  };
})();

// APP CONTROLLER
const App = (function (ItemCtrl, UICtrl) {
  // PUBLIC METHODS
  return {
    init: function () {
      console.log('Initializing App...');
      //  FETCH ITEMS
      const items = ItemCtrl.getItems();
      // POPULATE LIST WITH ITEMS
      UICtrl.populateItemList(items);
    },
  };
})(ItemCtrl, UICtrl);

// INIT APP
App.init();
