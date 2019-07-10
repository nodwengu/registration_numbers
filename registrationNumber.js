function createRegistrationNumber() {
    let reg_number = "";
    let obj = {};
    let regNumberEntered = {};

    function setRegNumber(regVal) {
        reg_number = regVal;
    }

    function getRegNumber() {
        return reg_number;
    }

    return {
        setRegNumber,
        getRegNumber
    }
}