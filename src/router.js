import VueRouter from 'vue-router';
import Vue from 'vue';

import Index from './pages/Index.vue';
import Movie from './pages/Movie.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes:[
        {
            path:'/',
            component:Index,
            name:'index'
        },
        {
            path:'/movie/:id',
            component:Movie,
            name:'movie'
        }
    ]
});
