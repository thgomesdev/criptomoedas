import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';

import initScrollAnimation from './modules/scroll-animation.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchCriptos from './modules/fetch-criptos.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('[data-animation="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", '.modal-container');
modal.init();

initScrollAnimation();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchCriptos();
initFetchBitcoin();
initFuncionamento();
