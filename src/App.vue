<template>
  <b-container id="container" style="background-color: #fffbf0">
    <router-view></router-view>
  </b-container>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped lang="css">
  #container {
    background-color: #FEFCF4;
  }
</style>