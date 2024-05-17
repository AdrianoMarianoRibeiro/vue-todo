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
        <v-subheader><h1>Tarefas</h1></v-subheader>
  
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
import TarefaItem from './TarefaItem.vue';

export default {
    components: {
        TarefaItem,
    },
    computed: {
        tarefasComputadas() {
            return this.$store.state.tarefas;
        }
    }
  ,
  data(){
      return{
        campoInput: null,
      }
    },
    methods:{
      handleAddTarefa(){
        this.$store.dispatch('adicionaTarefa', this.campoInput)
        this.campoInput = null;
      }
    }
}
</script>

<style></style>