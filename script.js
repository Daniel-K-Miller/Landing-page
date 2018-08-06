let mobileDevice = false;

if (window.screen.width <= 600) {
  mobileDevice = true;
} else {
  mobileDevice = false;
};

/* Landing Page text fade in */

let findLandingContainerLi = document.querySelectorAll(".landing-container li");
for (let i = 0; i < findLandingContainerLi.length; i++) {
  (function (i) {
    setTimeout(function () {
      findLandingContainerLi[i].style.opacity = "1";
    }, 1000*i);
  })(i);
};
let findArrowContainer = document.querySelector("#arrow-container");
let findArrowHover = document.querySelector("#arrow-container-hover");
setTimeout(function(){
  findArrowContainer.style.opacity = "1";
}, 3175);
setTimeout(function(){
  findArrowContainer.style.transform = "translate(0, 5px)";
}, 3475);
setTimeout(function(){
  findArrowContainer.style.transform = "translate(0, 0)";
}, 3975);
setTimeout(function(){
  findArrowContainer.style.transform = "";
}, 3976);
/* scroll down introduction (arrow button press on landing page) */
// works out centre point through variables of container

document.getElementById("arrow-container").onclick = scrollDown = () => {
let colorWrapper = document.querySelector('.color-wrap-default');
let colorWrapperBounding = colorWrapper.getBoundingClientRect();
let colorWrapperCenter = ((colorWrapperBounding.height - window.scrollY) + 1);
let colorWrapperCenterMobile = ((colorWrapperBounding.height - window.scrollY) + (window.screen.height / 100 * .5) - 90);
  if (mobileDevice === false) {
  window.scrollBy({top: colorWrapperCenter, left: 0, behavior: 'smooth'});
  } else {
  window.scrollBy({top: colorWrapperCenterMobile, left: 0, behavior: 'smooth'});
  }

};
// navbar intro link click to intro page
document.getElementById("intro-link").onclick = scrollDown = () => {
let colorWrapper = document.querySelector('.color-wrap-default');
let colorWrapperBounding = colorWrapper.getBoundingClientRect();
let colorWrapperCenter = ((colorWrapperBounding.height) - window.scrollY) + 1;
let colorWrapperCenterMobile = ((colorWrapperBounding.height - window.scrollY) + (window.screen.height / 100 * .5) - 90);
  if (mobileDevice === false) {
  window.scrollBy({top: colorWrapperCenter, left: 0, behavior: 'smooth'});
  } else {
    window.scrollBy({top: colorWrapperCenterMobile, left: 0, behavior: 'smooth'});
  }
};

/* scroll back up to landing page on main-navbar logo click */

document.querySelector(".main-nav img").onclick = scrollUp = () => {
document.querySelector('.landing-container').scrollIntoView({behavior: 'smooth'});
};

// checking if landing page is in viewport

let isInViewport = function (elem) {
    let bounding = document.querySelector(".landing-container").getBoundingClientRect();
    if (mobileDevice === true) {
      return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= window.screen.height
    )
  } else {
      return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0
    )
  }
};

//navbar appearing/disappearing based off of if landingpage is out of viewport

let landingPage = document.querySelector(".landing-container");
let mainNav = document.querySelector(".main-nav");
let mainNavText = document.querySelector(".main-nav ul")
window.addEventListener('scroll', function (event) {
  if (isInViewport(landingPage)) {
    mainNav.style.height = "0px";
    mainNav.style.transitionDelay = ".2s"
    mainNavText.style.opacity = "0";
    mainNavText.style.transitionDelay = "0";
    mainNavText.style.transition = "all .3s ease-in-out";
  } else if (!isInViewport(landingPage)) {
    mainNav.style.transitionDelay = ".0s"
    mainNav.style.height = "10vh";
    mainNavText.style.opacity = "1";
  }
});

// checking if headshot is in viewport to set up social media

