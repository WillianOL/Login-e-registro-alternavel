const botaoRegistro = document.querySelector("[data-botao='register']");
const botaoLogin = document.querySelector("[data-botao='login']");
const formLogin = document.querySelector("[data-formulario='login']");
const formRegister = document.querySelector("[data-formulario='register']");
const fraseFormulario = document.querySelector(".frase-destaque");

const classBotao = "botao-ativo";
const classDisplayRemove = "tiraDisplay";
const classApareceForm = "aparece-form";
const classEscondeForm = "esconde-form";

function trocarParaRegister() {
    if (botaoRegistro.classList.contains(classBotao)) {
        formLogin.classList.add(classEscondeForm);
        fraseFormulario.innerHTML = "Seja bem-vindo(a), <span>participe do time!</span>";

        setTimeout(() => {
            if (formRegister.classList.contains(classDisplayRemove)) {
                formRegister.classList.remove(classDisplayRemove);
                formRegister.classList.remove(classEscondeForm);
                formRegister.classList.remove(classApareceForm);
            }
            formLogin.classList.add(classDisplayRemove);
            formRegister.classList.add(classApareceForm);
            botaoLogin.classList.add(classBotao);
            botaoRegistro.classList.remove(classBotao);
        }, 1000);
    }
}

function trocarParaLogin() {
    if (botaoLogin.classList.contains(classBotao)) {
        formRegister.classList.add(classEscondeForm);
        fraseFormulario.innerHTML = "Bem-vindo de volta! <span>Faça o login.</span>";

        setTimeout(() => {
            if (formLogin.classList.contains(classDisplayRemove)) {
                formLogin.classList.remove(classDisplayRemove);
                formLogin.classList.remove(classEscondeForm);
                formLogin.classList.remove(classApareceForm);
            }
            formRegister.classList.add(classDisplayRemove);
            formLogin.classList.add(classApareceForm);
            botaoRegistro.classList.add(classBotao);
            botaoLogin.classList.remove(classBotao);
        }, 1000);
    }
}

botaoRegistro.addEventListener("click", trocarParaRegister);
botaoLogin.addEventListener("click", trocarParaLogin);
