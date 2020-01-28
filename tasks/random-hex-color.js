// Write a JavaScript function to create random hex color
// Sample Output: "#31c05f"


function randomHEXcolor() {
    const af = ['a', 'b', 'c', 'd', 'e', 'f'];
    const result = ['#'];

    function getIntegerRandomNumberOfHex() {
        const sector = 1 / 16;
        const result = Math.trunc(Math.random() / sector);
        return result > 9 ? af[result - 10] : result;
    }

    for (let i = 0; i <= 5; i += 1) {
        result.push(getIntegerRandomNumberOfHex());
    }
    
    return result.join('');
}

const root = document.querySelector('#root');
root.style.backgroundColor = randomHEXcolor();
