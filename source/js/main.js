// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { onButtonBurgerOpenMenu } from './on-button-burger-open-menu';
import { headerButtonContainer } from './variables';

headerButtonContainer.addEventListener('click', onButtonBurgerOpenMenu);
