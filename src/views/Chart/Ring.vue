<template>
  <div class="chart-container">
    <div
      class="my-chart"
      id="chart"
      style="height:100%;width:100%"
    />
  </div>
</template>
<script>
import echarts from 'echarts'
import resize from '@/components/Charts/mixins/resize'
import DATA from './mock/dataRing.json'
export default {
  mixins: [resize],
  data() {
    return {
      chart: null,
      option
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('chart'))
      //, null, { renderer: 'svg'}
      this.chart.setOption(this.option)

      // this.chart.dispatchAction({
      //   type: 'highlight',
      //   seriesIndex: 0,
      //   dataIndex: 80
      // })

      //console.log(this.option.series.data)

      var name = ''
      // this.chart.on('click', params => {
      //   console.log(params)
      // })
      this.chart.on('click', params => {
        name = params.data.name
        name &&
          this.chart.dispatchAction({
            type: 'highlight',
            name
          }) //选中高亮

        // DATA.forEach((item, index) => {
        //   item.children.forEach(child => {
        //     console.log(child.name)
        //     if (child.name != name) {
        //       this.chart.dispatchAction({
        //         type: 'downplay',
        //         //seriesIndex: 0,
        //         name: child.name
        //       }) //取消高亮
        //     }
        //   })
        // })
        // for (var i = 0; i < DATA.length; i++) {
        //   if (DATA[i].name == name) {
        //     this.chart.dispatchAction({
        //       type: 'downplay',
        //       seriesIndex: 0,
        //       dataIndex: i
        //     }) //取消高亮
        //   }
        // }

        console.log(params, name)
      })
      this.chart.on('mouseout', params => {
        name &&
          this.chart.dispatchAction({
            type: 'highlight',
            name
          })
        // this.chart.dispatchAction({
        //   type: 'downplay',
        //   name: DATA[0].name
        // })
      })
      // this.chart.on('mouseout', params => {
      //   // console.log(params)
      //   console.log(index)
      //   this.chart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: index
      //   }) //选中高亮
      //   for (var i = 0; i < DATA.length; i++) {
      //     console.log(DATA[i].name, name)
      //     if (DATA[i].name !== name) {
      //       this.chart.dispatchAction({
      //         type: 'downplay',
      //         seriesIndex: 0,
      //         dataIndex: i
      //       }) //取消高亮
      //     }
      //   }
      // })
    }
  }
}

const option = {
  backgroundColor: '#000',
  series: {
    radius: ['28%', '80%'],
    center: ['50%', '50%'],
    type: 'sunburst',
    sort: null,
    z: 3,
    tooltip: {
      formatter: function(params) {
        let html =
          '<div class="index_model">' +
          '<h3 class="index_model_h3">' +
          params.name +
          '</h3>' +
          '<div class="index_model_rate">' +
          params.value +
          '%<span>' +
          '控股' +
          '</span></div>' +
          '<div class="index_model_proportion">' +
          '企业股权占比' +
          '</div><div style="width:70%;padding:0.04rem 0;">' +
          '全资子企业' +
          '<span style="float:right;">' +
          '7 家' +
          '</span></div><div style="width:70%;padding:0.04rem 0;">' +
          '控股子企业' +
          '<span style="float:right;">' +
          '8家' +
          '</span></div></div>'
        if (params.name == '') {
          return ''
        } else {
          return html
        }
      }
    },
    //allowDrillToNode: true,
    //nodeClick: false,
    cursor: 'pointer',
    highlightPolicy: 'self',
    label: { show: false },
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#36b1ff' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#72a4ff' // 100% 处的颜色
          }
        ],
        global: false // 缺省为 false
      },
      opacity: 0.6,
      borderWidth: 2,
      borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    highlight: {
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#36b1ff' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#72a4ff' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        opacity: 1
      }
    },
    emphasis: {
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#36b1ff' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#72a4ff' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        opacity: 1
      }
    },
    downplay: {
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#36b1ff' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#72a4ff' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        opacity: 0.4
      }
    },
    //外圆
    levels: [
      {
        // itemStyle: {
        //   opacity: 0
        // },
        r0: '1%',
        r: '2%',
      },
      {
        r0: '38%',
        r: '47%',

      },
      {
        r0: '52%',
        r: '57%'
      },
      {
        r0: '60%',
        r: '64%'
      },
      {
        r0: '67%',
        r: '71%'
      },
      {
        r0: '73%',
        r: '75.5%'
      }
    ],
    data: DATA
  }
}
</script>
<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>