const linkTagModel = require("../models/linkTag");

function handleWords(search) {

    function singularize(word) {
        const endings = {
            ves: 'fe',
            ies: 'y',
            i: 'us',
            zes: 'ze',
            ses: 's',
            es: 'e',
            s: ''
        };
        return word.replace(
            new RegExp(`(${Object.keys(endings).join('|')})$`), 
            r => endings[r]
        );
    }

    // would work if case has one word only
    // i would work on it

    search = singularize(search[0])

    return [search]

}

function sortingTitles(search,check) {

    let getAll = [];

    if(Array.isArray(search) && search.length > 1) {
        
        for (const property in check) {
            if(check[property] > 1) {
                getAll.push(property);
            }
        }

    }
    
    if(search.length == 1) {

        for(const item in check) {
            getAll.push(item);
        }

    }
    
    return getAll;

}



module.exports.searchAlgorithm = async function (search) {

    search = handleWords(search)

    // start

    // there is fucking problem
    // when i try return object from getTitle function
    // above this function return error
    // i have no idea WTF is Wrong

    const data = await linkTagModel.find({ tag : { $in : search } }).exec()

    const titles = data.map((item) => {
        return item.title;
    })

    const check = {};

    titles.map((title) => {
        
        if(title in check) {
            check[title] = check[title] + 1 ;
        } else {
            check[title] = 1;
        }

    })


    let getAll = [];


    // if()

    getAll = sortingTitles(search,check);

    // end



    return getAll;
}

//
//
// get title function was here but has a problem
//
//