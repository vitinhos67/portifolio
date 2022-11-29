<template>
    
<Nav/>   
<div id="grid-1">
      
       <header>
            <h1>Deixe apresentar-me</h1>
            <p>Prazer, me chamo Victor, estou no final do ensíno medio e busco por uma oportunidade na área de desolvimento web, mais voltado para o back end em que tenho maior conformidade. Estudo Javascript e seus paradigmas. <br/>
            Computadores sempre estiveram presente na minha vida e sempre gostei muito de me envolver com eles, portanto, escolhi a área da tecnologia para prosseguir com uma carreira profissional e pretento desbravar da melhor forma possível. Tentarei me especializar através de uma universidade federal.
            </p>
            
        </header>
        
        <hr/>
        <br/>

        Atualmente me especializo sobre:
        
        <h4>Linguagem, frameworks:</h4>
        <ul>
            <li>Javascript</li>
            <li>Git</li>
            <li>Jest</li>
            <li>Node</li>
            <li>Express</li>
            <li>Docker</li>
            <li>Nginx</li>
        </ul>
        
        <br/>

        <h4>Banco de dados:</h4>
        <ul>
            <li>Relacional (mySQL, postgreSQL)</li>
            <li>não relacional (mongoDB)</li>
            <li>Redis como armazemamento em cache</li>
        </ul>

        <h4>Metodologias Àgeis</h4>
        <ul>
            <li>Scrum</li>
        </ul>
        <br/>
        <p>Se especializar em novas tecnologias são sempre um desafio, 
        com isso, novas responsabilidades também, é isto sempre será bem-vindo.</p>

        Todo conteúdo acima pode ser visto em meu <a href="https://github.com/vitinhos67" target="_blank">Git Hub</a>

        <hr/>
        <br/>

    <h2>Sociais</h2>
    <a href="https://github.com/vitinhos67" name="github" target="_blank">Github</a> /
    <a href="https://twitter.com/victorsanttos67" target="_blank">Twitter</a> /
    <a href="https://www.linkedin.com/in/victor-santos-4b0a8a161/" target="_blank">Linkedin</a> /
    <a href="https://medium.com/@santtosvictor42" target="_blank">Medium</a> /
    <a href="https://dev.to/vitinhos67" target="_blank">Dev-to</a> /


    <p class="curriculo-p"> Clique aqui para ter acesso ao meu curriculo:</p>
    <a href="https://drive.google.com/file/d/1GEmqKmwYjUlHOmK1zX1b09IDLLg_54mI/view?usp=share_link" target="_blank">
       <img src="../assets/pdf.png" alt="Curriculo">
    </a>
</div>    

<br>

</template>

<script>

import Nav from './NavBar.vue'


export default {
    components: {
        Nav
    }
}
</script>
    

<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ledger&display=swap');



:root{
    --primary-color: #eeeeee;
    --color1 : #917f6e;
    --text :#2d2d2d;
    --color4 : #efe1d1;


}

body {
background-color: var(--primary-color);
text-align: center;
font-family: 'Ledger', serif;
}
li {
    list-style: none;
}
#grid-1 {
    
    width: 800px;
    background-color: #f5f5f3;
    height: 100%;
    padding: 40px 40px 40px 40px;
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    float: initial;
    border-left: 1px var(--color1) solid;
    border-right: 1px var(--color1) solid;
    border-top: 1px var(--color1) solid;
    box-shadow: 1px 1px 4px var(--color1);

}
h1 {
   color: var(--text);
   font-size: 45px;
}

h2 {
    color: var(--text);
}

hr {
    margin-top: 10px;
    color: var(--color4)
}

a {
    color: var(--text)
}


p {
    color: var(--text);
    float: left;
    padding-bottom: 10px;
}

.curriculo-p {
    float: none;  
}

a button {
    margin-bottom: 20px;
}


@media screen and (max-width: 480px) and (min-width:320px){


#grid-1 {
    width: 300px;
    margin-top: 0px;
    
    
    
}

h1 {
    font-size: 20px;

}


}

@media screen and (max-width:896px) and (min-width:412px) {
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

@media screen and(max-width:360px) and (min-width: 800px)  {
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
@media screen and (min-width:436px) and (max-width:882px) {
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