let isInViewport2 = function (elem) {
    let bounding = document.querySelector("#headshot").getBoundingClientRect();
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.left >= 0 &&
        bounding.bottom >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//social media appearing/disappearing based off of if headshot is in viewport


let HeadShot = document.querySelector("#headshot");
let HeadShotImg = document.querySelector("#headshot img");
let Github = document.querySelector("#GitHub");
let LinkedIn = document.querySelector("#linkedIn");
let Twitter = document.querySelector("#Twitter");
window.addEventListener('scroll', function (event) {
  // checking if mobile media query is not met
  if (isInViewport2(HeadShot) && mobileDevice === false) {
    GitHub.style.transform = "translate(-90px, 0)";
    Twitter.style.transform = "translate(80px, -62.5px)";
    LinkedIn.style.transform = "translate(75px, 35px)";
  // checking if mobile media query is met
  } else if (isInViewport2(HeadShot) && mobileDevice === true) {
    GitHub.style.transform = "translate(-175px, 0)";
    Twitter.style.transform = "translate(130px, -110px)";
    LinkedIn.style.transform = "translate(125px, 55px)";
  }  else if (!isInViewport2(HeadShot)) {
    GitHub.style.transform = "translate(0, 0)";
    Twitter.style.transform = "translate(0, 0)";
    LinkedIn.style.transform = "translate(0, 0)";
  }
});

document.getElementById("arrow-container2").onclick = scrollDown2 = () => {
let dropdownWrapper = document.querySelector('.color-wrap-dropdown');
let dropdownWrapperBounding = dropdownWrapper.getBoundingClientRect();
let dropdownWrapperCenter = ((dropdownWrapperBounding.height * 2 - window.scrollY) - 79);

window.scrollBy({top: dropdownWrapperCenter, left: 0, behavior: 'smooth'});

};
// navbar skills link click to skills page
document.getElementById("skills-link").onclick = scrollDown2 = () => {
let dropdownWrapper = document.querySelector('.color-wrap-dropdown');
let dropdownWrapperBounding = dropdownWrapper.getBoundingClientRect();
let dropdownWrapperCenter = ((dropdownWrapperBounding.height * 2 - window.scrollY) - 79);
let dropdownWrapperCenterMobile = ((dropdownWrapperBounding.height * 2.75 - window.scrollY) + (window.screen.height / 100 * .5) - 90);
  if (mobileDevice === false) {
  window.scrollBy({top: dropdownWrapperCenter, left: 0, behavior: 'smooth'});
  } else {
  window.scrollBy({top: dropdownWrapperCenterMobile, left: 0, behavior: 'smooth'});
  }
};

// getting drop down co-orderinates

let isInViewport3 = function (elem) {
    let bounding = document.querySelector(".dropdown-main-container").getBoundingClientRect();
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.left >= 0 &&
        bounding.bottom >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let htmlAutoToggle = false;

window.addEventListener('scroll', function (event) {
  let findHtmlArrow = document.querySelector("#htmlArrow");
  let findHtmlArrowContainer = document.querySelector("#htmlButtonContainer");
  let findHtmlButton = document.querySelector("#htmlButton");
  if (isInViewport3(findDropDownContent) && htmlAutoToggle === false) {
    //content fade in effects
    findDropDownContent.style.opacity = "1";
    findDropDownContent.style.transition =  "all .4s ease-in-out";
    findDropDownContent.style.transitionDelay = ".25s";
    //button effects
    findHtmlArrow.style.transform = "rotate(90deg)";
    findHtmlArrow.style.borderLeft = "20px solid #d7cdcc";
    findHtmlArrowContainer.style.border = "2px solid #D7CDCC";
    findHtmlArrowContainer.style.cursor = "default";
    findHtmlButton.style.color = "#D7CDCC";
    //content changes
    findDropDownTitle.innerHTML = "HTML5";
    findDropDownText.innerHTML = `Proficient in writing clean HTML. Familiar
    with key concepts within HTML such as: divs, spans, navs, forms. And when to
    use appropriately.`
    findDropDownImage.src = "Images/Dropdown/HTML.png";
    htmlStatus = true;
    htmlAutoToggle = true;
  }
});

/* language bar buttons */

// content of skils bar
let findAdditionalContainer = document.querySelector(".additional-skills");
let findLanguageContainer = document.querySelector(".languages-I-Know");
let findStuffContainer = document.querySelector(".Stuff-I-Learning");

// 'Additional Skills' title
let langTitle1Status = false;
document.getElementById('lang-1').onclick = languageToggle1 = () => {
  if (langTitle1Status === false) {
  let langTitle1 = document.querySelector("#lang-1");
  langTitle1.style.fontSize = "1.5em";
  langTitle1.style.color = "white";
  langTitle1.style.borderTop = "2px solid white";
  langTitle1.style.borderBottom = "2px solid white";
  langTitle1.style.cursor = "default";
  langTitle1Status = true;
  // slider effect when changing to 1st Additional Skills title from 2nd title
  if (langTitle2Status === true && langTitle3Status === false) {
  findAdditionalContainer.style.opacity = "1";
  findAdditionalContainer.style.transform = "translate(100vw, 0)";
  findLanguageContainer.style.opacity = "0";
  findLanguageContainer.style.transform = "translate(100vw, 0)";
  findStuffContainer.style.opacity = "0";
  findStuffContainer.style.transform = "translate(100vw, 0)";
  // slider effect when changing to 1st Additional Skills title from 3rd title
  } else if (langTitle2Status === false && langTitle3Status === true) {
  findAdditionalContainer.style.opacity = "1";
  findAdditionalContainer.style.transform = "translate(100vw, 0)";
  findLanguageContainer.style.opacity = "0";
  findLanguageContainer.style.transform = "translate(100vw, 0)";
  findStuffContainer.style.opacity = "0";
  findStuffContainer.style.transform = "translate(100vw, 0)";
  }

  }
  if (langTitle2Status === true) {
  closeLanguageToggle2();
  langTitle2Status = false;
  }
  if (langTitle3Status === true) {
  closeLanguageToggle3();
  langTitle3Status = false;
  }
};
let closeLanguageToggle1 = () => {
  let langTitle1 = document.querySelector("#lang-1");
  langTitle1.style.fontSize = "1em";
  langTitle1.style.color = "#59656f";
  langTitle1.style.borderTop = "2px solid #59656f";
  langTitle1.style.borderBottom = "2px solid #59656f";
  langTitle1.style.cursor = "pointer";
};

// 'Languages I know' title
let langTitle2Status = true;
document.getElementById('lang-2').onclick = languageToggle2 = () => {
  let langTitle2 = document.querySelector("#lang-2");
  langTitle2.style.fontSize = "1.5em";
  langTitle2.style.color = "white";
  langTitle2.style.borderTop = "2px solid white";
  langTitle2.style.borderBottom = "2px solid white";
  langTitle2.style.cursor = "default";
  langTitle2Status = true;
  // slider effect when changing to 2nd language title from 1st title
  if (langTitle1Status === true && langTitle3Status === false) {
  findAdditionalContainer.style.opacity = "0";
  findAdditionalContainer.style.transform = "translate(0, 0)";
  findLanguageContainer.style.opacity = "1";
  findLanguageContainer.style.transform = "translate(0, 0)";
  findStuffContainer.style.opacity = "0";
  findStuffContainer.style.transform = "translate(0, 0)";
  // slider effect when changing to 2nd language title from 3rd title
} else if (langTitle1Status === false && langTitle3Status === true) {
  findAdditionalContainer.style.opacity = "0";
  findAdditionalContainer.style.transform = "translate(0, 0)";
  findLanguageContainer.style.opacity = "1";
  findLanguageContainer.style.transform = "translate(0, 0)";
  findStuffContainer.style.opacity = "0";
  findStuffContainer.style.transform = "translate(0, 0)";
  }
  if (langTitle1Status === true) {
  closeLanguageToggle1();
  langTitle1Status = false;
  }
  if (langTitle3Status === true) {
  closeLanguageToggle3();
  langTitle3Status = false;
  }
};
let closeLanguageToggle2 = () => {
  let langTitle2 = document.querySelector("#lang-2");
  langTitle2.style.fontSize = "1em";
  langTitle2.style.color = "#59656f";
  langTitle2.style.borderTop = "2px solid #59656f";
  langTitle2.style.borderBottom = "2px solid #59656f";
  langTitle2.style.cursor = "pointer";
  //
};


// 'Stuff I'm Learning' title
let langTitle3Status = false;
document.getElementById('lang-3').onclick = languageToggle3 = () => {
  let langTitle3 = document.querySelector("#lang-3");
  langTitle3.style.fontSize = "1.5em";
  langTitle3.style.color = "white";
  langTitle3.style.borderTop = "2px solid white";
  langTitle3.style.borderBottom = "2px solid white";
  langTitle3.style.cursor = "default";
  langTitle3Status = true;
  // slider effect when changing to 3rd Stuff I'm learning title from 2nd title
  if (langTitle2Status === true && langTitle1Status === false) {
  findAdditionalContainer.style.opacity = "0";
  findAdditionalContainer.style.transform = "translate(-100vw, 0)";
  findLanguageContainer.style.opacity = "0";
  findLanguageContainer.style.transform = "translate(-100vw, 0)";
  findStuffContainer.style.opacity = "1";
  findStuffContainer.style.transform = "translate(-100vw, 0)";
  // slider effect when changing to 3rd Stuff I'm learning title from 1st title
  } else if (langTitle2Status === false && langTitle1Status === true) {
  findAdditionalContainer.style.opacity = "0";
  findAdditionalContainer.style.transform = "translate(-100vw, 0)";
  findLanguageContainer.style.opacity = "0";
  findLanguageContainer.style.transform = "translate(-100vw, 0)";
  findStuffContainer.style.opacity = "1";
  findStuffContainer.style.transform = "translate(-100vw, 0)";
  }
  if (langTitle1Status === true) {
  closeLanguageToggle1();
  langTitle1Status = false;
  }
  if (langTitle2Status === true) {
  closeLanguageToggle2();
  langTitle2Status = false;
  }
};
let closeLanguageToggle3 = () => {
  let langTitle3 = document.querySelector("#lang-3");
  langTitle3.style.fontSize = "1em";
  langTitle3.style.color = "#59656f";
  langTitle3.style.borderTop = "2px solid #59656f";
  langTitle3.style.borderBottom = "2px solid #59656f";
  langTitle3.style.cursor = "pointer";
};

/* Drop Downs within Languages I know section */
// HTML button section
let htmlStatus = false;

let findDropDownContent = document.querySelector(".dropdown-main-container");
let findDropDownTitle = document.querySelector(".dropdown-left-container h1");
let findDropDownText = document.querySelector(".dropdown-left-container p");
let findDropDownImage = document.querySelector(".dropdown-main-container img");

document.getElementById('htmlButtonContainer').onclick = toggleHTML = () => {
  let findHtmlArrow = document.querySelector("#htmlArrow");
  let findHtmlArrowContainer = document.querySelector("#htmlButtonContainer");
  let findHtmlButton = document.querySelector("#htmlButton");

   if (htmlStatus === false && cssStatus === true || javaScriptStatus == true) {
    //content fade in effects
    findDropDownContent.style.transition =  "all .3s ease-in-out";
    findDropDownContent.style.transitionDelay = ".15s";
    //button effects
    findHtmlArrow.style.transform = "rotate(90deg)";
    findHtmlArrow.style.borderLeft = "20px solid #d7cdcc";
    findHtmlArrowContainer.style.border = "2px solid #D7CDCC";
    findHtmlArrowContainer.style.cursor = "default";
    findHtmlButton.style.color = "#D7CDCC";
    //timed content changes
    setTimeout(function(){
    findDropDownContent.style.opacity = "1";
    findDropDownTitle.innerHTML = "HTML5";
    findDropDownText.innerHTML = `Proficient in writing clean HTML. Familiar
    with key concepts within HTML such as: divs, spans, navs, forms. And when to
    use appropriately.`
    findDropDownImage.src = "Images/Dropdown/HTML.png";
  }, 700);
    htmlStatus = true;
  } else if (htmlStatus === false) {
    //content fade in effects
    findDropDownContent.style.opacity = "1";
    findDropDownContent.style.transition =  "all .4s ease-in-out";
    findDropDownContent.style.transitionDelay = ".25s";
    //button effects
    findHtmlArrow.style.transform = "rotate(90deg)";
    findHtmlArrow.style.borderLeft = "20px solid #d7cdcc";
    findHtmlArrowContainer.style.border = "2px solid #D7CDCC";
    findHtmlArrowContainer.style.cursor = "default";
    findHtmlButton.style.color = "#D7CDCC";
    //content changes
    findDropDownTitle.innerHTML = "HTML5";
    findDropDownText.innerHTML = `Proficient in writing clean HTML. Familiar
    with key concepts within HTML such as: divs, spans, navs, forms. And when to
    use appropriately.`
    findDropDownImage.src = "Images/Dropdown/HTML.png";
    htmlStatus = true;
  }
  if (cssStatus === true) {
    closeCSS();
    cssStatus = false;
  }
  if (javaScriptStatus === true) {
    closeJavaScript();
    javaScriptStatus = false;
  }
}

let closeHTML = () => {
  let findHtmlArrowContainer = document.querySelector("#htmlButtonContainer");
  let findHtmlArrow = document.querySelector("#htmlArrow");
  let findHtmlButton = document.querySelector("#htmlButton");
  //content fade out effects
  findDropDownContent.style.opacity = "0";
  //button effects
  findHtmlArrowContainer.style.border = "2px solid #59656f";
  findHtmlArrowContainer.style.cursor = "pointer";
  findHtmlArrow.style.transform = "rotate(0deg)";
  findHtmlArrow.style.borderLeft = "20px solid #59656f";
  findHtmlButton.style.color = "#59656f";
}

// CSS button dropdown menu

let cssStatus = false;

document.getElementById('cssButtonContainer').onclick =  toggleCSS = () => {
  let findCssArrow = document.querySelector("#cssArrow");
  let findCssArrowContainer = document.querySelector("#cssButtonContainer");
  let findCssButton = document.querySelector("#cssButton");

  if (cssStatus === false && htmlStatus === true || javaScriptStatus == true) {
   //content fade in effects
   findDropDownContent.style.transition =  "all .3s ease-in-out";
   findDropDownContent.style.transitionDelay = ".15s";
   //button effects
   findCssArrow.style.transform = "rotate(90deg)";
   findCssArrow.style.borderLeft = "20px solid #d7cdcc";
   findCssArrowContainer.style.border = "2px solid #D7CDCC";
   findCssArrowContainer.style.cursor = "default";
   findCssButton.style.color = "#D7CDCC";
   //timed content changes
   setTimeout(function(){
   findDropDownContent.style.opacity = "1";
   findDropDownTitle.innerHTML = "CSS3";
   findDropDownText.innerHTML = `Confident in producing appealing CSS layouts.
   Familiar with key concepts such as: psuedo selectors, wrappers, flexbox,
   responsive design. And am able to execute these concepts.`
   findDropDownImage.src = "Images/Dropdown/CSS.png";
   }, 600);
   cssStatus = true;
  } else if (cssStatus === false) {
    //content fade in effects
    findDropDownContent.style.opacity = "1";
    findDropDownContent.style.transition =  "all .4s ease-in-out";
    findDropDownContent.style.transitionDelay = ".25s";
    //button effects
    findCssArrow.style.transform = "rotate(90deg)";
    findCssArrow.style.borderLeft = "20px solid #d7cdcc";
    findCssArrowContainer.style.border = "2px solid #D7CDCC";
    findCssArrowContainer.style.cursor = "default";
    findCssButton.style.color = "#D7CDCC";
    //content changes
    findDropDownTitle.innerHTML = "CSS3";
    findDropDownText.innerHTML = `Confident in producing appealing CSS layouts.
    Familiar with key concepts such as: psuedo selectors, wrappers, flexbox,
    responsive design. And am able to execute these concepts.`
    findDropDownImage.src = "Images/Dropdown/CSS.png";
    cssStatus = true;
  } if (htmlStatus === true) {
    closeHTML();
    htmlStatus = false;
  } if (javaScriptStatus === true) {
    closeJavaScript();
    javaScriptStatus = false;
  }
};

let = closeCSS = () => {
  let findCssArrow = document.querySelector("#cssArrow");
  let findCssArrowContainer = document.querySelector("#cssButtonContainer");
  let findCssButton = document.querySelector("#cssButton");
  //content fade out effects
  findDropDownContent.style.opacity = "0";
  //button effects
  findCssArrowContainer.style.border = "2px solid #59656f";
  findCssArrowContainer.style.cursor = "pointer";
  findCssArrow.style.transform = "rotate(0deg)";
  findCssArrow.style.borderLeft = "20px solid #59656f";
  findCssButton.style.color = "#59656f";
}

// JavaScript button dropdown menu

let javaScriptStatus = false;

document.getElementById('javaScriptButtonContainer').onclick =  toggleJavaScript = () => {
  let findJavaScriptArrow = document.querySelector("#javaScriptArrow");
  let findJavaScriptArrowContainer = document.querySelector("#javaScriptButtonContainer");
  let findJavaScriptButton = document.querySelector("#javaScriptButton");

  if (javaScriptStatus === false && htmlStatus === true || cssStatus == true) {
    //content fade in effects
    findDropDownContent.style.transition =  "all .3s ease-in-out";
    findDropDownContent.style.transitionDelay = ".15s";
    //button effects
    findJavaScriptArrow.style.transform = "rotate(90deg)";
    findJavaScriptArrow.style.borderLeft = "20px solid #d7cdcc";
    findJavaScriptArrowContainer.style.border = "2px solid #D7CDCC";
    findJavaScriptArrowContainer.style.cursor = "default";
    findJavaScriptButton.style.color = "#D7CDCC";
    //timed content changes
    setTimeout(function(){
    findDropDownContent.style.opacity = "1";
    findDropDownTitle.innerHTML = "JavaScript/ES6";
    findDropDownText.innerHTML = `Able to implement interactivity through
    JavaScript. Familiar with key concepts such as: functions, loops, arrays,
    events. And to code something in multiple ways.`
    findDropDownImage.src = "Images/Dropdown/JavaScript.png";
    }, 600);
   javaScriptStatus = true;
  } else if (javaScriptStatus === false) {
    //content fade in effects
    findDropDownContent.style.opacity = "1";
    findDropDownContent.style.transition =  "all .4s ease-in-out";
    findDropDownContent.style.transitionDelay = ".25s";
    //button effects
    findJavaScriptArrow.style.transform = "rotate(90deg)";
    findJavaScriptArrow.style.borderLeft = "20px solid #d7cdcc";
    findJavaScriptArrowContainer.style.border = "2px solid #D7CDCC";
    findJavaScriptArrowContainer.style.cursor = "default";
    findJavaScriptButton.style.color = "#D7CDCC";
    //content changes
    findDropDownTitle.innerHTML = "JavaScript/ES6";
    findDropDownText.innerHTML = `Able to implement interactivity through
    JavaScript. Familiar with key concepts such as: functions, loops, arrays,
    events. And to code something in multiple ways.`
    findDropDownImage.src = "Images/Dropdown/JavaScript.png";
    javaScriptStatus = true;
  } if (htmlStatus === true) {
    closeHTML();
    htmlStatus = false;
  } if (cssStatus === true) {
    closeCSS();
    cssStatus = false;
  }
}
let closeJavaScript = () => {
  let findJavaScriptArrow = document.querySelector("#javaScriptArrow");
  let findJavaScriptArrowContainer = document.querySelector("#javaScriptButtonContainer");
  let findJavaScriptButton = document.querySelector("#javaScriptButton");
  //content fade out effects
  findDropDownContent.style.opacity = "0";
  //button effects
  findJavaScriptArrow.style.transform = "rotate(0deg)";
  findJavaScriptArrow.style.borderLeft = "20px solid #59656f";
  findJavaScriptArrowContainer.style.border = "2px solid #59656f";
  findJavaScriptArrowContainer.style.cursor = "pointer";
  findJavaScriptButton.style.color = "#59656f";
};

/* Drop down end */

// arrow 3 to contact section

document.getElementById("arrow-container3").onclick = scrollDown3 = () => {
let footerWrapper = document.querySelector('.footer-container');
let footerWrapperBounding = footerWrapper.getBoundingClientRect();
let footerWrapperCenter = ((footerWrapperBounding.height * 4 - window.scrollY) + 1);

window.scrollBy({top: footerWrapperCenter, left: 0, behavior: 'smooth'});

};

document.getElementById("contactMe-link").onclick = scrollDown3 = () => {
let footerWrapper = document.querySelector('.footer-container');
let footerWrapperBounding = footerWrapper.getBoundingClientRect();
let footerWrapperCenter = ((footerWrapperBounding.height * 4 - window.scrollY) + 1);

window.scrollBy({top: footerWrapperCenter, left: 0, behavior: 'smooth'});

};
