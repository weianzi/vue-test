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
				// {
				// 	"prop": "inner_jobStatusStr",
				// 	"label": "员工状态",
				// 	"width": 108
				// },
				// {
				// 	"prop": "prof_profession",
				// 	"label": "专业职称",
				// 	"width": 108
				// },
				// {
				// 	"prop": "inner_jobTypeStr",
				// 	"label": "职位类型",
				// 	"width": 108
				// },
				// {
				// 	"prop": "lic_license",
				// 	"label": "执业资格",
				// 	"width": 108
				// },
				// {
				// 	"prop": "edu_educationStr",
				// 	"label": "学历",
				// 	"width": 84
				// },
				// {
				// 	"prop": "emp_phone",
				// 	"label": "联系方式",
				// 	"width": 108
				// },
				// {
				// 	"prop": "emp_officeTelephone",
				// 	"label": "办公电话",
				// 	"width": 108
				//},
				{
					"prop": "emp_officeTelephone",
					"label": "修改",
					"width": 80,
					"fixed": "right"
				}
			],
			tableData: [{
					"inner_employeeId": "0137893199101012658",
					"emp_name": "排序状态测试",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
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
				},
				{
					"inner_employeeId": "0123456199101010258",
					"emp_name": "测试",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.2年",
					"inner_jobName": "阿萨德",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在职",
					"prof_profession": "阿萨德",
					"inner_jobTypeStr": "任职",
					"lic_license": "阿萨德",
					"edu_educationStr": "博士研究生",
					"emp_phone": "12312312313",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "0123456199101010258",
					"emp_name": "测试",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.2年",
					"inner_jobName": "阿萨德",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在职",
					"prof_profession": "阿萨德",
					"inner_jobTypeStr": "任职",
					"lic_license": "阿萨德",
					"edu_educationStr": "博士研究生",
					"emp_phone": "12312312313",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "0422202199612120034",
					"emp_name": "31",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.4年",
					"inner_jobName": "阿服务器",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "离职",
					"prof_profession": "",
					"inner_jobTypeStr": "任职",
					"lic_license": "",
					"edu_educationStr": "大专",
					"emp_phone": "12312312312",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "0450503198204060711",
					"emp_name": "李霞",
					"emp_genderStr": "女",
					"inner_companyName": "无线电集团本部",
					"workAge": "6.8年",
					"inner_jobName": "人力资源部",
					"joinAge": "10.1年",
					"inner_startdt": "2008-10",
					"inner_jobStatusStr": "在职",
					"prof_profession": "法律顾问",
					"inner_jobTypeStr": "任职",
					"lic_license": "法律职业资格",
					"edu_educationStr": "硕士研究生",
					"emp_phone": "13333333333",
					"emp_officeTelephone": "020-33333333"
				},
				{
					"inner_employeeId": "0123456199101020123",
					"emp_name": "数据2测试",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.2年",
					"inner_jobName": "阿萨德",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在岗",
					"prof_profession": "数据完整数据完整测试数据",
					"inner_jobTypeStr": "兼职",
					"lic_license": "",
					"edu_educationStr": "博士研究生",
					"emp_phone": "12312312313",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "0422202199612120034",
					"emp_name": "31",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.4年",
					"inner_jobName": "驱蚊器",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在职",
					"prof_profession": "",
					"inner_jobTypeStr": "任职",
					"lic_license": "",
					"edu_educationStr": "大专",
					"emp_phone": "12312312312",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "0123456199101020123",
					"emp_name": "数据2测试",
					"emp_genderStr": "男",
					"inner_companyName": "无线电集团本部",
					"workAge": "0.2年",
					"inner_jobName": "阿萨德",
					"joinAge": "0.8年",
					"inner_startdt": "2018-01",
					"inner_jobStatusStr": "在职",
					"prof_profession": "数据完整数据完整测试数据",
					"inner_jobTypeStr": "任职",
					"lic_license": "",
					"edu_educationStr": "博士研究生",
					"emp_phone": "12312312313",
					"emp_officeTelephone": ""
				},
				{
					"inner_employeeId": "1450503198204060711",
					"emp_name": "李霞",
					"emp_genderStr": "女",
					"inner_companyName": "无线电集团本部",
					"workAge": "6.8年",
					"inner_jobName": "人力资源部",
					"joinAge": "10.1年",
					"inner_startdt": "2008-10",
					"inner_jobStatusStr": "在职",
					"prof_profession": "法律顾问",
					"inner_jobTypeStr": "任职",
					"lic_license": "法律职业资格",
					"edu_educationStr": "硕士研究生",
					"emp_phone": "13333333333",
					"emp_officeTelephone": "020-33333333"
				},
				{
					"inner_employeeId": "1450503198204060711",
					"emp_name": "李霞",
					"emp_genderStr": "女",
					"inner_companyName": "无线电集团本部",
					"workAge": "6.8年",
					"inner_jobName": "人力资源部",
					"joinAge": "10.1年",
					"inner_startdt": "2008-10",
					"inner_jobStatusStr": "在职",
					"prof_profession": "法律顾问",
					"inner_jobTypeStr": "任职",
					"lic_license": "法律职业资格",
					"edu_educationStr": "硕士研究生",
					"emp_phone": "13333333333",
					"emp_officeTelephone": "020-33333333"
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