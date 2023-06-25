import RegAnalysisConfList from '@/views/RegAnalysisConfList.vue';
import {createRouter, createWebHistory} from "vue-router";
import ContinueDataUpdateSet from "@/views/ContinueDataUpdateSet.vue";

const routes = [
    // 其他路由规则
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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
