import { createApp } from 'vue';
import App from './App.vue';
import ContinueDataUpdateSet from './components/ContinueDataUpdateSet.vue';
import RegAnalysisConf from './components/RegAnalysisConf.vue';
import Home from "./components/Home.vue";
import { createRouter, createWebHistory } from 'vue-router';
import MinDataUpdateSet from "@/components/MinDataUpdateSet";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/conf/continue_data_update_set', component: ContinueDataUpdateSet },
        { path: '/conf/reg_analysis_conf_list', component: RegAnalysisConf },
        { path: '/conf/min_data_update_set', component: MinDataUpdateSet},
        { path: '', component: Home},
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
