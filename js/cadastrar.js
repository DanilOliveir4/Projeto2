document.querySelector(".botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form");
  
    const player = {
      nome: document.querySelector("#nome").value,
      time: document.querySelector("#time").value,
      gols: document.querySelector("#gols").value,
      assist: document.querySelector("#assistencias").value,
      foto: document.querySelector("#foto").value,
    };
  
    if (validar(player)) {
      console.log(player);
      let players = JSON.parse(localStorage.getItem("players")) || [];
      players.push(player);
      localStorage.setItem("players", JSON.stringify(players));
  
      window.location = "/";
    }
  });
  
  function validar(player) {
    let valid = true;
    limparErros();
  
    if (player.nome.trim() === "") {
      document.querySelector("#nome").classList.add("is-error");
      document.querySelector("#nome-error").innerText =
        "O nome do jogador é obrigatório";
      valid = false;
    }
  
    if (player.time.trim() === "") {
      document.querySelector("#time").classList.add("is-error");
      document.querySelector("#time-error").innerText =
        "O time do jogador é obrigatório";
      valid = false;
    }
  
    if (isNaN(player.gols) || player.gols.trim() === "" || player.gols <= 0) {
      document.querySelector("#gols").classList.add("is-error");
      document.querySelector("#gols-error").innerText =
        "O número de gols deve ser um número maior que 0";
      valid = false;
    }
    if (player.assist.trim() === "") {
      document.querySelector("#assistencias").classList.add("is-error");
      document.querySelector("#assistencias-error").innerText =
        "O número de assistências é obrigatório";
      valid = false;
    }
  
    if (player.foto.trim() === "") {
      document.querySelector("#foto").classList.add("is-error");
      document.querySelector("#foto-error").innerText =
        "A URL da foto é obrigatória";
      valid = false;
    }
  
    return valid;
  }
  
  function limparErros() {
    document
      .querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
      .forEach((campo) => {
        campo.classList.remove("is-error");
        const errorSpan = campo.parentElement.querySelector(".error-message");
        if (errorSpan) errorSpan.innerText = "";
      });
  }
  
  
  document.getElementById("nome").addEventListener("input", limparMensagemErro);
  document.getElementById("time").addEventListener("input", limparMensagemErro);
  document.getElementById("gols").addEventListener("input", limparMensagemErro);
  document.getElementById("assistencias").addEventListener("input", limparMensagemErro);
  document.getElementById("foto").addEventListener("input", limparMensagemErro);
  
  
  function limparMensagemErro() {
    const campoId = this.id;
    const errorSpan = document.querySelector(`#${campoId}-error`);
    if (errorSpan) {
      errorSpan.innerText = "";
    }
  }
  