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
					"prop": "inner_companyName",
					"label": "任职企业名称",
					"width": 132
				},
				{
					"prop": "workAge",
					"label": "工龄",
					"width": 84
				},
				{
					"prop": "inner_jobName",
					"label": "职位名称",
					"width": 108
				},
				{
					"prop": "joinAge",
					"label": "司龄",
					"width": 84
				},
				{
					"prop": "inner_startdt",
					"label": "企业任职时间",
					"width": 132
				},
				{
					"prop": "emp_officeTelephone",
					"label": "修改",
					"width": 80,
					"fixed": "right"
				}
			],
			tableData: [{
					"inner_employeeId": "dddd34werwer",
					"emp_name": "排序状态测试",
					"emp_genderStr": "男",
					"inner_companyName": "xxx集团本部",
					"workAge": "0.8年",
					"inner_jobName": "爱我的群",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在岗",
					"prof_profession": "",
					"inner_jobTypeStr": "任职",
					"lic_license": "",
					"edu_educationStr": "博士研究生",
					"emp_phone": "13567890777",
					"emp_officeTelephone": ""
				}
			],
		}
	},
	methods: {
	},
	components: {
		wTable
	}
}
</script>