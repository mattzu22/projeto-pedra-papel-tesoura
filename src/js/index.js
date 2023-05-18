const playerOpts = document.querySelectorAll(".player-options div > img");

const enemyOpts = document.querySelectorAll(".enemy-options div > img");

let playerOpt = "";
let enemyOpt = "";

function resetEnemy() {
  for (let i = 0; i < enemyOpts.length; i++) {
    enemyOpts[i].style.opacity = 0.3;
  }
}

function enemyPlay() {
  const rand = Math.floor(Math.random() * 3);

  resetEnemy();
  for (let i = 0; i < enemyOpts.length; i++) {
    if (i == rand) {
      enemyOpts[i].style.opacity = 1;
      enemyOpt = enemyOpts[i].id;
    }
  }

  validateVictory();
}

function validateVictory() {
  const winner = document.querySelector(".vencedor");

  if (playerOpt == "papel") {
    if (enemyOpt == "papel") {
      winner.innerHTML = "O jogo foi empatado!";
    } else if (enemyOpt == "tesoura") {
      winner.innerHTML = "O inimigo ganhou!";
    } else if (enemyOpt == "pedra") {
      winner.innerHTML = "Você ganhou!";
    }
  }

  if (playerOpt == "pedra") {
    if (enemyOpt == "papel") {
      winner.innerHTML = "O inimigo ganhou!";
    } else if (enemyOpt == "tesoura") {
      winner.innerHTML = "Você ganhou!";
    } else if (enemyOpt == "pedra") {
      winner.innerHTML = "O jogo foi empatado!";
    }
  }

  if (playerOpt == "tesoura") {
    if (enemyOpt == "papel") {
      winner.innerHTML = "Você ganhou!";
    } else if (enemyOpt == "tesoura") {
      winner.innerHTML = "O jogo foi empatado!";
    } else if (enemyOpt == "pedra") {
      winner.innerHTML = "O inimigo ganhou!";
    }
  }
}

playerOpts.forEach((element) => {
  element.addEventListener("click", (e) => {
    resetOpacityPlayer();
    e.target.style.opacity = 1;

    playerOpt = element.id;

    enemyPlay();
  });
});

function resetOpacityPlayer() {
  playerOpts.forEach((element) => {
    element.style.opacity = 0.3;
  });
}
