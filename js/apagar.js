function apagar(titulo) {
    console.log("apagar treino " + titulo);
  
    const card = document.querySelector(`#${titulo}`);
    card.classList.add("apagando");
    card.addEventListener("animationend", () => card.remove());
    
  
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.titulo != titulo);
    localStorage.setItem("tarefas", JSON.stringify(tarefasFiltradas));
  
    atualizar()
  }
  