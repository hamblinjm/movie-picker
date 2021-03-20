<template>
    <div class="movies">
        <div v-for="movie in movies" :key="movie.id">
            <img :src="'images/' +movie.image">
            <h3>{{movie.title}}</h3>
            <h2>test</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieList',
    props: {
        movies: Array
    }
}
</script>

<style scoped>
/* .movie {
    width: 300px;
} */
</style>
