<template>
  <div>
    <v-col
        cols="12"
      >
        <v-text-field
          v-model="campoInput"
          label="Qual sua tarefa?"
          outlined
          clearable
          @keyup.enter="handleAddTarefa"
        ></v-text-field>
      </v-col>
    <v-list 
      flat 
      subheader
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group 
        multiple 
        active-class=""
      >

      <div
        v-for="tarefa, index in $store.state.tarefas"
        :key="index"
      >
      <TarefaItem 
        :tarefa="tarefa"
      />
      </div>

      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

import TarefaItem from '../components/tarefas/TarefaItem.vue';

export default {
  name: 'TarefasView',
  components: {
    TarefaItem
  },
  data() {
    return  {
      campoInput: null,
    }
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit('adicionarTarefa', this.campoInput);
      this.campoInput = null;
    }
  }
}
</script>
