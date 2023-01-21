<template>
    <form class="panell">
        <div class="inputDiv" 
            @change="webQuote(numberOfPages, numberOfLanguages)" 
            @click="webQuote(numberOfPages, numberOfLanguages)">

            <CounterComponent 
                :setPages="setNumberPages" 
                :setLanguages="setNumberLanguages" 
                @click="setNumberPages, setNumberLanguages"
            ></CounterComponent>

        </div> 
    </form>

    <br>
</template>

<script>
import CounterComponent from './CounterComponent.vue'

export default {
    name: 'PanellComponent', 
    components: {
        CounterComponent
    },
    emits: ['changePages'], 
    data() {
        return {
            numberOfPages:1, 
            numberOfLanguages:1        
        }
    }, 
    props: {
        webQuote: Function
    },
    methods: {
        setNumberPages(value) {
            this.numberOfPages = value;
            console.log(value)
        },
        setNumberLanguages(value) {
            this.numberOfLanguages = value;
            console.log(value)
        }
    }
}
</script>

<style scoped lang="css">
    .panell {
        border: 1px solid;
        border-radius: 15px;
        padding: 1em;
    }
    .inputDiv {
        display:block;
    }

</style>