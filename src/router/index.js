import Vue from 'vue';
import Router from 'vue-router';
import constanRoutes from './routes';
import applyRouterMiddleware from './applyMiddleware';

Vue.use(Router);

const router = new Router({
    routes: constanRoutes
    // mode: 'history'
});

applyRouterMiddleware(router);

export default router;
