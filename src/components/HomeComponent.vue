<template>
    <div id="checkboxes" style="display: block; text-align: left">
      <h1>Què vols fer?</h1>

      <input type="checkbox" id="webPage" value="500" @click="webPage=!webPage; webPageCount(); totalQuote()" :webPage="webPage">
      <label for="webPage">Una pàgina web (500€)</label><br>
      
      <PanellComponent v-if="webPage" @changePages="changePages" :webQuote="changeLanguages"></PanellComponent>

      <input type="checkbox" id="seo" value="300" @click="seoCount(); totalQuote()" :seo="seo">
      <label for="seo">Una consultoria SEO (300€)</label><br>
  
      <input type="checkbox" id="googleAds" value="200" @click="adsCount(); totalQuote()" :googleAds="googleAds">
      <label for="googleAds">Una campanya de Google Ads (200€)</label><br>
  
      <br>
      
      <span>Preu: {{ quote + ' €'}}</span>

      <router-link to="/">
        <button>TORNA</button>
      </router-link>

    </div>
</template>

<script>
import PanellComponent from './PanellComponent.vue'

export default {
    name:'HomeComponent', 
    components: {
        PanellComponent
    },
    data(){
        return{
            webPage: false,
            numberPages: 1,
            numberLanguages: 1,
            webPageTotal: 0,
            seo: false,
            seoTotal: 0,
            googleAds: false,
            googleAdsTotal: 0, 
            quote: 0
        }
    },
    watch: {
        webPage: function(value) {
            if(value === false) {
                this.numberPages = 1;
                this.numberLanguages = 1;
            }
        }
    },
    methods:{ 
        webPageCount(){
            if(this.webPage){
                this.webPageTotal = 500
                if(this.numberPages > 1 || this.numberLanguages > 1) {
                  this.webPageTotal = 500 + (this.numberPages * this.numberLanguages * 30)
                } 
            }
            else{this.webPageTotal = 0}
            this.totalQuote()
        },
        changePages(param) {
            this.numberPages = param;
            this.webPageCount();
        }, 
        changeLanguages(pages, languages) {
            this.numberPages = pages;
            this.numberLanguages = languages;
            console.log(this.numberLanguages);
            this.webPageCount();
        },
        seoCount(){
            this.seo = !this.seo;
            if(this.seo){this.seoTotal = 300}
            else{this.seoTotal = 0}
        },
        adsCount(){
            this.googleAds = !this.googleAds;
            if(this.googleAds){this.googleAdsTotal = 200}
            else{this.googleAdsTotal = 0}
        }, 
        totalQuote(){
            // probar como propiedad computada/watchers
            this.quote = this.webPageTotal + this.seoTotal + this.googleAdsTotal;
        }
    }
}
</script>
  
<style scoped lang="css">
    h1 {
        margin-bottom: 40px;
    }

    span {
        display: block;
        margin-bottom: 30px;
    }

    label {
        margin-bottom: 10px;
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

</style>