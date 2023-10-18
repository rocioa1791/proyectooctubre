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
  const characters = [];
  fetch(urlCharacters)
    .then((res) => {
      const response = res.json();
      return response;
    })
    .then((data) => {
      characters.push(data);
    })
    .catch((err) => console.log(err));
  
  console.log(characters)
}
