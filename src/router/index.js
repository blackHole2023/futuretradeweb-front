import RegAnalysisConfList from '@/views/RegAnalysisConfList.vue';
import {createRouter, createWebHistory} from "vue-router";
import ContinueDataUpdateSet from "@/views/ContinueDataUpdateSet.vue";
import HomePage from "@/components/Home.vue";
import MinDataUpdateSet from "@/components/MinDataUpdateSet";

const routes = [
    // 其他路由规则
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/conf/reg_analysis_conf_list',
        name: 'reg_analysis_conf_list',
        component: RegAnalysisConfList
   },
    {
        path: '/conf/continue_data_update_set',
        name: 'continue_data_update_set',
        component: ContinueDataUpdateSet
    },
    {
        path: '/conf/min_data_update_set',
        name: 'min_data_update_set',
        component: MinDataUpdateSet
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
