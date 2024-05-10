<template>
  <div>
    <v-list-item
      :class="{'blue lighten-2':tarefaLocal.concluido }"
      @click="toggleConcluido"
    >
      <template v-slot:default="{  }">
        <v-list-item-action>
          <v-checkbox :input-value="tarefaLocal.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through':tarefaLocal.concluido}"
          >
            {{ tarefa.titulo }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <!-- <v-btn 
            icon
            @click.stop="handleRemoveTarefa(tarefa.id)"
          >
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn> -->
          <TarefaMenu />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>

import TarefaMenu from './TarefaMenu.vue';

export default {
  components: {
    TarefaMenu
  },
  props: ['tarefa'],
  data() {
    return {
      tarefaLocal: {} // inicializa a cópia local da tarefa
    };
  },
  mounted() {
    // Ao montar o componente, copie os dados da propriedade tarefa para tarefaLocal
    this.tarefaLocal = { ...this.tarefa };
  },
  methods: {
    toggleConcluido() {
      // Modifica apenas a cópia local
      this.tarefaLocal.concluido = !this.tarefaLocal.concluido;
    },
    handleRemoveTarefa(id) {
      this.$store.commit('removeTarefa', id);
    }
  }
}
</script>

<style>

</style>