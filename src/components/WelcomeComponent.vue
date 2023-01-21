<template>
    <div id="container">
      <h1>Benvingut</h1>
      <div id="textCard">
        <p>Benvingut a la nostra aplicació de pressupostos per a pàgines web! </p>
        <p>Amb aquesta eina, podràs calcular el pressupost per al desenvolupament de la teva <b>pàgina web, consultoria SEO i campanya de Google Ads</b>. </p>
        <p>Selecciona les opcions que necessitis i, en cas d'escollir l'opció de pàgina web, podràs especificar el nombre de pàgines i llengües 
            per obtenir un pressupost final més precís.</p>
        <p> Gràcies per utilitzar la nostra aplicació i si necessites ajuda, no dubtis en contactar-nos.</p>
      </div>
    <button>    
      <router-link to="/home">Calcular Pressupost</router-link>
    </button>
  </div>
</template>

<style scoped lang="css">

  #container {
    padding: 70px;
    margin: 50px;
    background-color: #fffbf0;
  }

  #textCard{
    padding:40px 60px;
  }

  p {
    text-align:left;
  }

  button {
    border: 1px solid;
    padding: 1em;
    box-shadow: 5px 5px 0px 1px #FFD420;
    outline: 1px solid #FFD420;
    transition: outline 1s ease 0s;
  }

  button:hover {
    outline: 0px;
  }

  a {
    color: black;
    text-decoration: none;
    font-style: normal;
  }

  a:hover {
    color: black;
  }

</style>