<template>
  <div class="pa-3">
    <h1>Sobre</h1>
      <p>
        Essa é uma lista de tarefas desenvolvida para fins didáticos
        com Vue.js.
      </p>
      <p>  
        Utilizamos uma variedade de ferramentas amplamente reconhecidas e valorizadas no mercado de trabalho.
        Algumas ferramentas utilizadas aqui foram:
      </p>
      <v-list>
      <template v-for="(item) in tecnologias">

        <v-list-item
          :key="item.titulo"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr>
    <section>
      <p>
        <v-card-title>Obrigado por prestigiar o projeto!!!</v-card-title>
        <v-card-subtitle >Contato:</v-card-subtitle>
        <v-card-text>
        <strong>🧑‍💻 Adriano Ribeiro</strong><br>
        <img src="../assets/octocat.png" height="20px" alt="imagem octocat" /> <a href="https://github.com/AdrianoMarianoRibeiro/vue-todo/tree/master">/AdrianoMarianoRibeiro</a>
        </v-card-text>
      </p>
    </section>
      
  </div>
</template>

<script>

export default {
  data() {
    return{
      tecnologias:[
        {
          titulo: "HTML",
          icon: "mdi-language-html5"
        },
        {
          titulo: "Vue.js 2",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify"
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs"
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs"
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database"
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition"
        },
        {
          titulo: "Git",
          icon: "mdi-git"
        },
        {
          titulo: "GitHub",
          icon: "mdi-github"
        },
      ]
    }
  }
}
</script>

