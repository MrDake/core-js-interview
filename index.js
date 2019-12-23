function createData(count) {
    const delta = 1;
    const array = [];
    let value = 0;
    for (let i = 0; i < count; i+= 1) {
        value += delta; // some calculation 
        array.push({
            x: value,
            y: value,
            color: [value, value, value, value],
            smth: value,
        });
    }
    return array;
}

function createDataString(count) {
    const delta = 1;
    const array = [];
    let value = 0;
    for (let i = 0; i < count; i+= 1) {
        value += delta; // some calculation 
        array.push({
            x: value,
            y: value,
            color: `rgba(${value}, ${value}, ${value}, ${value})`,
            smth: value,
        });
    }
    return array;
}

function renderDate(array) {
    array.forEach((item, index) => {
        const { x, y, color: [r, g, b, a], smth } = item;
        console.log(index, ' - ', x, y, `rgba(${r}, ${g}, ${b}, ${a})`, smth);
    });
}

function renderDateString(array) {
    array.forEach((item, index) => {
        const { x, y, color, smth } = item;
        const colorArray = color.slice(5, -1).split(',');
        const [ r, g, b, a ] = colorArray;
        console.log(index, ' - ', x, y, `rgba(${r}, ${g}, ${b}, ${a})`, smth);
    });
}

function performanceTiming(count, createData, renderDate) {
    const timingArray = [];
    for (let i = 0; i < count / 100; i+= 1) {
        const start = Date.now();
        const array = createData(count);
        renderDate(array);
        const end = Date.now();
        timingArray.push(end - start);
    }
    const staticticTiming = timingArray.reduce((acc, next) => (acc + next), 0) / timingArray.length;
    console.log('-----------------------------------------------------------------------------');
    console.log(timingArray);
    console.log(staticticTiming);
}

// performanceTiming(10000, createData, renderDate);

// performanceTiming(10000, createDataString, renderDateString);
