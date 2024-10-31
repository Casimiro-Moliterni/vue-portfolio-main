<script>
import Headers from '../components/Headers.vue';

export default{
    name:'Game',
    components:{
      Headers
    }
}
</script>

<template>
  <section>
    <header>
      <a href="/">Casimiro.</a>
    </header>
    <div class="game-container">
      <!-- Inserisci qui il codice del tuo gioco, oppure un componente di gioco -->
      <iframe src="https://kata-memory-game-npgk.vercel.app/" class="game-iframe"></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>

section {
  position: relative;
  /* overflow: hidden; */
}

header {
  background-color: #3D005F;
  height: 80px;
  padding: 10px;
  z-index: 10; /* Assicura che l'header sia sopra all'iframe */

  a{
    cursor: pointer;
  }
}

a {
  color: white;
  font-size: 35px;
}


.game-iframe {
  width: 100%;
  min-height: calc(100vh - 80px);
  max-height: 150vh; /* Altezza del contenitore del gioco */
  border: none; /* Rimuovi il bordo dell'iframe */
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Mantieni questo se non vuoi scroll */
}

.game-container {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
