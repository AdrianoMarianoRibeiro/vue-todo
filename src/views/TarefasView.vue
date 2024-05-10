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
        v-for="tarefa, index in tarefas"
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
      tarefas: [
        {
          titulo: 'Ir ao mercado',
          concluido: false
        },
        {
          titulo: 'Comprar ração',
          concluido: false
        },
        {
          titulo: 'Jogar bola',
          concluido: false
        }
      ]
    }
  },
  methods: {
    handleAddTarefa() {
      if(this.campoInput) {
        this.tarefas.push({
          titulo: this.campoInput,
          concluido: false
        });

        this.campoInput = null;
      } 
    }
  }
}
</script>
