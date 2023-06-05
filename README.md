<div> 
  <h1 align="center">Login e registro alternável - Projeto JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Aplicação de uma página de login e registro alternável</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/4ed90892-f164-441c-9dae-24d25ebf3fe5" width='850px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias: </p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>
	
<div>
	<p>Projeto de uma página alternável entre login e registro. Neste projeto, foi muito trabalhado a manipulação do DOM com as classes CSS, adicionando e removendo classes. Também fazendo o uso do método setTimeOut() e outros.</p>
	<p>A aplicação consiste em uma tela de login e registro que alterna entre elas de acordo com a nescessidade do usuário. A alteração das telas é feita pelos botões localizados no topo da página, que são "LOGIN" e "SIGN UP". Se a tela estiver em login, o botão sign-up ficará disponivel, se estiver em sign-up o botão de login ficará disponivel e vice-versa.</p>
</div>

### Acessar projeto: ✈

◻<a href="https://willianol.github.io/Login-e-registro-alternavel/assets/index.html">Login e registro alternável</a>


## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

### Vareáveis importantes

<div>
	<p>Para a construção do funcionamento da aplicação, foram definidas as vareáveis principais. Que são:<p>
	<ul>
		<li><strong>botaoRegistro</strong> - Botão de registro do topo do formulário;</li>
		<li><strong>botaoLogin</strong> - Botão de login do topo do furmuçário;</li>
		<li><strong>formLogin</strong> - Fomulário de login;</li>
		<li><strong>formRegister</strong> - Formulário de registro;</li>
		<li><strong>fraseFormulario</strong> - Frase que fica no topo do formulário;</li>
	</ul>
	<p>É a partir delas que vai ser construida a aplicação.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/88b9bd87-a48a-47a1-aa98-823f65304ef2" width="700px">
</div>

&nbsp;
&nbsp;

### Vareáveis de classe - Clean code

<div>
	<p>Basicamente, todo a aplicação foi construida a partir da manipulação do DOM adicionando e removendo classes CSS, cada uma com sua função expecífica. Então para o código não ficar "poluído" e facilitar a manuntenção no código, as classes foram armazenadas dentro de vareáveis(const) em forma de string. São elas:</p>
	<ul>
		<li><strong>classBotao</strong> - classe que adiciona os estilos ao botão que é clicável;</li>
		<li><strong>classRemoveDisplay</strong> - classe que remove o display do formulário;</li>
		<li><strong>classApareceForm</strong> - classe que dispara a animação de surgimento do formulário;</li>
		<li><strong>classEscondeForm</strong> - classe que dispara a animação que esconde o formulário;</li>
	</ul>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/68556588-2bf2-426f-a28a-413476aee929" width="700px">
</div>

&nbsp;
&nbsp;

### Alteração de tela - Login/Sign up

<div>
	<p>Primeiro, nos botões que serão responsáveis por trocar de tela(login e sign up) foi adicionado uma função com evento de click neles através do <strong>addEventListener().</strong> No de login, foi adicionado a função <strong>"trocarParaLogin"</strong> e no de sign-up foi adicionado a função <strong>"trocarParaRegister".</strong></p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/39a22517-fec6-4e6c-bf6f-d440080f97e3" width="700px">
</div>

&nbsp;

<div>
	<p>Como a página já abre com o furmulario de login a mostra, o botão de registro fica disponivel para o clique. Sendo assim, será executada a função "trocarParaRegister" primeiro.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/16bcb932-6cb7-47eb-a929-aae3c906d90a" width="700px">
</div>

&nbsp;

#### Função trocarParaRegister

<div>
	<p>Na função, é feita uma verificação com a estrutura de condição IF, que é o seguinte: Se o botão de regitro conter a classe "botão-ativo"(classBotao) executa o código. Fiz isso para a função só ser executada quando o botão estiver disponivel, evitando conflitos e bugs no código.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Login-e-registro-alternavel/assets/112639055/418bcce2-67ab-45f1-8c3c-b92a837a7dab" width="700px">
</div>

<div>
	<p>Depois, no formulário de login é adicionado a classe que vai disparar a animação de esconder o formulário. E trocando a frase da tela (fraseFormulario) com o innerHTML.</p>
</div>




















