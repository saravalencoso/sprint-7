<template>
    <!-- Pages -->
    <div class="inputDiv">
        <p class="label">Nombre de pàgines:</p>
        <div id="divPag">
            <button @click.prevent="pageQty(-1); setPages(pages)" >-</button>
            <input 
                min="1"
                placeholder="1"
                type="number"
                v-model="pages"
                @change="setPages(pages)"
            > 
            <button @click.prevent="pageQty(1); setPages(pages)">+</button>
        </div>
    </div>

    <!-- Languages -->
    <div class="inputDiv">
        <p class="label">Nombre d'idiomes:</p>
        <div>
            <button @click.prevent="langQty(-1); setLanguages(languages)" >-</button>
            <input 
                min="1"
                placeholder="1"
                type="number"
                v-model="languages"
                @change="setLanguages(languages)"
            > 
            <button @click.prevent="langQty(1); setLanguages(languages)">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CounterComponent", 
    emits: ['click'],
    data() {
        return {
            pages: 1, 
            languages: 1 
        }
    },
    watch: { // observa las variables pages y languages
        pages:function(value) {
            this.pages = value;
            //console.log(this.pages)
        },
        languages:function(value) {
            this.languages = value;
            //console.log(this.languages)
        }
    },
    props: {
        setPages: Function,
        setLanguages: Function
    }, 
    methods: {
        pageQty(value) {
            if(value < 0 && this.pages > 1) { this.pages += value; }
            if(value > 0 && this.pages >= 1) { this.pages += value; }
            console.log(this.pages)
        },
        langQty(value) {
            if(value < 0 && this.languages > 1) { this.languages += value; }
            if(value > 0 && this.languages >= 1) { this.languages += value; }
            console.log(this.languages)
        }
    }
}
</script>

<style scoped lang="css">
    div {
        display:flex;
    }
    input {
        width: 35px;
        text-align: center;
        margin: 10px;
        padding-left: 0px;
    }
    .label {
        width: 150px;
    }

    #divPag {
        margin-bottom:5px;
    }

</style>