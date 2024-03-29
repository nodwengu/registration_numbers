function createRegistrationNumber() {
    let registrationNumber = "";
    let obj = {};
    let regNumberEntered = {};

    function setRegNumber(regVal) {
        registrationNumber = regVal;
    }

    function getRegNumber() {
        return registrationNumber;
    }

    function getAllFromCapeTown(regNumbers) {
        let capeTownNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if(elem.startsWith("CA")) {
                capeTownNumbers.push(elem);
            }
        }

        return capeTownNumbers;
    }

    function getAllFromPaarl(regNumbers) {
        let paarlNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if(elem.startsWith("CJ")) {
                paarlNumbers.push(elem);
            }
        }

        return paarlNumbers;
    }

    function getAllFromBellville(regNumbers) {
        let bellvilleNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if(elem.startsWith("CY")) {
                bellvilleNumbers.push(elem);
            }
        }

        return bellvilleNumbers;
    }

    function getAllFromStellenbosch(regNumbers) {
        let stellenboschNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if(elem.startsWith("CL")) {
                stellenboschNumbers.push(elem);
            }
        }

        return stellenboschNumbers;
    }

    function setNameObj() {
        obj = {
           registration: registrationNumber
        }
     }
  
     function getNameObj() {
        return obj;
     }
  
     function checkRegNumber(registrations) {
        let repeated  = false;
  
        for(let i = 0; i < registrations.length; i++) {
           let elem = registrations[i];
           let regNumber = elem.registrationNumber;

           if (regNumberEntered[registrationNumber] === undefined){
               //add an entry for the user that was greeted in the Object Map
               regNumberEntered[regNumber] = 0;
           } else {
               regNumberEntered[regNumber]++;
           }
        }

        let newRegNumber = getRegNumber();
        for(let key in regNumberEntered) {
          if(regNumberEntered.hasOwnProperty(newRegNumber)) {
              alert(newRegNumber + " already exists");
              repeated  = true;
              break;
          } 
        }   
        return repeated ;
     } 

    return {
        setRegNumber,
        getRegNumber,
        getAllFromCapeTown,
        getAllFromPaarl,
        getAllFromBellville,
        getAllFromStellenbosch,
        setNameObj,
        getNameObj,
        checkRegNumber,

    }
}

const registrationsInstance = createRegistrationNumber();
let testArr = ['CL 900', 'CJ 678 543', 'CA 34567', 'CJ 67890', 'CN 7864', 'CA 888']
     

// registrationsInstance.setRegNumber('CA 1234');
// alert(registrationsInstance.getRegNumber());

// let capeTownRegs = registrationsInstance.getAllFromCapeTown(testArr)
// console.log(capeTownRegs);

let capeTownRegs = registrationsInstance.getAllFromCapeTown(testArr)
console.log(capeTownRegs);