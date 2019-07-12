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
            //console.log(regNumbers);
            if(elem.registration.startsWith("CA")) {
                capeTownNumbers.push(elem);
            }
        }
        return capeTownNumbers;
    }

    function getAllFromPaarl(regNumbers) {
        let paarlNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if((elem.registration).startsWith("CJ")) {
                paarlNumbers.push(elem);
            }
        }
        return paarlNumbers;
    }

    function getAllFromBellville(regNumbers) {
        let bellvilleNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if((elem.registration).startsWith("CY")) {
                bellvilleNumbers.push(elem);
            }
        }
        return bellvilleNumbers;
    }

    function getAllFromStellenbosch(regNumbers) {
        let stellenboschNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            if((elem.registration).startsWith("CL")) {
                stellenboschNumbers.push(elem);
            }
        }
        return stellenboschNumbers;
    }

    function setRegObj() {
        obj = {
           registration: registrationNumber
        }
    } 
     function getRegObj() {
        return obj;
     }
  
     function checkRegNumber(registrations) {
        let repeated  = false;
  
        for(let i = 0; i < registrations.length; i++) {
           let elem = registrations[i];
           let regNumber = elem.registration;
           if (regNumberEntered[regNumber] === undefined){
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
        setRegObj,
        getRegObj,
        checkRegNumber,

    }
}

const registrationsInstance = createRegistrationNumber();
let testArr = ['CL 900', 'CJ 678 543', 'CA 34567', 'CJ 67890', 'CN 7864', 'CA 888', 'CY 789', 'CL 7878']     

// registrationsInstance.setRegNumber('CA 1234');
// alert(registrationsInstance.getRegNumber());

let capeRegs = registrationsInstance.getAllFromCapeTown(testArr)
console.log(capeRegs);

// let paarlRegs = registrationsInstance.getAllFromPaarl(testArr)
// console.log(paarlRegs);

// let bellvilleRegs = registrationsInstance.getAllFromBellville(testArr)
// console.log(bellvilleRegs);

// let stellenRegs = registrationsInstance.getAllFromStellenbosch(testArr)
// console.log(stellenRegs);

// registrationsInstance.setRegNumber('CA 2020')
// registrationsInstance.setRegObj();
// console.log(registrationsInstance.getRegObj());

// registrationsInstance.setRegNumber('CL 900');
// let reg_numbers = [{registration:'CA 123'}, {registration:'CL 900'}, {registration:'CY 246'}]
// alert(registrationsInstance.checkRegNumber(reg_numbers));

