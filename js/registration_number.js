let addRegNumberBtn = document.querySelector('#addRegNumber');
let registrationNumberElem = document.querySelector('.regNumList');
let regNumberRadio = document.querySelectorAll('.regNumberRadio');
let showFilterBtn = document.querySelector('#showFilter');

let data = JSON.parse(localStorage.getItem('registrationNumbers'));

const registrationNumberInstance = createRegistrationNumber();

if(localStorage.getItem('registrationNumbers')) {
   for(let i = 0; i < data.length; i++) {
      registrationNumberElem.innerHTML += "<div>" + data[i].registration + "</div>";
   }
}

function storeRegistration() {
   data = JSON.parse(localStorage.getItem('registrationNumbers'));
   let regNoInputVal = document.querySelector('#regNoInput').value;

   if( registrationNumberInstance.displayError(regNoInputVal) || !registrationNumberInstance.validInput(regNoInputVal) ) {
      document.querySelector('.error').classList.add('showError');
      document.querySelector('.error').innerHTML = "Error in your input fields";
      return;
   } else {
      document.querySelector('.error').classList.remove('showError');
   }

   registrationNumberInstance.setRegNumber(regNoInputVal)
   registrationNumberInstance.setRegObj();

   let registrations = [];
   let obj = registrationNumberInstance.getRegObj();
   

   if(localStorage.getItem('registrationNumbers')) {
//alert(registrationNumberInstance.checkRegNumber(data));
      if( registrationNumberInstance.checkRegNumber(data) ) {
         return false;
      } else {
         registrations = JSON.parse(localStorage.getItem('registrationNumbers'));
         registrations.push(obj);
         let newDiv = document.createElement('div');

         for(let i = 0; i < registrations.length; i++) {
            let elem = registrations[i];
            newDiv.innerHTML = elem.registration;
         }
         registrationNumberElem.appendChild(newDiv);
         document.querySelector('#regNoInput').value = ''
         localStorage.setItem('registrationNumbers', JSON.stringify(registrations))
      }
      
   } else {
      registrations.push(obj);
      localStorage.setItem('registrationNumbers', JSON.stringify(registrations))
      document.querySelector('#regNoInput').value = ''
      registrationNumberElem.innerHTML = "<div>" + obj.registration + "</div>";
   }
}

function filterRegistrations() {
  
   for(let i = 0; i < regNumberRadio.length; i++) {
      let elem = regNumberRadio[i];

      if(elem.checked) {
         if (registrationNumberElem.hasChildNodes()) {
            // It has at least one
            registrationNumberElem.innerHTML = "";
         }

         if(elem.value === 'cape town'){

            let regFromCapeTown = registrationNumberInstance.getAllFromCapeTown(data);
            for(let i = 0; i < regFromCapeTown.length; i++) {
               let elem = regFromCapeTown[i];
               registrationNumberElem.innerHTML += "<div>" + elem.registration + "</div>";
            }

         } else if(elem.value === 'paarl') {
            let regFromPaarl = registrationNumberInstance.getAllFromPaarl(data);
            for(let i = 0; i < regFromPaarl.length; i++) {
               let elem = regFromPaarl[i];
               registrationNumberElem.innerHTML += "<div>" + elem.registration + "</div>";
            }
         } else if(elem.value === 'bellville') {
            let regFromBellville = registrationNumberInstance.getAllFromBellville(data);
            for(let i = 0; i < regFromBellville.length; i++) {
               let elem = regFromBellville[i];
               registrationNumberElem.innerHTML += "<div>" + elem.registration + "</div>";
            }
         } else if(elem.value === 'stellenbosch') {
            let regFromStellenbosch = registrationNumberInstance.getAllFromStellenbosch(data);
            for(let i = 0; i < regFromStellenbosch.length; i++) {
               let elem = regFromStellenbosch[i];
               registrationNumberElem.innerHTML += "<div>" + elem.registration + "</div>";
            }
         } else if(elem.value === 'all') {
            if(localStorage.getItem('registrationNumbers')) {
               for(let i = 0; i < data.length; i++) {
                  registrationNumberElem.innerHTML += "<div>" + data[i].registration + "</div>";
               }
            }
         }
      }
   }
}

addRegNumberBtn.addEventListener('click', storeRegistration);

showFilterBtn.addEventListener('click', filterRegistrations);