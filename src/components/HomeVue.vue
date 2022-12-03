<template>
    <Nav />
    <div id="grid-1">
        <header>
            <div class="apresentacao-grid">
                <h1 class="titulo-apresentacao">Deixe apresentar-me</h1>

                <br />

                <div class="sub-apresentacao-grid">
                    <p class="conteudo-apresentacao">
                        Prazer, sou o Victor, meu primeiro contato com computadores vem desde bem novo, no entanto, esse
                        relacionamento se aprimorou quando comecei a trabalhar em uma loja de informatica, em que
                        formatei meu primeiro computador, lá tive contanto com diversas responsabilidades, como
                        trabalhar com atendimento, desenvolver artes com o CorelDraw e outras atividades em gerais.
                        Diante isso, foi possivel eu desenvolver minhas primeiras renponsabilidades profissionais e
                        metas para minha vida pessoal. Hoje, em um periodo de 4 anos, trabalho como chapeiro e também
                        estou estudando para atuar na área de desenvolvimento, o meu principal foco está no ambiente de
                        execução Node.js.
                    </p>
                    <br />
                    <p class="conteudo-apresentacao">
                        Computadores sempre estiveram presente na minha vida e sempre gostei muito de me envolver com
                        eles, portanto, escolhi a área da tecnologia para prosseguir com uma carreira profissional e
                        desbravar da melhor forma possível.
                    </p>
                </div>
            </div>
        </header>

        <br />
        <div class="skills-grid">
            <div class="skils-sub-grid">
                <h4 class="linguagem-h4">Linguagem, frameworks:</h4>
                <ul class="skills-ul">
                    <li>Javascript</li>
                    <li>Git</li>
                    <li>Jest</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Docker</li>
                </ul>
                <br />
                <h4 class="linguagem-h4">Banco de dados:</h4>
                <ul>
                    <li>Relacional (mySQL, postgreSQL)</li>
                    <li>não relacional (mongoDB)</li>
                    <li>Redis como armazemamento em cache</li>
                </ul>
                <br />
                <h4 class="linguagem-h4">Metodologias Àgeis:</h4>
                <ul>
                    <li>Scrum</li>
                </ul>
                <br />
                <p class="value">
                    Se especializar em novas tecnologias são sempre um desafio, com isso novas responsabilidades também,
                    é isto sempre será bem-vindo.
                </p>
                <p>
                    Todo conteúdo acima pode ser visto em meu
                    <a href="https://github.com/vitinhos67" target="_blank">Git Hub</a>
                </p>
            </div>
        </div>

        <br />
        <div class="social-grid">
            <h1 class="titulo__social">Sociais</h1>

            <div class="socil-icons-link">
                <a href="https://github.com/vitinhos67" name="github" target="_blank"
                    ><img class="social" src="../assets/github.png" alt="GitHub"
                /></a>
                <a href="https://twitter.com/victorsanttos67" target="_blank"
                    ><img class="social" src="../assets/twitter.png" alt="Twitter"
                /></a>
                <a href="https://www.linkedin.com/in/victor-santos-4b0a8a161/" target="_blank"
                    ><img class="social" src="../assets/linkedin.png" alt="Linkedin"
                /></a>
                <a href="https://medium.com/@santtosvictor42" target="_blank"
                    ><img class="social" src="../assets/medium.png" alt="Medium"
                /></a>
                <a href="https://dev.to/vitinhos67" target="_blank"
                    ><img class="social" src="../assets/dev-to.png" alt="Dev-to"
                /></a>
            </div>
            <br />
            <p class="curriculo-p">Voce pode encontrar minhas certificações através do meu currículo</p>
            <p class="curriculo-p">
                <a
                    class="curriculo-link"
                    href="https://drive.google.com/file/d/1GEmqKmwYjUlHOmK1zX1b09IDLLg_54mI/view?usp=share_link"
                    target="_blank"
                >
                    Clique aqui para ter acesso ao meu currículo.
                </a>
            </p>
        </div>
    </div>

    <br />
</template>

<script>
import Nav from './NavBar.vue'

