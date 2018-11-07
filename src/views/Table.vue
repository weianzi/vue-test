<template>
  <div>
    <wTable :data="tableData" :header="tableHeader"></wTable>
  </div>
</template>
<script>
import wTable from '@/components/w-table.vue'
export default {
  data() {
    return {
      tableHeader: [{
          "prop": "selection",
          "type": "selection",
          "label": "",
          "width": 60,
          "fixed": "left"
        },
        {
          "prop": "index",
          "type": "index",
          "label": "序号",
          "width": 60,
          "fixed": "left"
        },
        {
          "prop": "emp_name",
          "label": "姓名",
          "width": 84
        },
        {
          "prop": "emp_genderStr",
          "label": "性别",
          "width": 84
        },
        {
          "prop": "emp_officeTelephone",
          "label": "修改",
          "width": 80,
          "fixed": "right"
        }
      ],
      tableData: [{
          "emp_name": "李四",
          "emp_genderStr": "男"
        },
        {
          "emp_name": "张三",
          "emp_genderStr": "女"
        }
      ],
    }
  },
  methods: {},
  components: {
    wTable
  }
}
</script>