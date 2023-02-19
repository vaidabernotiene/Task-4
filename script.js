/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const divOutputEl = document.querySelector("#output");

divOutputEl.setAttribute(
  "style",
  "display: flex; flex-wrap: wrap; justify-content: space-around"
);

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
  updateOutput(data);
}

function updateOutput(data) {
  data.forEach((element) => {
    const cardsEl = document.createElement("div");
    cardsEl.className = "container";
    cardsEl.style.cssText =
      "background-color: #222; color: white; gap: 20px, margin-bottom: 20px; padding: 20px; width: 60%";

    const headerEl = document.createElement("h1");
    headerEl.textContent = `${element.brand}`;
    headerEl.style.color = "green";
    const textEl = document.createElement("h3");
    textEl.style.alignSelf = "left";
    textEl.style.height = "100%";
    textEl.textContent = `${element.models}`;

    divOutputEl.append(cardsEl);
    cardsEl.append(headerEl, textEl);
  });
}

getCarsData();
