import appData from '../data/appData.json';
import pageRoutes from '@/pageRoutes';

export const camelCaseToDashes = (input) => {
    let output = '';

    for (const letter of input) {
        const isCapitalized = letter === letter.toUpperCase() && letter !== letter.toLowerCase();
        output += isCapitalized ? `-${letter.toLowerCase()}` : letter;
    }

    return output;
}

export const findKeyRecursive = (obj, targetKey) => {
    let results = [];
    for (const key in obj) {
        if (key === targetKey) {
            results.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            results = results.concat(findKeyRecursive(obj[key], targetKey));
        }
    }
    return results;
};

export const toCamelCase = (input) => {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function getTopParent (id) {
    for (const category of Object.keys(pageRoutes)) {
        if (findKeyRecursive(pageRoutes[category], id).length) {
            return category;
        }
    }
    return null;
}

export const getAppTileData = (searchCategory) => {
    const thisDataKeys = Object.keys(appData).filter(x => searchCategory ? appData[x].category === searchCategory : x);

    let thisData = {};
    thisDataKeys.forEach((key) => {
        thisData[key] = appData[key];

        let topParentCategory = getTopParent(appData[key].id);
        if (topParentCategory == null) {
            thisData[key].link = pageRoutes[appData[key].id].link;
        }
        
        if (searchCategory || topParentCategory != null) {
            const category = getTopParent(appData[key].id);
            thisData[key].link = `${category ? '/' + category : ''}${findKeyRecursive(pageRoutes, appData[key].id)[0]}`;
            console.log(key, thisData[key].link)
        }
    });

    return thisData;
}