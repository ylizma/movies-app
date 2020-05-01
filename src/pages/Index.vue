<template>
    <div class="container mx-auto px-4 py-16 ">
        <div class="popular-movies">
            <h2 class="uppercase tracking-wider text-orange-400 text-lg font-semibold">
                Top rated movies
            </h2> 
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-8">
                <div class="mt-8" v-for="(movie, index) in topMovies" :key="index">
                    <router-link :to="'/movie/'+movie.id">
                        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="fff" class="hover:opacity-75 transition ease-in-out duration-100">
                    </router-link>
                    <div class="mt-2 items-center">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">{{movie.title}} </a>
                        <div class="flex items-center text-gray-400  text-sm">
                            <span class="ml-1">
                                <svg  width="18" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h24v24H-3z"/><path d="M9 14.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.63l-4.83.41C.48 6.11.12 7.21.79 7.79l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.27z" class="fill-current"/></g></svg>
                            </span>
                            <span class="mx-2">{{movie.vote_average}} </span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            action,comedy
                        </div>
                    </div> 
                </div>             
            </div>
        </div>
        <div class="popular-movies border-t border-gray-800 pt-16 mt-16">
            <h2 class="uppercase tracking-wider text-orange-400 text-lg font-semibold">
                Now playing movies
            </h2> 
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-8">
                <div class="mt-8" v-for="(movie, index) in playingMovies" :key="index">
                    <router-link :to="'/movie/'+movie.id">
                        <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="fff" class="hover:opacity-75 transition ease-in-out duration-100">
                    </router-link>
                    <div class="mt-2 items-center">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">{{movie.title}} </a>
                        <div class="flex items-center text-gray-400  text-sm">
                            <span class="ml-1">
                                <svg class="" width="18" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h24v24H-3z"/><path d="M9 14.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.63l-4.83.41C.48 6.11.12 7.21.79 7.79l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.27z" class="fill-current"/></g></svg>
                            </span>
                            <span class="mx-2">{{movie.vote_average}} </span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            action,comedy
                        </div>
                    </div> 
                </div>             
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            topMovies:[],
            playingMovies:[]
        }
    },
    methods: {
          fetchMovies (){
            axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ac968b9ed1563dd411c406bfeb7acf85')
            .then(res=>this.topMovies=res.data.results) 
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ac968b9ed1563dd411c406bfeb7acf85')
            .then(res=>this.playingMovies=res.data.results)
        }
    },
    mounted() {
        this.fetchMovies();
    },
}
</script>

<style>

</style>