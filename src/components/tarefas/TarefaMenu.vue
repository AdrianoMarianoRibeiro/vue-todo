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
                <v-list-item v-for="(item, index) in items" :key="index">
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
        <ModalEditar />
    </div>
</template>

<script>
import ModalEditar from '../modais/ModalEditar.vue';

export default {
    components: { ModalEditar },
    data: () => ({
        items: [
            {
                tooltip: 'Editar',
                icon: 'mdi-pencil',
                click() {

                }
            },
            {
                tooltip: 'Excluir',
                icon: 'mdi-trash-can',
            },
        ]
    })
}
</script>

<style></style>