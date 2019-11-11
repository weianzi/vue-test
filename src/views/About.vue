<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted() {
    this.test()
  },
  methods: {
    test() {
      let param = {
        header: {
          username: 'ddrGDYT001',
          password: 'ddrGDYT001',
          token: '301761288b36c167948c57d70145c928',
          account_type: 1
        },
        body: {
          site_id: '14008806',
          start_date: '20191020',
          end_date: '20191024',
          metrics: 'pv_count',
          method: 'overview/getTimeTrendRpt'
        }
      }
      const service = axios.create()
      service.interceptors.request.use(config => config)
      return service({
        method: 'post',
        url: 'https://api.baidu.com/json/tongji/v1/ReportService/getData',
        data: param,
        withCredentials: true
      })
    }
  }
}
</script>