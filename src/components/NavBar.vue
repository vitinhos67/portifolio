<template>
    <div class="top-bar">
        <ul>
            <li><a href="/">Home</a></li>
        
            
        </ul> 
        <a class="frase" href="https://www.youtube.com/watch?v=Akk_lQzGSog" target="_blank">Keep your head above the water.</a>
    </div>
   
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.frase {
    color: var(--color1);
    float: inline-end;
    margin-right: 40px;
    text-decoration: none;
    font-size: 15px;

}

.frase {
    color: var(--color1)
}

:root {
    --color1 :#868b8e;
}


.top-bar {
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 70px;
    line-height: 75px;
    background-color: var(--nav-bar-color);
    border-bottom: 1px solid var(--nav-bar-color);
    box-shadow: 2px 2px var(--nav-bar-color);
}

.top-bar ul {
    display: inline;
    float: left;
}

.top-bar li {
    display: inline;
    list-style: none;
}

.top-bar ul li a {
    color: #2d2d2d;
    text-decoration: none;
    padding: 5px;
    margin-left: 10px;

}

@media screen and (max-width: 480px) and (min-width:320px) {
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


@media screen and (max-width:896px) and (min-width:412px) {
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