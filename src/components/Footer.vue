<template>
  <div>
    <p>{{ currentDate }}</p>
    <footer class="footer">
      &copy;{{ footer }}   <br />
      {{ footer2 }}   
      <br />
      <div class="foot">        
        {{ msg }}
        <a class="btn btn-primary" :href="link">Jovane</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - GastosVue.",
      footer2: "Webapp para registrar os gastos mensais.",
      msg: "Criado e desenvolvido em Vue.js por ",
      link: "https://jcgsr.github.io/",
      currentDate: 'Data de hoje...'
    }
  },
  methods: {
    dataAtual: function() {
      let hoje = new Date()
      this.currentDate = hoje.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    }
  },
  mounted() {
    this.dataAtual()
  }
}
</script>

<style scoped>
footer {
  text-align: center;  
  padding: 0.6rem;
  background-color: black;
  
}
.foot {
  font-size: small;
  padding: 0.5rem;  
}

.foot a:link {
  text-decoration: none;
}

.foot a{   
   font-size: small;
}
p {
  text-align: center;
  margin-top: 6rem; 
}
</style>