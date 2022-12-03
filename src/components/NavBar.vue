<template>
    <div class="top-bar">
        <ul>
            <li class="home"><a href="/">Home</a></li>
        </ul>
        <a class="frase" href="https://www.youtube.com/watch?v=Akk_lQzGSog" target="_blank">
            Keep your head above the water.</a
        >
    </div>
</template>

<script></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ledger&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

* {
    margin: 0px;
    padding: 0px;
}
:root {
    --color1: #2d2d2d;
    --segundary-color: #f4f4f5;
}

.frase {
    float: inline-end;
    color: #2d2d2d;
    font-family: 'Playfair Display', serif;
    margin-right: 40px;
    text-decoration: none;
    font-size: 15px;
}

.top-bar {
    height: 70px;
    line-height: 75px;
}

.top-bar ul {
    display: inline;
    float: left;
}

.top-bar li {
    display: inline;
    list-style: none;
}

.home a {
    color: #2d2d2d;
    text-decoration: none;
    padding: 5px;
    margin-left: 10px;
    font-family: 'Playfair Display', serif;
}

@media screen and (max-width: 480px) and (min-width: 320px) {
    body {
        width: 100%;
        height: 100%;
    }

    .top-bar {
        width: 100%;
        font-size: 22px;
        overflow: hidden;
    }

    .frase {
        font-size: 10px;
        float: right;
    }
}

@media screen and (max-width: 896px) and (min-width: 412px) {
    body {
        width: 100%;
        height: 100%;
    }

    .top-bar {
        width: 100%;
        font-size: 22px;
        overflow: hidden;
    }
}
</style>
