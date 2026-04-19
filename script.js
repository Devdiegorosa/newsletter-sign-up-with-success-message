  // Executa o script após o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const subscribeBtn = document.getElementById("btn-subscribe");
  const errorMessage = document.querySelector(".error-message");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Adiciona um ouvinte de evento para o foco no campo de email
  emailInput.addEventListener("focus", () => {
    subscribeBtn.style.background = "linear-gradient(to right, #ff4d4d, #FE7552)";
    
    errorMessage.textContent = "";
    errorMessage.style.color = "";
    emailInput.style.backgroundColor = "white";
    emailInput.style.borderColor = "var(--blue)";
    emailInput.style.color = "var(--blue-800)";
  });


  // Adiciona um ouvinte de evento para quando o campo de email perder o foco
  emailInput.addEventListener("blur", () => {
    subscribeBtn.style.background = "#23254b";
  });

  // Adiciona um ouvinte de evento para o clique no botão de inscrição
  subscribeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = "Valid email required";

      errorMessage.style.color = "var(--red)";
      errorMessage.style.fontSize = "0.75rem";
      errorMessage.style.fontWeight = "bold";
      emailInput.style.borderColor = "var(--red)";
      emailInput.style.color = "var(--red)";
      emailInput.style.backgroundColor = "#ffe6e6";
    } else {
        // Redireciona para a página de sucesso        
        window.location.href = "success.html";
    }
  });
});
