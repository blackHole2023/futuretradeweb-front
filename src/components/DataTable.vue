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
        <th>Operation</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableData" :key="item.variety1">
        <td>{{ item.variety1 }}</td>
        <td>{{ item.variety2 }}</td>
        <td>{{ item.start_time }}</td>
        <td>{{ item.end_time }}</td>
        <td>{{ item.is_work }}</td>
        <td>
          <button @click="editRecord(item)">Edit</button>
          <button @click="deleteRecord(item)">Delete</button><!--删除-->

        </td>
      </tr>
      </tbody>
    </table>

    <button v-if="hasPreviousPage" @click="fetchPreviousPage">Previous</button>
    <button v-if="hasNextPage" @click="fetchNextPage">Next</button>


    <!-- 编辑表单弹窗 -->
    <div v-if="showForm" class="modal">
      <div class="modal-content">
        <!-- 表单字段 -->
        <input type="text" v-model="formData.variety1" placeholder="Variety 1">
        <input type="text" v-model="formData.variety2" placeholder="Variety 2">
        <input type="text" v-model="formData.start_time" placeholder="Start Time">
        <input type="text" v-model="formData.end_time" placeholder="End Time">
        <input type="text" v-model="formData.is_work" placeholder="Is Work">

        <!-- 保存和取消按钮 -->
        <div class="modal-buttons">
          <button @click="saveRecord">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </div>

    <form @submit.prevent="createRecord">
      <label for="variety1">Variety 1:</label>
      <input type="text" id="variety1" v-model="newRecord.variety1" required>

      <label for="variety2">Variety 2:</label>
      <input type="text" id="variety2" v-model="newRecord.variety2" required>

      <label for="start_time">Start Time:</label>
      <input type="text" id="start_time" v-model="newRecord.start_time" required>

      <label for="end_time">End Time:</label>
      <input type="text" id="end_time" v-model="newRecord.end_time" required>

      <label for="is_work">Is Work:</label>
      <input type="text" id="is_work" v-model="newRecord.is_work" required>

      <button type="submit">Add Record</button>
    </form>
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
      hasNextPage: false,
      newRecord: {
        variety1: '',
        variety2: '',
        start_time: '',
        end_time: '',
        is_work: ''
      },
      formData: {
        id: null,
        variety1: '',
        variety2: '',
        start_time: '',
        end_time: '',
        is_work: ''
      },
      showForm: false
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

      axios
          .get(url, { params })
          .then((response) => {
            this.tableData = response.data.data;
            this.page = response.data.page;
            this.perPage = response.data.per_page;
            this.totalPages = response.data.num_pages;
            this.hasPreviousPage = response.data.has_previous;
            this.hasNextPage = response.data.has_next;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    editRecord(item) {
      // 编辑记录，将记录数据填充到表单字段中
      this.formData.id = item.id;
      this.formData.variety1 = item.variety1;
      this.formData.variety2 = item.variety2;
      this.formData.start_time = item.start_time;
      this.formData.end_time = item.end_time;
      this.formData.is_work = item.is_work;

      this.showForm = true; // 显示表单弹窗
    },
    saveRecord() {
      const url = `/conf/modify_reg_analysis_conf/${this.formData.id}`; // 根据后端的接口地址定义URL
      axios
          .put(url, this.formData)
          .then((response) => {
            console.log(response.data);
            this.showForm = false; // 隐藏表单弹窗
            this.fetchData(); // 更新数据
          })
          .catch((error) => {
            console.error(error);
          });
    },
    cancelEdit() {
      this.showForm = false; // 隐藏表单弹窗
    },
    deleteRecord(record) {
      const url = `/conf/delete_reg_analysis_conf/${record.id}`; // Update the URL according to your API endpoint

      axios
          .delete(url)
          .then((response) => {
            console.log(response.data);
            this.fetchData();
          })
          .catch((error) => {
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
    },
    createRecord() {
      const url = '/conf/add_reg_analysis_conf';

      axios
          .post(url, this.newRecord)
          .then((response) => {
            console.log(response.data);
            this.newRecord = {
              variety1: '',
              variety2: '',
              start_time: '',
              end_time: '',
              is_work: ''
            };
            this.fetchData();
          })
          .catch((error) => {
            console.error(error);
          });
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

.table-custom th,
.table-custom td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.modal-buttons button {
  margin-left: 10px;
}
</style>
