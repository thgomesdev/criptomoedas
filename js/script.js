import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchCriptos from './modules/fetch-criptos.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnimate from './modules/scroll-animate.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import SlideNav from './modules/slide.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('[data-animation="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", '.modal-container');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

fetchCriptos('./criptos-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const scrollAnimate = new ScrollAnimate("[data-animation='scroll']");
scrollAnimate.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

const slide = new SlideNav('.slide-wrapper', '.slide');
slide.init();
slide.addControl('.custom-controls');
