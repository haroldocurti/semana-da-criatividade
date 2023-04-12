const prompts = [
    "Explore o conceito de \"tempo\" através da sua arte.",
    "Crie algo inspirado em uma lembrança da sua infância favorita.",
    "Use sua paleta de cores favorita para criar uma peça abstrata.",
    "Pinte um retrato de alguém que tenha te influenciado.",
    "Use objetos encontrados para criar uma escultura.",
    "Crie uma peça de arte em técnica mista usando a natureza como inspiração.",
    "Explore o tema de \"viagens\" através da sua arte.",
    "Crie algo inspirado em sua música favorita.",
    "Use seu livro favorito como inspiração para uma obra de arte.",
    "Pinte ou desenhe seu lugar favorito na natureza.",
    "Crie uma obra que explore a ideia de \"identidade\".",
    "Use uma citação favorita como inspiração para uma obra de arte.",
    "Crie uma peça abstrata usando apenas palavras.",
    "Crie um autorretrato em uma técnica que nunca usou antes.",
    "Pinte uma natureza morta de suas flores ou frutas favoritas.",
    "Crie uma obra de arte inspirada em seu poema favorito.",
    "Use sua estação do ano favorita como inspiração para uma obra de arte em técnica mista.",
    "Pinte um retrato de um membro da família ou amigo.",
    "Use seu animal favorito como inspiração para uma obra de arte.",
    "Use seu brinquedo favorito da infância como inspiração para uma obra de arte.",
    "Pinte uma paisagem de um lugar que nunca esteve.",
    "Use uma obra literária favorita como inspiração para uma obra de arte.",
    "Use sua cor favorita como inspiração para uma obra de arte em técnica mista.",
    "Pinte um autorretrato usando apenas uma cor.",
    "Use sua cidade favorita como inspiração para uma obra de arte.",
    "Crie algo inspirado em seu movimento de arte favorito.",
    "Pinte um retrato de alguém que você ama.",
    "Use sua fruta ou vegetal favorito como inspiração para uma natureza morta.",
    "Use seu animal favorito como inspiração para uma obra de arte em técnica mista.",
    "Crie uma peça abstrata usando apenas formas geométricas.",
    "Crie uma escultura usando argila ou outros materiais naturais.",
    "Use sua estação do ano favorita como inspiração para uma obra de arte.",
    "Crie algo inspirado em sua emoção favorita.",
    "Crie uma obra de arte que represente um sonho ou pesadelo.",
    "Use seu esporte favorito como inspiração para uma obra de arte.",
    "Use sua música favorita como inspiração para uma obra de arte.",
    "Crie algo inspirado em seu filme ou programa de TV favorito.",
    "Use sua constelação favorita como inspiração para uma obra de arte.",
    "Pinte um autorretrato usando uma paleta de cores frias.",
    "Crie algo inspirado em um sonho que você teve."
  ]

const randomNumber = ()=>Math.floor(Math.random() * 40);
const span = document.querySelector("#randomText");
span.textContent = prompts[randomNumber()];
document.getElementById("resetBt").addEventListener("click",()=>{span.textContent = prompts[randomNumber()];})



