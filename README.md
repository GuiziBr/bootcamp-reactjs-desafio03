# Desafio 3 do bootcamp Rocketseat - React

Aplicação de repositório de localização de desenvolvedores. O usuário pode adicionar desenvolvedores ao mapa clicando sobre o mesmo e informando o username do
Github do desenvolvedor, dessa forma, a aplicação irá captar os dados do dev via API e salvá-lo
no estado do Redux.

## Conteúdo

1. Rotas

   1. /: Rota inicial que renderiza página com formulário para informar a idade
   2. /check: Rota chamada pelo formulário da página inicial via POST que verifica se a idade é maior que 18 e o redireciona para a rota /major, caso contrário o redireciona para a rota /minor
   3. /major: Rota que renderiza uma página com o texto "Você é maior de idade e possui x anos.", onde x é recebido como query param no redirecionamento da rota "/check"
   4. /major: Rota que renderiza uma página com o texto "Você é menor de idade e possui x anos.", onde x é recebido como query param no redirecionamento da rota "/check"

2. Middleware que é chamado nas rotas /major e /minor para validar se a informação de idade foi informada nos query params. Caso negativo, redireciona o usuário par a página inicial com o formulário, caso positivo, apenas continua o fluxo normal
