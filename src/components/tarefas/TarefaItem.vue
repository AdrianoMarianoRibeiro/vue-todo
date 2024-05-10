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
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style>

</style>