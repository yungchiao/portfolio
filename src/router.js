import Vue from 'vue';
import Router from 'vue-router';

import Home from '../src/components/Home.vue';
import ProjectDetail from '../src/components/works/ProjectDetail.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    // 處理返回位置、hash 平滑滾動
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' };
        }
        return { x: 0, y: 0 };
    },
    routes: [
        { path: '/', name: 'home', component: Home },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectDetail,
            props: true,
        },
        { path: '*', redirect: '/' },
    ],
});
