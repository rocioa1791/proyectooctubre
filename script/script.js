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

async function fetchData(){
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
  } catch (error) {
    
  }
}
  

  async function createCard(array) {
    const {data} = array
    try {
      !data ? (cardContainer.innerHTML="<p>Cargando personajes</p>"):(
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
          cardContainer.appendChild(div)
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
}
