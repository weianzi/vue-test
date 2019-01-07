<template>
  <div id="chart"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import 'echarts/map/js/world.js' //引入地图文件
import SCATTER_3D_DATA from './SCATTER_3D_DATA.json'
// const SCATTER_3D_DATA = DATA.filter(dataItem => dataItem[2] > 0).map(
//   dataItem => [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])]
// )
const DATA = SCATTER_3D_DATA.map(item => [item[0], item[1], 1])

export default {
  async mounted() {
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
      var dom = document.getElementById('chart')
      var myChart = echarts.init(dom)
      var canvas = document.createElement('canvas')
      var mapChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048
      })

      mapChart.setOption({
        //backgroundColor: '#000',
        visualMap: {
          show: false,
          min: 0,
          max: 2000,
          inRange: {
            //color: ['rgba(255,255,255,.1)'],
            //color: ['transparent']
            //colorAlpha: .1,
          }
        },
        series: [
          {
            type: 'map',
            map: 'world',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [[-180, 90], [180, -90]],
            label: {
              show: false
            },
            itemStyle: {
              borderColor: '#89a9d7',
              areaColor: 'transparent',
              //areaColor: "#1f3161",
              //backgroundColor: 'rgba(255,255,255,.1)',
              //color: "rgba(255,255,255,.1)",
              //opacity: .6
            },
            //鼠标经过
            emphasis: {
              label: {
                show: false,
                color: '#fff',
                fontSize: 18
              },
              itemStyle: {
                areaColor: 'transparent',
                //areaColor: 'rgba(255,255,255,.1)',
                borderColor: '#fff'
                //opacity: .1
              }
            },
            data: [],
            //翻译成中文
            nameMap: {
              //'Russia':'俄罗斯',
              //'Canada':'加拿大',
              //China: '中国'
              //'United States':'美国',
            }
          }
        ]
      })

      // http://visibleearth.nasa.gov/view_cat.php?categoryID=1484
      const option = {
        title: {
          x: 'center',
          y: '70',
          textStyle: {
            color: '#f7f7f7'
          }
        },
        globe: {
          baseTexture: mapChart,
          //heightTexture: "/asset/get/s/data-1491889019097-rJQYikcpl.jpg",
          displacementScale: 0.9, //地球顶点位移的大小
          //shading: 'lambert',
          light: {
            ambient: {
              intensity: 1 //环境光的强度
            },
            main: {
              intensity: 0.5 //场景主光源的设置，太阳光强度
            }
          },
          viewControl: {
            autoRotate: true, //是否开启视角绕物体的自动旋转查看
            autoRotateAfterStill: 1, //在鼠标静止操作后恢复自动旋转的时间间隔
            autoRotateDirection: 'ccw', //默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
            autoRotateSpeed: 20, // 角度/秒
            // 无法旋转
            //rotateSensitivity: 0,
            // 只能横向旋转
            rotateSensitivity: [1, 0],
            //0无法缩放，default: 1
            zoomSensitivity: 0,
            distance: 300 //距离地球表面的距离
          }
        },
        series: {
          type: 'scatter3D',
          coordinateSystem: 'globe',
          //blendMode: 'lighter', //混合模式，目前支持'source-over'，'lighter'，默认使用的'source-over'是通过 alpha 混合，而'lighter'是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果
          symbolSize: 1, //点的大小
          itemStyle: {
            color: 'rgba(137, 169, 215, .3)',
            //opacity: .5
          },
          //鼠标经过
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: 'transparent',
              borderColor: '#fff'
            }
          },
          data: DATA
        }
      }
      // window.addEventListener('keydown', function () {
      //   myChart.dispatchAction({
      //     type: 'lines3DToggleEffect',
      //     seriesIndex: 0
      //   })
      // })
      if (option && typeof option === 'object') {
        myChart.setOption(option, true)
      }
      mapChart.on('click', this.handleChartsItem)
      //mapChart.getZr().on('click', this.handleChartsItem)

    },
    handleChartsItem(params) {
      console.log(params)
    }
  }
}
</script>
<style>
body{
  background: #1f274b;
}
#chart {
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background: #1f274b;
}
</style>

