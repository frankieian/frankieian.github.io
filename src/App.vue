<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import NavBar from "./components/NavBar.vue"

const router = useRouter()


</script>

<template>
  <div class="wrapper">

  <header>
    <NavBar/>
  </header>

  <RouterView />
  </div>
</template>

<style>

#app {
  font-family: 'Montserrat';
}

.wrapper {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}


.p-component {
  font-family: 'Montserrat';
  font-size: large;
}

</style>