// note that there can be multiple array
const removeFromArray = function(list, ...args) {
    let res = [];
    
    for (let i = 0; i < list.length; i++){
        if (!args.includes(list[i])){
            res.push(list[i]);
        }
    }

    return res;

};

// Do not edit below this line
module.exports = removeFromArray;