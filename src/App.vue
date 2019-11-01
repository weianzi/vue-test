<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/earth">Earth</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/chart">Chart</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'app',
  created() {
    let timerId = null
    window.addEventListener('resize', () => {
      if (timerId) {
        clearTimeout(timerId)
      }
      timerId = setTimeout(() => {
        this.$store.commit('RESIZE', timerId)
      }, 200)
    })

    this.test()
  },
  methods: {
    async test() {
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
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
