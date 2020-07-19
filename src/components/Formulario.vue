<template>
   <div id="form">
      <h2>{{ titulo }}</h2>
   </div>
</template>

<script>
export default {
   data() {
      return {
         titulo: 'Forulário de Gastos'
      }      
   }
}
</script>

<style>
h2 {
   padding: 2rem;
}
</style>