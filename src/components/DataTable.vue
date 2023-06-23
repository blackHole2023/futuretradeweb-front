<template>
  <div>
    <table class="table-custom">
      <thead>
      <tr>
        <th>Variety 1</th>
        <th>Variety 2</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Is Work</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableData" :key="item.variety1">
        <td>{{ item.variety1 }}</td>
        <td>{{ item.variety2 }}</td>
        <td>{{ item.start_time }}</td>
        <td>{{ item.end_time }}</td>
        <td>{{ item.is_work }}</td>
      </tr>
      </tbody>
    </table>
    <button v-if="hasPreviousPage" @click="fetchPreviousPage">Previous</button>
    <button v-if="hasNextPage" @click="fetchNextPage">Next</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
      page: 1,
      perPage: 20,
      totalPages: 0,
      hasPreviousPage: false,
      hasNextPage: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = '/conf/reg_analysis_conf_list/';
      const params = {
        page_number: this.page,
        per_page: this.perPage
      };

      axios.get(url, { params })
          .then(response => {
            this.tableData = response.data.data;
            this.page = response.data.page;
            this.perPage = response.data.per_page;
            this.totalPages = response.data.num_pages;
            this.hasPreviousPage = response.data.has_previous;
            this.hasNextPage = response.data.has_next;
          })
          .catch(error => {
            console.error(error);
          });
    },
    fetchPreviousPage() {
      this.page--;
      this.fetchData();
    },
    fetchNextPage() {
      this.page++;
      this.fetchData();
    }
  }
};
</script>

<style>
.table-custom {
  margin: 0 auto;
  width: 80%; /* 根据需要设置表格宽度 */
  border-collapse: collapse;
}

.table-custom th, .table-custom td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
