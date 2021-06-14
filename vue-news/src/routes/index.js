import Vue from "vue";
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from "../views/JobsView";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          redirect: 'news'
        },
        {
            // path: url 주소에 대한 정보
            path: '/news',
            // component: url 주소로 이동했을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ]
});