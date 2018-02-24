// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let obj = {};

    function round(curr, param) {
        return Math.floor(curr / param);
    }

    function remainder(curr, param) {
        return curr % param;
    }


    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency <= 0) {
        return obj;
    } else {
        obj["H"] = round(currency, 50);
        obj["Q"] = round(remainder(currency, 50), 25);
        obj["D"] = round(remainder(remainder(currency, 50), 25), 10);
        obj["N"] = round(remainder(remainder(remainder(currency, 50), 25), 10), 5);
        obj["P"] = remainder(currency, 5);
    }
    for (let key in obj) {
        if (obj[key] == 0) {
            delete obj[key];
        }
    }
    console.log(currency);
    console.log(obj);
    return obj;

}
