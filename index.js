/*function slideUp(element, duration = 400) {
    if (element.dataset.sliding === 'true') return;
  
    element.dataset.sliding = 'true';
    element.style.height = element.offsetHeight + 'px';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.boxSizing = 'border-box';
    element.offsetHeight; // force reflow
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
  
    window.setTimeout(function() {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      element.dataset.sliding = 'false';
    }, duration);
  }
  
  function slideDown(element, duration = 400) {
    if (element.dataset.sliding === 'true') return;
  
    element.dataset.sliding = 'true';
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;
  
    if (display === 'none') display = 'block';
  
    element.style.display = display;
    let height = element.offsetHeight;
    element.style.overflow = 'hidden';
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight; // force reflow
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.boxSizing = 'border-box';
    element.style.height = height + 'px';
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
  
    window.setTimeout(function() {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      element.dataset.sliding = 'false';
    }, duration);
  }
  
*/


/*
  const mapping = {
    up: {
        endDisplayValue: 'none',
        calculateProperty: (easeFunction) => (propertyValue, elapsedPart) => propertyValue - propertyValue * easeFunction(elapsedPart),
    },
    down: {
        endDisplayValue: 'block',
        calculateProperty: (easeFunction) => (propertyValue, elapsedPart) => propertyValue * easeFunction(elapsedPart),
    },
}

const _slide = (direction, resolve, reject, element, duration = 300, easeFunction = (x) => x) => {

  console.log('Slide Up and Down Function')

    if (!(element instanceof HTMLElement)) {
        reject('Variable "element" must be instance of HTMLElement');
        return;
    }
    if (typeof duration !== 'number') {
        duration = 300;
    }
    if (duration === 0) {
        element.style.display = mapping[direction].endDisplayValue;
        resolve();
        return;
    }
    if (getComputedStyle(element).display === mapping[direction].endDisplayValue) {
        resolve();
        return;
    }

    if (direction === 'down') {
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.display = 'block';
    }
    const animationProperties = ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'borderWidth'];
    const computedStyle = getComputedStyle(element);
    const animationStyle = animationProperties.reduce((style, paramName) => {
        style[paramName] = Number.parseInt(computedStyle[paramName], 10);
        return style;
    }, {});
    if (direction === 'down') {
        element.style.display = 'none';
        element.style.position = '';
        element.style.visibility = '';
    }

    element.style.overflow = 'hidden';

    let start = null;
    const calculateProperty = mapping[direction].calculateProperty(easeFunction)

    const animationStep = (timestamp) => {
        if (start === null) start = timestamp;
        const elapsedTime = timestamp - start;
        let elapsedPart = elapsedTime / duration;
        if (elapsedPart > 1) elapsedPart = 1;
        for (const prop in animationStyle) {
            element.style[prop] = `${calculateProperty(animationStyle[prop], elapsedPart)}px`;
        }
        if (direction === 'down' && element.style.display !== 'block') {
            element.style.display = 'block';
        }
        if (elapsedTime < duration) {
            requestAnimationFrame(animationStep);
            return;
        }
        element.style.display = mapping[direction].endDisplayValue;
        for (const prop in animationStyle) {
            element.style[prop] = '';
        }
        element.style.overflow = '';
        resolve();
    };
    requestAnimationFrame(animationStep);
};

/*
ease param - easing function from GSAP
*/
/*
const slideUp = async (element, duration, ease) => new Promise((resolve, reject) => {
    _slide('up', resolve, reject, element, duration, ease);
});

const slideDown = async (element, duration, ease) => new Promise((resolve, reject) => {
    _slide('down', resolve, reject, element, duration, ease);
});

const slideToggle = (element, duration, ease) => new Promise(async (resolve) => {
    if (getComputedStyle(element).display === 'none') {
        await slideDown(element, duration, ease);
    } else {
        await slideUp(element, duration, ease);
    }
    resolve();
});
*/


/* ======== */

document.getElementById('test').addEventListener('click', function() {
    const div = document.querySelector('.div-example')
    console.log(div)
    if (div.style.display === 'none' || div.style.height === '0px') {
       // slideDown(div, 50000);
       $(div).slideDown(50000)
    } else {
       // slideUp(div, 50000);
       $(div).slideUp(50000)
    }
});