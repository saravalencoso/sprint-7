<template>
    <div id="checkboxes" style="display: block; text-align: left">
      <h1>Què vols fer?</h1>
    
      <input type="checkbox" id="webPage" value="500" @click="webPage=!webPage; shareLink(); webPageCount(); totalQuote()" :webPage="webPage">
      <label for="webPage">Una pàgina web (500€)</label><br>
      <!-- :to="{query: {seo: seo}}  -->

      <PanellComponent v-if="webPage" @changePages="changePages" :webQuote="changeLanguages"></PanellComponent>

      <input type="checkbox" id="seo" value="300" @click="seoCount(); totalQuote()" :seo="seo">
      <label for="seo">Una consultoria SEO (300€)</label><br>
  
      <input type="checkbox" id="googleAds" value="200" @click="adsCount(); totalQuote()" :googleAds="googleAds">
      <label for="googleAds">Una campanya de Google Ads (200€)</label><br>
  
      <br>
      
      <span>Preu: {{ quote + ' €'}}</span>

      <!-- <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" ref="tt" data-bs-placement="top" title="Tooltip on top">
        Tooltip on top
      </button> -->

      <router-link to="/">
        <button>TORNA</button>
      </router-link>

    </div>
</template>

<script>
import PanellComponent from './PanellComponent.vue'
// import { Tooltip } from 'bootstrap'

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
            console.log(this.$route)
            this.$router.push({
                name: 'home',
                query: {...this.$route.query, paginaWeb: value}
            })
        },
        seo: function(value) {
            this.$router.push({
                name: 'home',
                query: {...this.$route.query, seo: value}
            })
        },
        googleAds: function(value) {
            this.$router.push({
                name: 'home',
                query: {...this.$route.query, googleAds: value}
            })
        },
        numberPages: function(value) {
            this.$router.push({
                name: 'home',
                query: {...this.$route.query, numberPages: value}
            })
        },
        numberLanguages: function(value) {
            this.$router.push({
                name: 'home',
                query: {...this.$route.query, numberLanguages: value}
            })
        },
        "$route.query.paginaWeb":{ 
            immediate: true, handler(paginaWeb){
                console.log(`paginaWeb ha cambiado: ${paginaWeb}`)
            }
        }
    },
    mounted() {
        // new Tooltip(this.$refs.tt)
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
        }, 
        shareLink() {
            this.$router.push({
                name: 'home',
                id: `paginaWeb`
            })
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