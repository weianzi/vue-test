<template>
  <div class="about">
    <vue-seamless-scroll
      :data="listData"
      :class-option="classOption"
      class="seamless-warp"
    >
      <ul class="item">
        <li v-for="item in listData" :key="item.title">
          <span class="title" v-text="item.title"></span
          ><span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>
<script>
import axios from 'axios'
import VueSeamlessScroll from '../components/VueSeamlessScroll'

export default {
  data() {
    return {
      listData: [
        {
          title: '无缝滚动第一行无缝滚动第一行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第二行无缝滚动第二行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第三行无缝滚动第三行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第四行无缝滚动第四行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第五行无缝滚动第五行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第六行无缝滚动第六行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第七行无缝滚动第七行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第八行无缝滚动第八行',
          date: '2017-12-16'
        },
        {
          title: '无缝滚动第九行无缝滚动第九行',
          date: '2017-12-16'
        }
      ]
    }
  },
  computed: {
    classOption() {
      return {
       // step: .5,//速度
       singleHeight: 32,
       waitTime: 3000,
       //switchDelay: 4000,
       //isSingleRemUnit: true
      }
    }
  },
  components: {
    VueSeamlessScroll
  },
  methods: {
    test() {
      let param = {
        header: {
          username: '',
          password: '',
          token: '',
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
<style>
.about{
  width: 400px;
}
.seamless-warp {
  height: 220px;
  overflow: hidden;
}
.seamless-warp ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.seamless-warp li {
  list-style: none;
  line-height: 2;
}
</style>
