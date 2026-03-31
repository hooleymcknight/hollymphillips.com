export const camelCaseToDashes = (input) => {
    let output = '';

    for (const letter of input) {
        const isCapitalized = letter === letter.toUpperCase() && letter !== letter.toLowerCase();
        output += isCapitalized ? `-${letter.toLowerCase()}` : letter;
    }

    return output;
}