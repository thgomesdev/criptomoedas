/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  // ativa e desativa accordion\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.activeClass);\n      item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n\n    // adiciona eventos ao accordion\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.toggleAccordion(item);\n        });\n      });\n    }\n\n    // inicia função\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        // ativa primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordion;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animate-numbers.js":
/*!***************************************!*\
  !*** ./js/modules/animate-numbers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimateNumbers)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AnimateNumbers = /*#__PURE__*/function () {\n  function AnimateNumbers(numbers, observerTarget, observerClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimateNumbers);\n    this.numbers = document.querySelectorAll(numbers);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    // bind do objeto da classe aos callbacks\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // recebe um elemento com número total incrementa de 0 até este número\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimateNumbers, [{\n    key: \"animateNumbers\",\n    value: function animateNumbers() {\n      var _this = this;\n      this.numbers.forEach(function (number) {\n        return _this.constructor.incrementNumbers(number);\n      });\n    }\n\n    // Pega a mutação e verifica se o elemento já possui a observer class para\n    // desconectar o observador e executar a animação dos números com o incremento\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains(this.observerClass)) {\n        this.observer.disconnect();\n        this.animateNumbers();\n      }\n    }\n\n    // Adiciona o MutationObserver para verificar quando a\n    // observer classs (neste caso = 'ativo') é adicionada ao observer target (elemento alvo)\n  }, {\n    key: \"addMutationObserver\",\n    value: function addMutationObserver() {\n      this.observer = new MutationObserver(this.handleMutation);\n      this.observer.observe(this.observerTarget, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numbers.length && this.observerTarget) {\n        this.addMutationObserver();\n      }\n      return this;\n    }\n  }], [{\n    key: \"incrementNumbers\",\n    value: function incrementNumbers(number) {\n      var total = +number.innerText;\n      var increment = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += increment;\n        number.innerText = start;\n        if (start > total) {\n          number.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    }\n  }]);\n  return AnimateNumbers;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/animate-numbers.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) {\n      clearTimeout(timer);\n    }\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://criptomoedas/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\n\nvar DropdownMenu = /*#__PURE__*/function () {\n  function DropdownMenu(dropdownMenus) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DropdownMenu);\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n    this.activeClass = 'active';\n    this.events = ['touchstart', 'click'];\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  // Ativa o dropdown menu e adiciona a função para observar o click fora do menu\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DropdownMenu, [{\n    key: \"activeDropdownMenu\",\n    value: function activeDropdownMenu(event) {\n      var _this = this;\n      event.preventDefault();\n      event.currentTarget.classList.add(this.activeClass);\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.currentTarget, this.events, function () {\n        event.currentTarget.classList.remove(_this.activeClass);\n      });\n    }\n\n    // Adiciona os eventos de click ou touchstart a cada um dos menus\n  }, {\n    key: \"addDropdownMenusEvent\",\n    value: function addDropdownMenusEvent() {\n      var _this2 = this;\n      this.dropdownMenus.forEach(function (menu) {\n        // Passando dois eventos para cada um dos menus dropdown\n        // que ativam a mesma função\n        _this2.events.forEach(function (event) {\n          menu.addEventListener(event, _this2.activeDropdownMenu);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.dropdownMenus.length) {\n        this.addDropdownMenusEvent();\n      }\n      return this;\n    }\n  }]);\n  return DropdownMenu;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction fetchBitcoin(_x, _x2) {\n  return _fetchBitcoin.apply(this, arguments);\n}\nfunction _fetchBitcoin() {\n  _fetchBitcoin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url, target) {\n    var setBitcoinPrice, bitcoinResponse, bitcoinJSON;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          setBitcoinPrice = function _setBitcoinPrice(price) {\n            var btcPreco = document.querySelector(target);\n            btcPreco.innerText = (100 / price).toFixed(7);\n          };\n          _context.prev = 1;\n          _context.next = 4;\n          return fetch(url);\n        case 4:\n          bitcoinResponse = _context.sent;\n          _context.next = 7;\n          return bitcoinResponse.json();\n        case 7:\n          bitcoinJSON = _context.sent;\n          setBitcoinPrice(bitcoinJSON.BRL.buy);\n          _context.next = 14;\n          break;\n        case 11:\n          _context.prev = 11;\n          _context.t0 = _context[\"catch\"](1);\n          console.log(_context.t0);\n        case 14:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[1, 11]]);\n  }));\n  return _fetchBitcoin.apply(this, arguments);\n}\n\n//# sourceURL=webpack://criptomoedas/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/fetch-criptos.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-criptos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCriptos)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animate_numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate-numbers.js */ \"./js/modules/animate-numbers.js\");\n\n\n\nfunction fetchCriptos(url, target) {\n  // A partir de um dos elementos do json cria uma div\n  // com o nome e total da cripto\n  function createDivCripto(cripto) {\n    var div = document.createElement('div');\n    div.classList.add('numero-criptomoeda');\n    div.innerHTML = \"<h3>\".concat(cripto.nome, \"</h3>\\n                     <span data-number>\").concat(cripto.total, \"</span>\");\n    return div;\n  }\n  function animateCriptosNumbers() {\n    var animateNumbers = new _animate_numbers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-number]', '.numeros', 'ativo');\n    animateNumbers.init();\n  }\n\n  // Definindo elemento alvo que receberá a div da cripto e depois inserindo a div no alvo\n  var elementTarget = document.querySelector(target);\n  function insertCriptoDivInTarget(cripto) {\n    var divCripto = createDivCripto(cripto);\n    elementTarget.appendChild(divCripto);\n  }\n\n  // Puxa as criptos através de um arquivo JSON\n  // e cria cada uma das criptos utilizando o createCripto\n  function createCriptos() {\n    return _createCriptos.apply(this, arguments);\n  }\n  function _createCriptos() {\n    _createCriptos = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var criptosResponse, criptosJSON;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            criptosResponse = _context.sent;\n            _context.next = 6;\n            return criptosResponse.json();\n          case 6:\n            criptosJSON = _context.sent;\n            // Executa a insertCriptoInTarget para todas as criptos que estiverem no JSON.\n            criptosJSON.forEach(function (cripto) {\n              return insertCriptoDivInTarget(cripto);\n            });\n            // Anima os números das criptos\n            animateCriptosNumbers();\n            _context.next = 14;\n            break;\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n    return _createCriptos.apply(this, arguments);\n  }\n  return createCriptos();\n}\n\n//# sourceURL=webpack://criptomoedas/./js/modules/fetch-criptos.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Funcionamento = /*#__PURE__*/function () {\n  function Funcionamento(funcionamento) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Funcionamento);\n    this.funcionamento = document.querySelector(funcionamento);\n    this.activeClass = 'aberto';\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Funcionamento, [{\n    key: \"dadosFuncionamento\",\n    value: function dadosFuncionamento() {\n      this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);\n      this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);\n    }\n  }, {\n    key: \"dadosAgora\",\n    value: function dadosAgora() {\n      this.dataAgora = new Date();\n      this.diaAgora = this.dataAgora.getUTCDay();\n      this.horarioAgora = this.dataAgora.getUTCHours() - 3;\n    }\n  }, {\n    key: \"estaAberto\",\n    value: function estaAberto() {\n      var semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\n      var horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];\n      return semanaAberto && horarioAberto;\n    }\n  }, {\n    key: \"ativaAberto\",\n    value: function ativaAberto() {\n      if (this.estaAberto()) {\n        this.funcionamento.classList.add(this.activeClass);\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.funcionamento) {\n        this.dadosFuncionamento();\n        this.dadosAgora();\n        this.ativaAberto();\n      }\n      return this;\n    }\n  }]);\n  return Funcionamento;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\n\nvar MenuMobile = /*#__PURE__*/function () {\n  function MenuMobile(menuButton, menuList) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MenuMobile);\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.events = ['click', 'touchstart'];\n    this.activeClass = 'active';\n    this.openMenu = this.openMenu.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MenuMobile, [{\n    key: \"openMenu\",\n    value: function openMenu() {\n      var _this = this;\n      this.menuList.classList.add(this.activeClass);\n      this.menuButton.classList.add(this.activeClass);\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.events, function () {\n        _this.menuList.classList.remove(_this.activeClass);\n        _this.menuButton.classList.remove(_this.activeClass);\n      });\n    }\n  }, {\n    key: \"addMenuMobileEvents\",\n    value: function addMenuMobileEvents() {\n      var _this2 = this;\n      this.events.forEach(function (event) {\n        return _this2.menuButton.addEventListener(event, _this2.openMenu);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menuButton && this.menuList) {\n        this.addMenuMobileEvents();\n      }\n      return this;\n    }\n  }]);\n  return MenuMobile;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(buttonOpen, buttonClose, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.buttonOpen = document.querySelector(buttonOpen);\n    this.buttonClose = document.querySelector(buttonClose);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para o this apontar para o objeto da classe\n    this.toggleModal = this.toggleModal.bind(this);\n    this.outModalClick = this.outModalClick.bind(this);\n  }\n\n  // abre ou fecha o modal\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal(event) {\n      event.preventDefault();\n      this.containerModal.classList.toggle('ativo');\n    }\n\n    // fecha o modal ao clicar fora dele\n  }, {\n    key: \"outModalClick\",\n    value: function outModalClick(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal(event);\n      }\n    }\n\n    // adiciona os eventos aos botões e ao modal\n  }, {\n    key: \"addModalEvent\",\n    value: function addModalEvent() {\n      this.buttonOpen.addEventListener('click', this.toggleModal);\n      this.buttonClose.addEventListener('click', this.toggleModal);\n      this.containerModal.addEventListener('click', this.outModalClick);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.containerModal && this.buttonOpen && this.buttonClose) {\n        this.addModalEvent();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      element.removeAttribute(outside, '');\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (event) {\n      setTimeout(function () {\n        return html.addEventListener(event, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://criptomoedas/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animate.js":
/*!**************************************!*\
  !*** ./js/modules/scroll-animate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnimate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\nvar ScrollAnimate = /*#__PURE__*/function () {\n  function ScrollAnimate(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ScrollAnimate);\n    this.sections = document.querySelectorAll(sections);\n    this.windowHalf = window.innerHeight * 0.6;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.checkDistance.bind(this), 50);\n  }\n\n  // Pega a distância de cada section em relação ao topo da página\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ScrollAnimate, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offset = section.offsetTop;\n        return {\n          element: section,\n          offset: offset - _this.windowHalf\n        };\n      });\n    }\n\n    // Verifica a distância de cada section em relação ao scroll do site\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      this.distance.forEach(function (section) {\n        if (window.scrollY > section.offset) {\n          section.element.classList.add('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        window.addEventListener('scroll', this.checkDistance);\n      }\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener('scroll', this.checkDistance);\n    }\n  }]);\n  return ScrollAnimate;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/scroll-animate.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSmooth = /*#__PURE__*/function () {\n  function ScrollSmooth(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSmooth);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSmooth, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSmooth;\n}(); // Forma alternativa (Compatível com SAFARI - IOS)\n// const topo = section.offsetTop;\n// window.scrollTo({\n//   top: topo,\n//   behavior: \"smooth\",\n// });\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n/* eslint max-classes-per-file: [\"error\", 2] */\n\n\nvar Slide = /*#__PURE__*/function () {\n  function Slide(wrapper, slide) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.slide = document.querySelector(slide);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = 'active';\n    this.changeEvent = new Event('changeEvent');\n    this.transition(true);\n    this.onResize();\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Slide, [{\n    key: \"transition\",\n    value: function transition(active) {\n      this.slide.style.transition = active ? 'transform .3s' : '';\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(event) {\n      var pointerPosition = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;\n      var finalPosition = this.updatePosition(pointerPosition);\n      this.moveSlide(finalPosition);\n    }\n  }, {\n    key: \"onStart\",\n    value: function onStart(event) {\n      if (event.type === 'mousedown') {\n        event.preventDefault();\n        this.dist.startX = event.clientX;\n        this.movetype = 'mousemove';\n      }\n      if (event.type === 'touchstart') {\n        this.dist.startX = event.changedTouches[0].clientX;\n        this.movetype = 'touchmove';\n      }\n      this.wrapper.addEventListener(this.movetype, this.onMove);\n      this.transition(false);\n    }\n  }, {\n    key: \"moveSlide\",\n    value: function moveSlide(distX) {\n      this.dist.lastPosition = distX;\n      this.slide.style.transform = \"translate3d(\".concat(distX, \"px, 0px, 0px)\");\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(clientX) {\n      this.dist.movement = (this.dist.startX - clientX) * 1.5;\n      return this.dist.finalPosition - this.dist.movement;\n    }\n  }, {\n    key: \"onEnd\",\n    value: function onEnd() {\n      this.wrapper.removeEventListener(this.movetype, this.onMove);\n      this.dist.finalPosition = this.dist.lastPosition;\n      this.transition(true);\n      this.changeSlideOnEnd();\n    }\n  }, {\n    key: \"changeSlideOnEnd\",\n    value: function changeSlideOnEnd() {\n      if (this.dist.movement > 120 && this.index.next !== undefined) this.activeNextSlide();\n      if (this.dist.movement < -120 && this.index.prev !== undefined) this.activePrevSlide();\n      if (this.index.prev === undefined || this.index.next === undefined) {\n        this.changeSlide(this.index.active);\n      }\n    }\n  }, {\n    key: \"addSlideEvents\",\n    value: function addSlideEvents() {\n      this.wrapper.addEventListener('mousedown', this.onStart);\n      this.wrapper.addEventListener('mouseup', this.onEnd);\n      this.wrapper.addEventListener('touchstart', this.onStart);\n      this.wrapper.addEventListener('touchend', this.onEnd);\n    }\n\n    // Slides config\n  }, {\n    key: \"slidePosition\",\n    value: function slidePosition(slide) {\n      var margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n      return -(slide.offsetLeft - margin);\n    }\n  }, {\n    key: \"slidesConfig\",\n    value: function slidesConfig() {\n      var _this = this;\n      this.slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.slide.children).map(function (element) {\n        var position = _this.slidePosition(element);\n        return {\n          position: position,\n          element: element\n        };\n      });\n    }\n  }, {\n    key: \"slidesIndexNav\",\n    value: function slidesIndexNav(index) {\n      var last = this.slideArray.length - 1;\n      this.index = {\n        prev: index ? index - 1 : undefined,\n        active: index,\n        next: index === last ? undefined : index + 1\n      };\n    }\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(index) {\n      var activeSlide = this.slideArray[index];\n      this.moveSlide(activeSlide.position);\n      this.slidesIndexNav(index);\n      this.dist.finalPosition = activeSlide.position;\n      this.changeActiveClass();\n      this.wrapper.dispatchEvent(this.changeEvent);\n    }\n  }, {\n    key: \"changeActiveClass\",\n    value: function changeActiveClass() {\n      var _this2 = this;\n      this.slideArray.forEach(function (item) {\n        return item.element.classList.remove(_this2.activeClass);\n      });\n      this.slideArray[this.index.active].element.classList.add(this.activeClass);\n    }\n  }, {\n    key: \"activePrevSlide\",\n    value: function activePrevSlide() {\n      if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n    }\n  }, {\n    key: \"activeNextSlide\",\n    value: function activeNextSlide() {\n      if (this.index.next !== undefined) this.changeSlide(this.index.next);\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      var _this3 = this;\n      setTimeout(function () {\n        _this3.slidesConfig();\n        _this3.changeSlide(_this3.index.active);\n      }, 1000);\n    }\n  }, {\n    key: \"addResizeEvent\",\n    value: function addResizeEvent() {\n      window.addEventListener('resize', this.onResize);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.onStart = this.onStart.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onEnd = this.onEnd.bind(this);\n      this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.onResize.bind(this), 200);\n      this.activePrevSlide = this.activePrevSlide.bind(this);\n      this.activeNextSlide = this.activeNextSlide.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.wrapper && this.slide) {\n        this.bindEvents();\n        this.addResizeEvent();\n        this.addSlideEvents();\n        this.slidesConfig();\n        this.changeSlide(0);\n      }\n      return this;\n    }\n  }]);\n  return Slide;\n}();\nvar SlideNav = /*#__PURE__*/function (_Slide) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SlideNav, _Slide);\n  var _super = _createSuper(SlideNav);\n  function SlideNav(slide, wrapper) {\n    var _this4;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, SlideNav);\n    _this4 = _super.call(this, slide, wrapper);\n    _this4.bindControlEvents();\n    return _this4;\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SlideNav, [{\n    key: \"addArrow\",\n    value: function addArrow(prev, next) {\n      this.prevElement = document.querySelector(prev);\n      this.nextElement = document.querySelector(next);\n      this.addArrowEvent();\n    }\n  }, {\n    key: \"addArrowEvent\",\n    value: function addArrowEvent() {\n      this.prevElement.addEventListener('click', this.activePrevSlide);\n      this.nextElement.addEventListener('click', this.activeNextSlide);\n    }\n  }, {\n    key: \"createControl\",\n    value: function createControl() {\n      var control = document.createElement('ul');\n      control.dataset.control = 'slide';\n      this.slideArray.forEach(function (item, index) {\n        control.innerHTML += \"<li><a href='#slide\".concat(index + 1, \"'>\").concat(index + 1, \"</a></li>\");\n      });\n      this.wrapper.appendChild(control);\n      return control;\n    }\n  }, {\n    key: \"eventControl\",\n    value: function eventControl(item, index) {\n      var _this5 = this;\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        _this5.changeSlide(index);\n        _this5.activeControlItem();\n      });\n      this.wrapper.addEventListener('changeEvent', this.activeControlItem);\n    }\n  }, {\n    key: \"activeControlItem\",\n    value: function activeControlItem() {\n      var _this6 = this;\n      this.controlArray.forEach(function (item) {\n        return item.classList.remove(_this6.activeClass);\n      });\n      this.controlArray[this.index.active].classList.add(this.activeClass);\n    }\n  }, {\n    key: \"addControl\",\n    value: function addControl(customControl) {\n      this.control = document.querySelector(customControl) || this.createControl();\n      this.controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.control.children);\n      this.controlArray.forEach(this.eventControl);\n      this.activeControlItem();\n    }\n  }, {\n    key: \"bindControlEvents\",\n    value: function bindControlEvents() {\n      this.eventControl = this.eventControl.bind(this);\n      this.activeControlItem = this.activeControlItem.bind(this);\n    }\n  }]);\n  return SlideNav;\n}(Slide);\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // Ativa a tab de acordo com o index e anima de acordo com a direção indicada no dataset\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      var _this = this;\n      this.tabContent.forEach(function (descricaoCripto) {\n        descricaoCripto.classList.remove(_this.activeClass);\n      });\n      var anime = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(this.activeClass, anime);\n    }\n\n    // Adicionar eventos nas tabs\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener('click', function () {\n          return _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        // ativar primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nvar ToolTip = /*#__PURE__*/function () {\n  function ToolTip(tooltips) {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ToolTip);\n    // cria a tooltipbox e insere ela em uma propriedade do objeto da classe\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"createTooltipBox\", function (element) {\n      var tooltipBox = document.createElement('div');\n      var text = element.getAttribute('aria-label');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      _this.tooltipBox = tooltipBox;\n    });\n    this.tooltips = document.querySelectorAll(tooltips);\n\n    // bind do objeto da classe aos callbacks\n    this.onMouseOver = this.onMouseOver.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n  }\n\n  // cria um espaço entre o cursor e a tooltip evitando bugs\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ToolTip, [{\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.tooltipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n      if (event.pageX + 230 > window.innerWidth) {\n        this.tooltipBox.style.left = \"\".concat(event.pageX - 180, \"px\");\n      }\n      if (event.pageX + 230 < window.innerWidth) {\n        this.tooltipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n      }\n    }\n\n    // remove a tooltipbox no momento que o cursor sai do elemento alvo\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.tooltipBox.remove();\n      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.removeEventListener('mousemove', this.onMouseMove);\n    }\n  }, {\n    key: \"onMouseOver\",\n    value:\n    // currentTarget = elevemento alvo do tooltip (desestruturação do event)\n    function onMouseOver(_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      // cria a tooltibox com o texto do elemento alvo da tooltip e coloca em uma prop\n      this.createTooltipBox(currentTarget);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n      currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n    }\n\n    // adiciona o evento de mouse over a cada tooltip\n  }, {\n    key: \"addToolTipsEvent\",\n    value: function addToolTipsEvent() {\n      var _this2 = this;\n      this.tooltips.forEach(function (item) {\n        item.addEventListener('mouseover', _this2.onMouseOver);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tooltips.length) {\n        this.addToolTipsEvent();\n      }\n      return this;\n    }\n  }]);\n  return ToolTip;\n}();\n\n\n//# sourceURL=webpack://criptomoedas/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_fetch_criptos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/fetch-criptos.js */ \"./js/modules/fetch-criptos.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-animate.js */ \"./js/modules/scroll-animate.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSmooth = new _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"smooth\"] a[href^=\"#\"]');\nscrollSmooth.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-animation=\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-modal='abrir']\", \"[data-modal='fechar']\", '.modal-container');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\ntooltip.init();\n(0,_modules_fetch_criptos_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('./criptos-api.json', '.numeros-grid');\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\nvar scrollAnimate = new _modules_scroll_animate_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-animation='scroll']\");\nscrollAnimate.init();\nvar dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-dropdown]');\ndropdownMenu.init();\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nvar funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-semana]');\nfuncionamento.init();\nvar slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('.slide-wrapper', '.slide');\nslide.init();\nslide.addControl('.custom-controls');\n\n//# sourceURL=webpack://criptomoedas/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return doneResult();\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    return {\n      next: doneResult\n    };\n  }\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(obj, key, value) {\n  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://criptomoedas/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;