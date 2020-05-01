<template>
<div class="">
  <div class="border-b border-gray-800">
      <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row ">
          <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" :alt="movie.title" class="w-64 md:w-96" >
          <div class="md:ml-24">
              <h2 class="text-4xl font-semibold">{{movie.title}} </h2>
               <div class="flex flex-wrap items-center text-gray-400  text-sm">
                            <span class="ml-1">
                                <svg class="" width="18" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h24v24H-3z"/><path d="M9 14.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.63l-4.83.41C.48 6.11.12 7.21.79 7.79l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.27z" class="fill-current"/></g></svg>
                            </span>
                            <span class="mx-2">{{movie.vote_average}} </span>
                            <span>| {{movie.genres}} |{{movie.release_date}} </span>
                </div>
                <p class="text-gray-300 mt-8">
                    {{movie.overview}}
                </p>
                <div class="mt-12">
                    <button class="flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-300 transition ease-in-out duration-150">
                        <a class="ml-2" :href="'https://www.youtube.com/watch?v='+movie.videos">Play Trailer</a>
                    </button>
                </div>
          </div>

      </div>
  </div>
  <div class="movie-cast border-b border-gray-800">
      <div class="container mx-auto px-4 pt-8 pb-4">
           <h2 class="text-4xl font-semibold">Cast</h2>
      </div>
        <div class="ml-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-8">
                <div class="" v-for="(cast, index) in movie.credits.cast" :key="index">
                    <a href="#">
                        <img :src="'https://image.tmdb.org/t/p/w300/'+cast.profile_path" alt="fff" class="hover:opacity-75 transition ease-in-out duration-100 w-48">
                    </a>
                    <div class="mt-2 items-center">
                        <a href="" class=" mt-2 hover:text-gray-300">{{cast.name}} </a>
                        <div class="text-gray-400 text-sm">
                            {{cast.character}}
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
            movie:{}
        }
    },
    methods: {
        async fetchMovie(){
            var id=this.$route.params.id;
            const {data} = await axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=ac968b9ed1563dd411c406bfeb7acf85&append_to_response=credits,videos,images');
            this.movie=data;
            console.log(data);
            this.movie.genres=data.genres.map(u=>u.name).join(", ");
            this.movie.videos=data.videos.results[0].key
            this.movie.credits.cast=data.credits.cast.slice(0,5)
            
        }
    },
    mounted() {
        this.fetchMovie();
    },
    
    }
</script>

<style>

</style>