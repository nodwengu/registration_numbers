function createRegistrationNumber() {
    let registrationNumber = "";
    let obj = {};
    let regNumberEntered = {};

    function setRegNumber(regVal) {
        registrationNumber = regVal.toUpperCase();
    }

    function getRegNumber() {
        return registrationNumber;
    }

    function getAllFromCapeTown(regNumbers) {
        let capeTownNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
          
            if(registrationNumber.startsWith("CA")) {
                capeTownNumbers.push(elem);
            }
        }
        return capeTownNumbers;
    }

    function getAllFromPaarl(regNumbers) {
        let paarlNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;

            if(registrationNumber.startsWith("CJ")) {
                paarlNumbers.push(elem);
            }
        }
        return paarlNumbers;
    }

    function getAllFromBellville(regNumbers) {
        let bellvilleNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
            
            if(registrationNumber.startsWith("CY")) {
                bellvilleNumbers.push(elem);
            }
        }
        return bellvilleNumbers;
    }

    function getAllFromStellenbosch(regNumbers) {
        let stellenboschNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
            
            if(registrationNumber.startsWith("CL")) {
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
              //alert(newRegNumber + " already exists");
              repeated  = true;
              break;
          } 
        }   
        return repeated ;
     } 

     function displayError(name) {
        return name == "" || !isNaN(name); 
        //alert(!name.startsWith("CA"));
     }

     function validInput(name) {
        return name.startsWith("CA") || name.startsWith("ca") || name.startsWith("cA") || name.startsWith("Ca") ||
            name.startsWith('CJ') || name.startsWith("cj") || name.startsWith("cJ") || name.startsWith("Cj") ||
            name.startsWith('CY') || name.startsWith("cy") || name.startsWith("cY") || name.startsWith("Cy") ||
            name.startsWith('CL') || name.startsWith("cl") || name.startsWith("cL") || name.startsWith("Cl");
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
        displayError,
        validInput

    }
}

 const registrationsInstance = createRegistrationNumber();
// //let testArr = ['CL 900', 'CJ 678 543', 'CA 34567', 'CJ 67890', 'CN 7864', 'CA 888', 'CY 789', 'CL 7878'] ;
// let testArr = [{registration: 'CL 900'}, {registration: 'CJ 678 543'}, {registration:'CA 34567'}, {registration:'CJ 67890'}, {registration:'CN 7864'}, {registration:'CA 888'}, {registration:'CY 789'}, {registration:'CL 7878'}]    

// registrationsInstance.setRegNumber('CA 1234');
// alert(registrationsInstance.getRegNumber());

//alert(registrationsInstance.validInput('cb 44444'));

// let capeRegs = registrationsInstance.getAllFromCapeTown(testArr)
// console.log(capeRegs);

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

