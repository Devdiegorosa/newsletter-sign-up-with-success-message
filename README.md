Newsletter Sign-up Form with Success Message

Aplicação front-end de um formulário de inscrição em newsletter com validação de e-mail e exibição de mensagem de sucesso após submissão.

Este projeto foi desenvolvido como prática de desenvolvimento front-end, com foco em manipulação de DOM, validação de formulários e responsividade.

⸻

Demo

Live Preview:
https://devdiegorosa.github.io/newsletter-sign-up-with-success-message/

⸻

Funcionalidades

* Inserção de e-mail no formulário
* Validação de e-mail (formato correto)
* Exibição de mensagens de erro para:
    * Campo vazio
    * E-mail inválido
* Exibição de mensagem de sucesso após envio
* Layout responsivo
* Estados interativos (hover e focus)

⸻

Tecnologias utilizadas

* HTML5 (semântico)
* CSS3 (Flexbox e responsividade)
* JavaScript (validação e manipulação do DOM)

⸻

Como rodar o projeto

# Clone o repositório
git clone https://github.com/devdiegorosa/newsletter-sign-up-with-success-message.git
# Acesse a pasta
cd newsletter-sign-up-with-success-message
# Abra o arquivo no navegador
open index.html

⸻

Estrutura do projeto

assets/
index.html
style.css
script.js
style-guide.md

⸻

Lógica principal

O JavaScript é responsável por:

* Validar o e-mail utilizando expressão regular
* Exibir mensagens de erro conforme necessário
* Alternar entre o formulário e a tela de sucesso

Exemplo simplificado:

if (!isEmailValid) {
  showErrors();
} else {
  showSuccessMessage();
}

⸻

Aprendizados

* Manipulação do DOM
* Validação de formulários
* Responsividade com CSS
* Organização de código front-end
* Boas práticas de UX (feedback ao usuário)

⸻

Melhorias futuras

* Integração com backend ou API
* Persistência de dados
* Melhorias de acessibilidade (ARIA)
* Animações e transições
* Testes automatizados

⸻

Autor

GitHub: https://github.com/devdiegorosa

⸻

Licença

Este projeto foi desenvolvido para fins educacionais.
