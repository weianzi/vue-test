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

export default {
  mixins: [resize],
  data() {
    return {
      chart: null,
      option
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  async mounted() {
    await this.$store.dispatch('getUserInfo')
    //console.log(this.user.name)
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
      this.chart.setOption(this.option)

      this.chart.on('click', param => {
        console.log(param)
        this.option.series.levels = [
          [
            {},
            {
              r0: '35%',
              r: '45%'
            },
            {
              r0: '50%',
              r: '55%'
            },
            {
              r0: '55%',
              r: '60%'
            }
          ],
          [
            {},
            {
              r0: '35%',
              r: '40%'
            },
            {
              r0: '40%',
              r: '50%'
            },
            {
              r0: '55%',
              r: '60%'
            }
          ],
          [
            {},
            {
              r0: '35%',
              r: '40%'
            },
            {
              r0: '40%',
              r: '45%'
            },
            {
              r0: '45%',
              r: '55%'
            }
          ]
        ][param.treePathInfo.length - 2]
        this.option.series.startAngle = '' + param.data.deg
        this.chart.setOption(this.option)
      })
    }
  }
}

const temp = [
  {
    name: 'a',
    value: 1,
    deg: 0 + 15,
    children: [
      {
        deg: 15,
        children: [
          {
            deg: 15,
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'b',
    value: 1,
    deg: 45,
    children: [
      {
        deg: 45,
        children: [
          {
            deg: 45,
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'c',
    value: 1,
    deg: 75,
    children: [
      {
        deg: 75,
        children: [
          {
            deg: 75,
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'd',
    value: 6,
    deg: 90 + 90,
    children: [
      {
        deg: 60 + 90,
        value: 4,
        children: [
          {
            deg: 30 + 90,
            value: 2
          },
          {
            deg: 15 + 90 + 60,
            value: 1
          },
          {
            deg: 15 + 90 + 60 + 30,
            value: 1
          }
        ]
      },
      {
        deg: 30 + 120 + 90,
        value: 2
      }
    ]
  },
  {
    name: 'e',
    value: 3,
    deg: 90 + 6 * 30 + 3 * 15,
    children: [
      {
        deg: 90 + 6 * 30 + 2 * 15,
        children: [
          {
            deg: 90 + 6 * 30 + 2 * 15,
            value: 2
          }
        ]
      }
    ]
  }
]

const option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c}"
  },
  series: {
    startAngle: '15',
    // radius: ['50%', '95%'],
    center: ['50%', '50%'],
    type: 'sunburst',
    sort: null,
    nodeClick: false,
    data: temp,
    levels: [
      {},
      {
        r0: '35%',
        r: '45%'
      },
      {
        r0: '50%',
        r: '55%'
      },
      {
        r0: '55%',
        r: '60%'
      }
    ],
    label: {
      normal: {
        show: false,
        rotate: 'none',
        color: '#fff'
      }
    },
    itemStyle: {
      color: '#4581da',
      borderWidth: 3,
      borderColor: '#f3f3f3'
    },
    emphasis: {
      itemStyle: {
        color: '#4ea6e5'
      }
    }
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