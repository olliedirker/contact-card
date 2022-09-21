//import modules
import "./form";
import "./submit";

import {Tooltip, Toast, Popover} from 'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';

//import css files
import '../css/index.css';

//import media
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

import {initdb} from './database';

//adds images on load
window.addEventListener("load", function () {
  initdb();
  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});
