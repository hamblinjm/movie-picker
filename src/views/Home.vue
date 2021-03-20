<template>
  <div class="home">
    <img class="home-img" src="/images/main-cropped.jpg">
    <h1>Movie Picker</h1>
    <div class="filter-wrapper">
      <h2>Filter by:</h2>
      <div class="filter-grid">
        <div class="filter-box">
          <h3>MPA Rating</h3>
          <input type="radio" id="g" value="g" v-model="mpa">
          <label for="g">G</label>
          <br>
          <input type="radio" id="pg" value="pg" v-model="mpa">
          <label for="pg">PG</label>
          <br>
          <input type="radio" id="pg13" value="pg13" v-model="mpa">
          <label for="pg13">PG-13</label>
          <br>
          <input type="radio" id="other" value="other" v-model="mpa">
          <label for="other">Other</label>
          <br>
          <span>Selected: {{ mpa }}</span>
        </div>
        <div class="filter-box">
          <h3>Genre</h3>
          <input type="radio" id="drama" value="drama" v-model="genre">
          <label for="one">Drama</label>
          <br>
          <input type="radio" id="comedy" value="comedy" v-model="genre">
          <label for="two">Comedy</label>
          <br>
          <input type="radio" id="horror" value="horror" v-model="genre">
          <label for="two">Horror</label>
          <br>
          <input type="radio" id="thriller" value="thriller" v-model="genre">
          <label for="two">Thriller</label>
          <br>
          <input type="radio" id="scifi" value="scifi" v-model="genre">
          <label for="two">Scifi</label>
          <br>
          <span>Selected: {{ genre }}</span>
        </div>
      </div>
    </div>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MovieList from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    MovieList
  },
  data() {
    return {
      mpa: '',
      genre: ''
    }
  },
  computed: {
    movies() {
      return this.$root.$data.movies; //TODO FIX THIS
      // .filter(movie => movie.mpa_rating === mpa);
    }
  }
}
</script>

<style scoped>
.home-img {
  width: 100%;
  height: 400px;
}

.filter-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
}

.filter-box {
  width: 200px;
}
</style>
