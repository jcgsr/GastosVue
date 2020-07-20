<template>
  <div id="form">
    <h2>{{ titulo }}</h2>
    <form class="form-group">
      <input type="date" v-model="gastos.dataAtual" name="dataAtual" id="dataAtual" />
      <fieldset>
        <label class="control-label">Casa</label>
        <input
          name="casa"
          class="form-control"
          id="casa"
          type="number"
          v-model="gastos.casa"
          placeholder="1.126"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Luz</label>
        <input
          name="luz"
          class="form-control"
          id="luz"
          type="number"
          v-model="gastos.luz"
          placeholder="luz"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Água</label>
        <input
          name="agua"
          class="form-control"
          id="agua"
          type="number"
          v-model="gastos.agua"
          placeholder="água"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Ourocard</label>
        <input
          name="ouro"
          class="form-control"
          id="ouro"
          type="number"
          v-model="gastos.ouro"
          placeholder="ouro"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Net/TV</label>
        <input
          name="net_tv"
          class="form-control"
          id="net_tv"
          type="number"
          v-model="gastos.net_tv"
          placeholder="net_tv"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Saúde</label>
        <input
          name="saude"
          class="form-control"
          id="saude"
          type="number"
          v-model="gastos.saude"
          placeholder="saúde"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Educação</label>
        <input
          name="educacao"
          class="form-control"
          id="educacao"
          type="number"
          v-model="gastos.educacao"
          placeholder="educação"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">Carro</label>
        <input
          name="carro"
          class="form-control"
          id="carro"
          type="number"
          v-model="gastos.carro"
          placeholder="528.9"
        />
      </fieldset>

      <fieldset>
        <label class="control-label">INSS (Susi)</label>
        <input
          name="inss"
          class="form-control"
          id="inss"
          type="number"
          v-model="gastos.inss"
          placeholder="inss"
        />
      </fieldset>
      <button type="button" @click.prevent="inserir" class="btn btn-primary">Inserir Gastos</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Forulário de Gastos",
      name: "form",      
      gastos: {
        dataAtual: "",
        casa: "",
        luz: "",
        agua: "",
        ouro: "",
        net_tv: "",
        saude: "",
        educacao: "",
        carro: "",
        inss: ""
      }
    };
  },
  methods: {
     limpar() {
        this.gastos.dataAtual = '',
        this.gastos.casa = '',
        this.gastos.luz = '',
        this.gastos.agua = '',
        this.gastos.ouro = '',
        this.gastos.net_tv = '',
        this.gastos.saude = '',
        this.gastos.educacao = '',
        this.gastos.carro = '',
        this.gastos.inss = ''
     },
    inserir() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/gastos${finalUrl}`, this.gastos).then(() =>
        this.limpar()
      );
      alert("Gastos inseridos com sucesso!");
    }
  }
};
</script>

<style>
h2 {
  padding: 2rem;
}

.form-group input {
  margin-bottom: 1rem;
  max-width: 30%;
  margin: 0 auto;
}

.form-group button {
   margin-top: 1rem;
}

fieldset label,
button {
  margin: 1rem;
}
</style>