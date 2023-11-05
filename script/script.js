if (document.title == "Home") {
  ScrollReveal().reveal(".boxTitle", {
    delay: 500,
    opacity: 0,
    distance: "-50px",
  });
  ScrollReveal().reveal("#card1", {
    delay: 400,
    opacity: 0,
    distance: "20px",
  });
  ScrollReveal().reveal("#card2", {
    delay: 600,
    opacity: 0,
    distance: "20px",
  });
  ScrollReveal().reveal("#card3", {
    delay: 800,
    opacity: 0,
    distance: "20px",
  });
}
if (document.title == "Personajes") {
  const urlCharacters = "https://api.sampleapis.com/futurama/characters";
  const characters = {};

  const cardContainer = document.querySelector("#cardContainerCharacters");

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 300,
  })

  sr.reveal('#titleCharacter', {origin: "left"})

  async function fetchData() {
    try {
      fetch(urlCharacters)
        .then((res) => {
          const response = res.json();
          return response;
        })
        .then((data) => {
          characters.data = data;
          createCard(characters);
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  }

  async function createCard(array) {
    const { data } = array;
    try {
      data.map((item) => {
        const div = document.createElement("div");
        div.className = "borderColor";
        div.innerHTML = `
      <div class="cardCharacters">
        <figure>
          <img src=${item.images.main} alt="">
        </figure>
        <h3>${item.name.first}, ${item.name.last}</h3>
        <div class="bodyCharacters">
          <p>Genero: <span>${item.gender}</span></p>
          <p>Especie: <span>${item.species}</span></p>
          <p>Planeta: <span>${item.homePlanet}</span></p>
          <p>Ocupacion: <span>${item.occupation}</span></p>
        </div>
      </div>
      `;
        cardContainer.appendChild(div);
      }),
        ScrollReveal().reveal(".borderColor", {
          origin:"top",
          distance: "60px",
          duration: 2000,
          interval: 100,
          delay: 400,
          opacity: 0,
        });
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
}

// async function orderCharacter {

// }