export default {
    components: {
        Nav,
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ledger&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

:root {
    --primary-color: #FFFFFF;
    --color1: #917f6e;
    --text: #2d2d2d;
    --segundary-color : #F4F4F5;
    --font-text: font-family: 'Work Sans', sans-serif;
    --color4: #efe1d1;
    --border-color: #c6c6d9;
}

* {
    margin: 0px;
    padding: 0px;
}

a {
    text-decoration: none;
}

a:hover {
    color: var(--color1);
}

body {
    background-color: var(--primary-color);
    font-family: var(--font-text);
}
li {
    list-style: none;
}
#grid-1 {
    width: 800px;
    background-color: var(--segundary-color);
    padding: 10px 10px 10px 10px;
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px var(--border-color) dotted;
    border-radius: 10px;
    box-shadow: 1px 1px 20px 10px rgba(0,0,0,0.1);
}

.sub-apresentacao-grid {

    margin: -20px 10px 10px 10px;
    padding: 10px;
}

.apresentacao-grid {
    font-size: 20px;
}

.titulo-apresentacao {
    color: var(--text);
    font-family: 'Playfair Display', serif;
    margin: 10px;
}

.conteudo-apresentacao {
    color: var(--text);
    font-family: var(--font-text);
    font-size: 24px;
}

.social {
    width: 40px;
    padding-left: 5px;
    padding: 10px;
    filter: opacity(85%);
}


.titulo__social {
    padding-bottom: 10px;
    padding-left: 5px;
    padding-top: 10px;
    color: var(--text);
    text-align: center;
}

.skills-grid {
    text-decoration: none;
}

.social-grid {
    text-decoration: none;
    background-color: var(--primary-color);
    border: 1px dotted var(--color5);
    border-radius: 12px;
}

.skils-sub-grid {

    margin: 10px;
}



.socil-icons-link {
    text-align: center;
    padding-top: 2px;
    border-radius: 7px;
}

.curriculo-p {
    text-align: center;
    font-family: var(--font-text);
}
.curriculo-link {
    text-decoration: none;
}

.linguagem-h4 {
    font-family: var(--font-text);
    color: var(--text);
}

.skills-ul {
    font-family: var(--font-text);
}

@media screen and (max-width: 414px) {

.conteudo-apresentacao {
        font-size: 12px;
    }
.titulo__social {
    font-size: 10px;
}

.linguagem-h4 {
    font-size: 10px;
}

ul li {
    font-size: 10px;
}

p {
    font-size: 10px;
}

.curriculo-p {
    font-size: 10px;
}

.social {
    width: 22px;
}


}
@media screen and (max-width: 428px) {

.conteudo-apresentacao {
        font-size: 12px;
    }
.titulo__social {
    font-size: 10px;
}

.linguagem-h4 {
    font-size: 10px;
}

ul li {
    font-size: 10px;
}

p {
    font-size: 10px;
}

.curriculo-p {
    font-size: 10px;
}

.social {
    width: 22px;
}

}

@media screen and (max-width: 412px) and (min-width: 320px) {
    #grid-1 {
        width: 300px;
        margin-top: 0px;
    }

    .conteudo-apresentacao {
        font-size: 14px;
    }

    h1 {
        font-size: 12px;
    }
}

@media screen and (max-width: 896px) and (min-width: 412px) {
    body {
        width: 100%;
        height: 100%;
    }

    #grid-1 {
        width: 300px;
        float: none;
        margin-top: 0px;
    }

    h1 {
        font-size: 20px;
        text-align: left;
    }

    p {
        text-align: left;
    }
}

@media screen and(max-width:360px) and (min-width: 800px) {
    body {
        width: 100%;
        height: 100%;
    }

    #grid-1 {
        width: 430px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        font-size: 20px;
        text-align: left;
    }

    .curriculo-p {
        margin-left: auto;
        margin-right: auto;
    }
}
@media screen and (min-width: 436px) and (max-width: 882px) {
    body {
        width: 100%;
        height: 100%;
    }

    #grid-1 {
        width: 470px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        font-size: 20px;
        text-align: left;
    }

    .curriculo-p {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
