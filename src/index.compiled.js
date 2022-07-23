(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.currenciesData = exports.inventoryData = void 0;
    var inventoryData = [{
      name: 'Hello World Hat',
      price: 23.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hello-world-hat.jpg'
    }, {
      name: 'Learn From Home Joggers',
      price: 45.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sweatpants.jpg'
    }, {
      name: 'Java Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/java-tee.jpg'
    }, {
      name: 'Python Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/python-tee.jpg'
    }, {
      name: 'SQL Tee',
      price: 17.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/sql-tee.jpg'
    }, {
      name: 'Hello World Hoodie',
      price: 49.99,
      img: 'https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/hoodie.jpg'
    }];
    exports.inventoryData = inventoryData;
    var currenciesData = ['USD', 'EUR', 'CAD'];
    exports.currenciesData = currenciesData;
    
    },{}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.App = void 0;
    
    var _react = _interopRequireDefault(require("react"));
    
    var _Inventory = require("../features/inventory/Inventory.js");
    
    var _CurrencyFilter = require("../features/currencyFilter/CurrencyFilter.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    // Import the Cart component here.
    // Render the Cart component below <Inventory />
    var App = function App(props) {
      var state = props.state,
          dispatch = props.dispatch;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CurrencyFilter.CurrencyFilter, {
        currencyFilter: state.currencyFilter,
        dispatch: dispatch
      }), /*#__PURE__*/_react["default"].createElement(_Inventory.Inventory, {
        inventory: state.inventory,
        currencyFilter: state.currencyFilter,
        dispatch: dispatch
      }));
    };
    
    exports.App = App;
    
    },{"../features/currencyFilter/CurrencyFilter.js":4,"../features/inventory/Inventory.js":6,"react":undefined}],3:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cartReducer = exports.addItem = void 0;
    
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
    
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    
    var addItem = function addItem(itemToAdd) {
      return {
        type: 'cart/addItem',
        payload: itemToAdd
      };
    }; // Create your changeItemQuantity action creator here.
    
    
    exports.addItem = addItem;
    var initialCart = {};
    
    var cartReducer = function cartReducer() {
      var cart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCart;
      var action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'cart/addItem':
          {
            var _action$payload = action.payload,
                name = _action$payload.name,
                price = _action$payload.price; // if the item already exists, increase the quantity by 1, otherwise set it to 1
    
            var quantity = cart[name] ? cart[name].quantity + 1 : 1;
            var newItem = {
              price: price,
              quantity: quantity
            }; // Add the new item to the cart (or replace it if it existed already)
    
            return _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, name, newItem));
          }
    
        case 'cart/changeItemQuantity':
          {
            var _action$payload2 = action.payload,
                _name = _action$payload2.name,
                newQuantity = _action$payload2.newQuantity;
            var itemToUpdate = cart[_name]; // Create a copy of itemToUpdate and update the quantity prop.
            // Return a copy of the cart with the updatedItem included.
    
            return {};
          }
    
        default:
          {
            return cart;
          }
      }
    };
    
    exports.cartReducer = cartReducer;
    
    },{}],4:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrencyFilter = void 0;
    
    var _react = _interopRequireDefault(require("react"));
    
    var _data = require("../../../data.js");
    
    var _currencyFilterSlice = require("./currencyFilterSlice.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    var CurrencyFilter = function CurrencyFilter(_ref) {
      var currencyFilter = _ref.currencyFilter,
          dispatch = _ref.dispatch;
    
      var onClickHandler = function onClickHandler(currency) {
        dispatch((0, _currencyFilterSlice.setCurrency)(currency));
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "currency-filters-container"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Choose a currency"), _data.currenciesData.map(createCurrencyButton));
    
      function createCurrencyButton(currency) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: "currency-button ".concat(currencyFilter === currency && 'selected'),
          key: currency,
          onClick: function onClick() {
            return onClickHandler(currency);
          }
        }, currency);
      }
    };
    
    exports.CurrencyFilter = CurrencyFilter;
    
    },{"../../../data.js":1,"./currencyFilterSlice.js":5,"react":undefined}],5:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setCurrency = exports.currencyFilterReducer = void 0;
    var initialCurrencyFilter = 'USD';
    
    var currencyFilterReducer = function currencyFilterReducer() {
      var currencyFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrencyFilter;
      var action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'currencyFilter/setCurrency':
          {
            return action.payload;
          }
    
        default:
          {
            return currencyFilter;
          }
      }
    };
    
    exports.currencyFilterReducer = currencyFilterReducer;
    
    var setCurrency = function setCurrency(currency) {
      return {
        type: 'currencyFilter/setCurrency',
        payload: currency
      };
    };
    
    exports.setCurrency = setCurrency;
    
    },{}],6:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Inventory = void 0;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _utilities = require("../../utilities/utilities.js");
    
    var _cartSlice = require("../cart/cartSlice.js");
    
    var _inventorySlice = require("./inventorySlice");
    
    function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }
    
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    var Inventory = function Inventory(_ref) {
      var inventory = _ref.inventory,
          currencyFilter = _ref.currencyFilter,
          dispatch = _ref.dispatch;
    
      var onMount = function onMount() {
        dispatch((0, _inventorySlice.loadData)());
      };
    
      (0, _react.useEffect)(onMount, [dispatch]);
    
      var onClickHandler = function onClickHandler(inventoryItem) {
        dispatch((0, _cartSlice.addItem)(inventoryItem));
      };
    
      if (inventory.length === 0) {
        return /*#__PURE__*/_react["default"].createElement("p", null, " Sorry, no products are currently available... ");
      }
    
      return /*#__PURE__*/_react["default"].createElement("ul", {
        id: "inventory-container"
      }, inventory.map(createInventoryItem));
    
      function createInventoryItem(inventoryItem) {
        var price = inventoryItem.price,
            name = inventoryItem.name,
            img = inventoryItem.img;
        var displayPrice = (0, _utilities.calculatePrice)(price, currencyFilter);
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: name,
          className: "item"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: img,
          alt: ''
        }), /*#__PURE__*/_react["default"].createElement("h3", null, name), /*#__PURE__*/_react["default"].createElement("h3", {
          className: "price"
        }, (0, _utilities.getCurrencySymbol)(currencyFilter), displayPrice.toFixed(2), " ", currencyFilter), /*#__PURE__*/_react["default"].createElement("button", {
          onClick: function onClick() {
            return onClickHandler(inventoryItem);
          },
          className: "add-to-cart-button"
        }, "Add to Cart"));
      }
    };
    
    exports.Inventory = Inventory;
    
    },{"../../utilities/utilities.js":9,"../cart/cartSlice.js":3,"./inventorySlice":7,"react":undefined}],7:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.inventoryReducer = exports.loadData = void 0;
    
    var _data = require("../../../data.js");
    
    var loadData = function loadData(data) {
      return {
        type: 'inventory/loadData',
        payload: _data.inventoryData
      };
    };
    
    exports.loadData = loadData;
    var initialInventory = [];
    
    var inventoryReducer = function inventoryReducer() {
      var inventory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInventory;
      var action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'inventory/loadData':
          {
            return action.payload;
          }
    
        default:
          {
            return inventory;
          }
      }
    };
    
    exports.inventoryReducer = inventoryReducer;
    
    },{"../../../data.js":1}],8:[function(require,module,exports){
    "use strict";
    
    var _react = _interopRequireDefault(require("react"));
    
    var _reactDom = _interopRequireDefault(require("react-dom"));
    
    var _App = require("./app/App.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    // Import the store here.
    // Pass state and dispatch props to the <App /> component.
    var render = function render() {
      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App.App, null), document.getElementById('root'));
    };
    
    render(); // Subscribe render to the store.
    
    },{"./app/App.js":2,"react":undefined,"react-dom":undefined}],9:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calculatePrice = calculatePrice;
    exports.calculateTotal = calculateTotal;
    exports.getCurrencySymbol = getCurrencySymbol;
    
    function calculatePrice(price, currency) {
      switch (currency) {
        case 'EUR':
          return price * 0.86;
    
        case 'CAD':
          return price * 1.33;
    
        default:
          return price;
      }
    }
    
    function calculateTotal(cart, currency) {
      var totalUSD = 0;
      Object.keys(cart).forEach(function (itemName) {
        totalUSD += cart[itemName].price * cart[itemName].quantity;
      });
      return calculatePrice(totalUSD, currency).toFixed(2);
    }
    
    function getCurrencySymbol(currencyFilter) {
      switch (currencyFilter) {
        case 'USD':
          return '$';
    
        case 'EUR':
          return '€';
    
        case 'CAD':
          return '$';
    
        default:
          return '';
      }
    }
    
    },{}]},{},[8]);
    