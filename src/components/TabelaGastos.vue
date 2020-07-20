<template>
  <div id="tabela">
    <h2>{{ titulo }}</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Casa</th>
          <th scope="col">Luz</th>
          <th scope="col">Água</th>
          <th scope="col">Ourocard</th>
          <th scope="col">Net/TV</th>
          <th scope="col">Saúde</th>
          <th scope="col">Educação</th>
          <th scope="col">Carro</th>
          <th scope="col">Inss</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-primary" v-for="(gasto, id) in gastosDados" :key="id">
          <td>{{ gasto.dataAtual }}</td>
          <td>{{ gasto.casa }}</td>
          <td>{{ gasto.luz }}</td>
          <td>{{ gasto.agua }}</td>
          <td>{{ gasto.ouro }}</td>
          <td>{{ gasto.net_tv }}</td>
          <td>{{ gasto.saude }}</td>
          <td>{{ gasto.educacao }}</td>
          <td>{{ gasto.carro }}</td>
          <td>{{ gasto.inss }}</td>
          <button type="button" class="btn btn-danger ml-2" @click="excluir(id)">Excluir</button>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" @click="exibir">Exibir Gastos</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Tabela de Gastos",
      gastosDados: [],
      id: null
    };
  },
  methods: {
    exibir() {
      this.$http.get("gastos.json").then(res => {
        this.gastosDados = res.data;
        console.log(this.gastosDados);
      });
    },
    excluir(id) {
      this.$http
        .delete(`/gastos/${id}.json`)
        .then(() => alert("Dados excluídos com sucesso!"));
    }
  }
};
</script>

<style>
#tabela button {
  margin-bottom: 1rem;
}
</style>