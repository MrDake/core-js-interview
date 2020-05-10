let root = document.querySelector('#root');
root.innerHTML =`
<div id="box" class="box center margin">
    animation
</div>
<div id="playground" class="playground">
    <div class="left-player player"></div>
    <div class="ball-field">
        <div class="ball"></div>
    </div>
    <div class="right-player player"></div>
</div>
<div id="flex-box-contaner" class="flex-box-contaner center">
    <div id="flex-box" class="flex-box center">
        flex-box
    </div>
</div>
`;

// ----------------------------------------------------------------
//       animation with setInterval
// ----------------------------------------------------------------


function warpJummp(element, distance, allTime, hz = 144) {
    let time = allTime / 2;
    let frameTime = Math.round(1000 / hz);
    let frameAmount = Math.round(time / frameTime);
    const distanceStep = Math.ceil(distance / frameAmount);
    frameAmount = Math.ceil(distance / distanceStep);
    frameTime = Math.floor(time / frameAmount);
    
    function animation(element, distance, distanceStep, frameTime) {
        let end = distance;
        let step = distanceStep;
        let { width, height } = element.getBoundingClientRect();
        const elementWidth = width;
        const elementHeight = height;
        let translateX = 0;
        let intervalID = setInterval(() => {
            if (end > 0) {
                end -= step;
                if (end < 0) {
                    step += end;
                }
                width += step;
                translateX += step / 2;
                element.style.width = `${width}px`;
                element.style.transform = `translateX(${translateX}px)`;
                if (height > elementHeight / 3) {
                    height -= step;
                    element.style.height = `${height}px`;
                } else {

                }
            } else {
                clearInterval(intervalID);
                intervalID = setInterval(() => {
                    if (width > elementWidth) {
                        width -= step;
                        if ((width - elementWidth) < 0) {
                            step += (width - elementWidth);
                        }
                        width -= step;
                        translateX += step;
                        element.style.width = `${width}px`;
                        element.style.transform = `translateX(${translateX}px)`;
                        
                    } else if (height < elementHeight) {
                        height += step;
                        element.style.height = `${height}px`;
                    } else {
                        clearInterval(intervalID);
        
                    }
                }, frameTime);
            }
        }, frameTime);

    }
    animation(element, distance, distanceStep, frameTime);
}

let flexBox = document.querySelector('#flex-box');

flexBox.addEventListener('click', () => warpJummp(flexBox, 200, 150, 144));

// ----------------------------------------------------------
//    animation with requestAnimationFrame()
// ----------------------------------------------------------

function getRGBA(colorString) {
    let colorArray;
    if (colorString.includes('rgba')) {
        colorArray = colorString.slice(5, -1).split(',').map(item => +item);
    } else {
        colorArray = colorString.slice(4, -1).split(',').map(item => +item);
    }
    
    return colorArray;
}

function setRGBA(colorArray) {
    const [ r, g, b, a = 1] = colorArray;
    const getNewColor = (color) => {
        if (color > 255) {
            color = 255;
        } else if (color < 0) {
            color = 0;
        }
        const random50 = 50 - Math.trunc(Math.random() * 100);
        let newColor = color + random50;
        if (newColor < 0) {
            newColor = newColor * -1;
        } else if (newColor > 255) {
            newColor = 255 + 255 - newColor;
        }
        return newColor;
    };
    const getNewOpacity = (opacity) => {
        if (opacity > 1) {
            opacity = 1
        } else if (opacity < 0) {
            opacity = 0;
        }
        const random05 =  Math.trunc(0.5 - Math.random() * 100) / 100;
        let newOpacity = opacity + random05;
        if (newOpacity > 1) {
            newOpacity = 1 + 1 - newOpacity;
        } else if (newOpacity < 0.3) {
            newOpacity = 0.3 + Math.abs(newOpacity);
        }
        return newOpacity;
    };
    return [getNewColor(r), getNewColor(g), getNewColor(b), getNewOpacity(a)];
}

function hamelion(element, time, hz) {
    let { backgroundColor } = element.style;
    if (backgroundColor === '') {
        backgroundColor = window.getComputedStyle(element).backgroundColor;
    }
    let colorArray = getRGBA(backgroundColor);
    let frameTime = Math.round(1000 / hz);
    let frameAmount = Math.round(time / frameTime);
    
    function step() {
        frameAmount -= 1;
        let [ r, g, b, a ] = setRGBA(colorArray);
        colorArray = [ r, g, b, a ];
        element.style.backgroundColor = `rgba(${r}, ${g}, ${b} , ${a}`;
        if (frameAmount > 0) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

flexBox.addEventListener('mouseover', () => hamelion(flexBox, 100, 144));
