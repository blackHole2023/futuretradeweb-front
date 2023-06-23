import { createApp } from 'vue';
import App from './App.vue';
import DataTable from './components/DataTable.vue';



const app = createApp(App);
app.component('DataTable', DataTable);
app.mount('#app');
