<template>
  <div>
    <table>
      <!-- 表格展示数据 -->
      <tbody>
      <tr v-for="item in tableData" :key="item.id">
        <!-- ... -->
        <td>
          <button @click="editRecord(item)">Edit</button>
          <!-- ... -->
        </td>
      </tr>
      </tbody>
    </table>

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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
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
      // 从后端获取表格数据
      // 使用axios或其他HTTP库发送GET请求
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
    }
  }
};
</script>

<style>
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
