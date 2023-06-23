import RegAnalysisConfList from '@/views/RegAnalysisConfList.vue';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    // 其他路由规则
    {
        path: '/conf/reg_analysis_conf_list',
        name: 'reg_analysis_conf_list',
        component: RegAnalysisConfList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
