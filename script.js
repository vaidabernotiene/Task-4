/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const divOutputEl = document.querySelector("#output");

const ENDPOINT = "./cars.json";

async function getCarsData() {
  const response = await fetch(ENDPOINT)
    .then((response) => {
      if (response.ok) {
        console.log("GET request succesful");
      } else {
        console.log("GET request unsuccesful");
      }
      return response;
    })
    .catch((err) => console.log(err));
  const data = await response.json();
  
}

getCarsData();
