<script setup lang="ts">
  
  import { ref, type PropType } from 'vue';
  import Menubar from 'primevue/menubar';
  //import { useRouter } from 'vue-router'
  import {routes} from "@/router/index"
  import { capitalise } from '@/lib/helper';

  //const router = useRouter()
  const routers = routes.map( route => ({label: capitalise(route.name), icon: route.icon, to: route.path})) as any
  const items = ref(routers)

</script>
<template>
    <!-- Navbar !-->
    <div class="navbar">
      <Menubar :model="items" >
        <template #start>
            <img alt="logo" src="../assets/momo.png" height="50" class="mr-2" />
        </template>
      </Menubar>
    </div>
     <!-- Navbar -->
</template>

<style>

.navbar {
  background: var(--surface-card);
  padding: 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  position: relative;
  font-family: 'Montserrat';
}

    
</style>