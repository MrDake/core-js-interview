String.prototype.repeating = function(count) {
    let phrase = '';
    while (count > 0) {
        phrase += `${this} `;
        count -= 1;
    }
    return phrase.trim();
}

const phrase = 'Happy new year!'.repeating(3);
console.log(phrase);