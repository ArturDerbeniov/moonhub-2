"use strict";function eventDomLoaded(){}function eventWindowLoad(){var e=document.querySelector(".headerMain"),a=e.querySelector(".burger"),i=window.innerHeight;ScrollTrigger.create({trigger:document.body,start:"top center",onUpdate:function(t){-1==t.direction?(e.classList.add("show"),e.classList.remove("hide"),window.scrollY<=0&&e.classList.remove("show")):(0<window.scrollY&&e.classList.add("show"),window.scrollY>i/2&&(e.classList.remove("show"),e.classList.add("hide"),a.classList.remove("active")))}}),vld.onload(),customSrcoll.init()}function eventDocClick(a){var i=a.target;for(a.target;i&&i!=this&&"break"!==function(){var t,e;return"body"==i.tagName.toLowerCase()&&tooltip.close(!0),i.classList.contains("burger")?(i.classList.toggle("active"),"break"):i.hasAttribute("data-tooltip")?(tooltip.init(i),"break"):i.classList.contains("btn-showTags")?(i.classList.toggle("active"),tagsHeader.init(i),"break"):i.classList.contains("cardsArray")?(i.classList.contains("cardsArray-arrayRight")?customSrcoll.rightArrowClicked(i):i.classList.contains("cardsArray-arrayLeft")&&customSrcoll.leftArrowClicked(i),"break"):i.dataset.filter?(a.preventDefault(),i.parentNode.querySelector(".active").classList.remove("active"),i.classList.add("active"),(t=document.querySelector(i.dataset.filterList))&&(e=i.dataset.filter,t.querySelectorAll(".card").forEach(function(t){t.dataset.filterParam==e?t.classList.remove("hidden"):t.classList.add("hidden")}),SimpleBar.instances.get(document.querySelector(".cardsWrapper-inner.cardsWrapper-filterList")).recalculate(),setTimeout(function(){customSrcoll.init(document.querySelector(i.dataset.filterList))},500)),"break"):void(i=i.parentNode)}(););}document.addEventListener("DOMContentLoaded",eventDomLoaded),document.addEventListener("click",eventDocClick,!1),window.addEventListener("load",eventWindowLoad,!1);var loadJS=function(t,e,a){var i=document.createElement("script");i.src=t,i.onload=e,i.onreadystatechange=e,a.appendChild(i)},tooltip={init:function(t){var e;(e=document.body.querySelector("[data-tooltip].clicked"))&&e.classList.remove("clicked"),t.classList.add("clicked"),this.close(),t.classList.toggle("active"),t.classList.contains("active")?document.body.setAttribute("data-tooltipactive","true"):document.body.removeAttribute("data-tooltipactive")},close:function(){var t,e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];(t=document.body.hasAttribute("data-tooltipactive"))&&((t=document.body).removeAttribute("data-tooltipactive"),(e=e?t.querySelectorAll("[data-tooltip].active"):t.querySelectorAll("[data-tooltip].active:not(.clicked)")).length)&&e.forEach(function(t){t.classList.remove("active")})}},vld={init:function(t){document.addEventListener("input",function(t){t.target.classList.contains("vld-field")&&(t.target.classList.add("vld-field-activated"),vld.checkForm(t.target.closest(".vld-form"),t.target))},!1),document.addEventListener("change",function(t){t.target.classList.contains("vld-select")?(t.target.classList.add("vld-field-activated"),vld.checkForm(t.target.closest(".vld-form"),t.target)):vld.checkForm(t.target.closest(".vld-form"))},!1)},onload:function(){var t=document.getElementsByClassName("vld-form");if(t.length)for(var e=0,a=t.length;e<a;e++)t[e].getAttribute("data-validate-onload")&&"false"==t[e].getAttribute("data-validate-onload")||!function(t){setTimeout(function(){window.vld.checkForm(t)},600)}(t[e])},checkForm:function(t,e){if(t){t="string"==typeof t&&document.querySelector(t)?document.querySelector(t):t;var a=t.getElementsByClassName("vld-field");if(a.length)for(var i=0,r=a.length;i<r;i++)this.checkField(a[i]),i==r-1&&setTimeout(function(){vld.isValidForm(t)},100)}},checkField:function(t){var e,a,i=!1;if(!(t.parentNode.clientHeight<=0))return"hidden"==t.type||"input"!=t.tagName.toLowerCase()&&"textarea"!=t.tagName.toLowerCase()?"select"==t.tagName.toLowerCase()&&t.getAttribute("data-required")&&"true"==t.getAttribute("data-required")&&(i=t.options[t.selectedIndex]&&t.options[t.selectedIndex].getAttribute("value")&&"0"!==t.options[t.selectedIndex].getAttribute("value")?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)):t.getAttribute("data-required")&&"true"==t.getAttribute("data-required")&&(t.value||(t.value=""),e=t.value,i=t.getAttribute("pattern")?(a=new RegExp(t.getAttribute("pattern")),t.getAttribute("data-uppercase")&&"true"==t.getAttribute("data-uppercase")&&(e=e.toUpperCase()),a.test(e)?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)):"checkbox"==t.type?t.checked?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1):e?(this.statusField(t,"valid"),!0):(this.statusField(t,"invalid"),!1)),i;t.classList.remove("vld-field-invalid")},isValidForm:function(t){var e=!0,a=t.querySelector(t.getAttribute("data-btnLinked"));if(a){for(var i=t.querySelectorAll(".vld-field[data-required='true']"),r=0,s=0,l=0,o=i.length;l<o;l++)i[l].closest(".targetChecked")&&i[l].closest(".targetChecked").clientHeight<24||"disabled"==i[l].getAttribute("disabled")?s++:(!i[l].closest(".targetChecked")||i[l].closest(".targetChecked")&&24<=i[l].closest(".targetChecked").clientHeight)&&(r++,i[l].classList.contains("vld-field-invalid"))&&(e=!1,a.classList.add("disabled")),s+r==o&&e&&a.classList.remove("disabled");return e}},statusField:function(t,e){"valid"==e?(t.classList.add("vld-field-valid"),t.classList.remove("vld-field-invalid")):(t.classList.remove("vld-field-valid"),t.classList.add("vld-field-invalid"))}},customSrcoll=(vld.init(),{wrapperCls:".simplebar-content-wrapper",isAllowed:!0,init:function(t){var e,a=this;t?(e=t.querySelector(this.wrapperCls))&&(this.prepareOnLoad(e),e.addEventListener("scroll",function(t){window.customSrcoll.scrolling(t,e)},{passive:!0})):(t=document.querySelectorAll("[data-simplebar]")).length&&t.forEach(function(t){var e;(e=t.querySelector(a.wrapperCls))&&(a.prepareOnLoad(e),e.addEventListener("scroll",function(t){window.customSrcoll.scrolling(t,e)},{passive:!0}))})},prepareOnLoad:function(t){t.clientWidth<t.scrollWidth?t.parentNode.querySelector(".cardsArray")||(t.closest(".cardsWrapper-inner").classList.add("inited"),t.parentNode.insertAdjacentHTML("afterbegin","<div class='cardsArray cardsArray-arrayLeft inactive'></div><div class='cardsArray cardsArray-arrayRight'></div>")):t.parentNode.querySelector(".cardsArray")&&t.parentNode.querySelectorAll(".cardsArray").forEach(function(t){t.parentNode.removeChild(t)})},scrolling:function(t,e){e.clientWidth,e.scrollWidth,e.scrollLeft;this.checkArrows(e)},leftArrowClicked:function(t){var e;this.isAllowed&&(this.isAllowed=!1,t=t.parentNode.querySelector(this.wrapperCls),e=this.calcSizeShift(),t.scrollBy({top:0,left:-1*e,behavior:"smooth"}),this.checkArrows(t,"leftArrow"),setTimeout(function(){window.customSrcoll.isAllowed=!0},250))},rightArrowClicked:function(t){var e;this.isAllowed&&(this.isAllowed=!1,t=t.parentNode.querySelector(this.wrapperCls),e=this.calcSizeShift(),t.scrollBy({top:0,left:e,behavior:"smooth"}),this.checkArrows(t,"rightArrow"),setTimeout(function(){window.customSrcoll.isAllowed=!0},250))},checkArrows:function(t,e){var a,i,r=t.clientWidth,s=t.scrollWidth,l=t.scrollLeft;e?"leftArrow"==e?(a=t.parentNode.querySelector(".cardsArray-arrayLeft"),l<=3?a.classList.add("inactive"):a.classList.remove("inactive")):"rightArrow"==e&&(i=t.parentNode.querySelector(".cardsArray-arrayRight"),s-r<=l+3?i.classList.add("inactive"):i.classList.remove("inactive")):(a=t.parentNode.querySelector(".cardsArray-arrayLeft"),i=t.parentNode.querySelector(".cardsArray-arrayRight"),a&&i&&(l<=3?a.classList.add("inactive"):a.classList.remove("inactive"),s-r<=l+3?i.classList.add("inactive"):i.classList.remove("inactive")))},calcSizeShift:function(){return 522}});