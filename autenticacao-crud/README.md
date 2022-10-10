## ## Desafio 02 - Autenticação e CRUD

🚧 Projeto incompleto

### Conteúdo

<p align="center">  
	<a href="#sobre-projeto">Sobre o projeto</a> •
	<a href="#layout">Layout</a> • 
	<a href="#executar-projeto">Como executar o projeto</a> • 
	<a href="#tecnologias">Tecnologias</a> • 
	<a href="#autora">Autora</a>  
</p>

### 💻 Sobre o Projeto<a id="sobre-projeto"></a>

 1. A página inicial do projeto é uma tela de login, com email e senha fixos para autenticação (email: admin@email.com; senha: admin), caso autenticado é gerado o token (que expira a cada 5 minutos) e enviado para a página com os produtos cadastrados, se não for autenticado, aparece um alerta que o usuário é inválido.
 2. A página mostra uma lista com todos os produtos cadastrados, possibilidade de ordenação dos campos de nome, data de fabricação, data de validade e produtos perecíveis e com uma paginação de 10 produtos por página.
 3. Na página de produtos, cada produto tem um ícone para editar e excluir e um botão para adicionar um novo produto contendo todos os campos solicitados (Nome; Data de fabricação; Produto perecível (booleano); Data de validade; Preço;)
 4. O botão 'cadastrar' leva até a página de cadastro
	- [x] o usuário só poderá cadastrar data de validade caso o produto esteja marcado como perecível (input radio)
	- [x] a data de fabricação nunca deverá ser maior que a data de validade, mostrando um alert caso seja
	- [x] o preço está estar em reais (R$)
 5. Ao clicar no botão de editar é enviado a página  de cadastro novamente, porém com os campos preenchidos.
 6. O backend é simulado com  [json-server](https://www.npmjs.com/package/json-server), que cria uma API REST fake;

    
### 🎨  Layout <a id="layout"></a>
 ![enter image description here](https://github.com/hortenciacortes/teste-front-end/blob/desafio-02/hortencia-cortes/autenticacao-crud/src/assets/desafio02.gif?raw=true)
 
### 🚀  Como executar o projeto <a id="executar-projeto"></a>

#### 🎲Rodando a Aplicação

*Backend - API*

    # Acesse a pasta (autenticacao-crud) no terminal
	    node server.js
    # O servidor iniciará na porta: 3000
			Para ter acesso as informações é necessário passar as informações de user e password pelo body
			{
				"user": "admin@email.com",
				"password": "admin"
			}

*Web*

    # Acesse a pasta (autenticacao-crud) no terminal
	  # Instale a dependência do npm
	    npm install
    # Execute a aplicação em modo de desenvolvimento
	    npm start
    # Irá aparecer uma mensagem com a informação de onde o servidor está rodando
	    ex. Local: http://127.0.0.1:5173/
	    Segure a tecla ctrl e clique em cima ou cole o endereço no seu navegador.


### 🛠 Tecnologias <a id="tecnologias"></a>

Esse projeto está sendo desenvolvido com as seguintes tecnologias:

- ReactJS
- Redux
- Axios
- phosphor-react
- jsonwebtoken

### 👧 Autora <a id="autora"></a>

Feito com 💖 por Hortência Côrtes 👩‍💻 
