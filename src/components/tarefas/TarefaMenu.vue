<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                    <v-icon>
                        mdi-dots-vertical
                    </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" 
                    :key="index"
                    @click="item.click()"
                >
                    <span :class="item.color">
                        <v-tooltip left>
                            <template v-slot:activator="{ on }">
                                <v-icon left v-on="on">{{ item.icon }}</v-icon>
                            </template>
                            <span>{{ item.tooltip }}</span>
                        </v-tooltip>
                    </span>
                </v-list-item>
            </v-list>

        </v-menu>
        <ModalEditar 
            v-if="items[0].modal"
            @fechaModal="items[0].modal = false"
            :tarefa="tarefa"
        />

        <ModalDelete 
            v-if="items[1].modal"
            @fechaModal="items[1].modal = false"
            :tarefa="tarefa"
        />
    </div>
</template>

<script>
import ModalEditar from '../modais/ModalEditar.vue';
import ModalDelete from '../modais/ModalDelete.vue';

export default {
    props: ['tarefa'],
    components: { ModalEditar, ModalDelete },
    data: () => ({
        items: [
            {
                tooltip: 'Editar',
                icon: 'mdi-pencil',
                modal: false,
                click() {
                    this.modal = true
                }
            },
            {
                tooltip: 'Excluir',
                icon: 'mdi-trash-can',
                modal: false,
                click() {
                    this.modal = true
                }
            },
        ]
    })
}
</script>

<style></style>