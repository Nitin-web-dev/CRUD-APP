function checkRequestEmpty(reqBody){
    if(!reqBody || Object.keys(reqBody).length === 0 || Object.values(reqBody).length === 0){
        return true
    }else {

        return false;
    }
}

module.exports = checkRequestEmpty