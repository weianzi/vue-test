<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-table
      :data="elList"
      :span-method="arraySpanMethod"
      border
      style="width: 1000px"
    >
      <el-table-column prop="line" label="线路" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.line || scope.row.total }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="station" label="站点"> </el-table-column>
      <el-table-column prop="count" sortable label="投入车辆">
      </el-table-column>
      <el-table-column prop="yunci" sortable label="运次"> </el-table-column>
      <el-table-column prop="upscan" sortable label="上车扫码人数">
      </el-table-column>
      <el-table-column prop="downscan" sortable label="下车扫码人数">
      </el-table-column>
      <el-table-column prop="money" sortable label="金额"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      indexArr: [],
      spanArr: [],
      pos: 0,
      spanArr2: [],
      pos2: 0,
      spanArr3: [],
      pos3: 0,
      elList: []
    }
  },
  watch: {
    elList(arr) {
      this.getSpanArr(arr)
      this.getSpanArr2(arr)
      this.getSpanArr3(arr)
      // arr.map((v, i, s) => {
      //   if (v.total === '总计') {
      //     this.indexArr.push(i)
      //   }
      // })
    }
  },
  created() {
    setTimeout(() => {
      this.elList = [
        {
          line: '线路一（去城区）',
          station: '首都机场t1',
          count: 60,
          yunci: 55,
          upscan: 2222,
          downscan: 1333,
          money: 100
        },
        {
          line: '线路一（去城区）',
          station: '首都机场t2',
          count: 60,
          yunci: 55,
          upscan: 22322,
          downscan: 333,
          money: 100
        },
        {
          line: '线路一（去城区）',
          station: '首都机场t3',
          count: 60,
          yunci: 55,
          upscan: 3422,
          downscan: 3133,
          money: 1300
        },
        {
          line: '线路一（去城区）',
          station: 'A',
          count: 60,
          yunci: 55,
          upscan: 21242,
          downscan: 33413,
          money: 1040
        },
        {
          line: '线路一（去城区）',
          station: 'A',
          count: 61,
          yunci: 55,
          upscan: 21242,
          downscan: 33413,
          money: 1040
        },
        {
          line: '线路一（去城区）',
          station: 'B',
          count: 61,
          yunci: 25,
          upscan: 12322,
          downscan: 3333,
          money: 1100
        },
        // {
        //   total: '总计',
        //   totalupscan: 12322,
        //   totaldownscan: 3333,
        //   totalmoney: 1100
        // },
        {
          line: '线路二（去城区）',
          station: '首都机场t1',
          count: 61,
          yunci: 55,
          upscan: 2222,
          downscan: 1333,
          money: 100
        },
        {
          line: '线路二（去城区）',
          station: '首都机场t2',
          count: 61,
          yunci: 55,
          upscan: 22322,
          downscan: 333,
          money: 100
        },
        {
          line: '33',
          station: '首都机场t3',
          count: 60,
          yunci: 55,
          upscan: 3422,
          downscan: 3133,
          money: 1300
        },
        {
          line: '',
          station: 'A',
          count: 3,
          yunci: 55,
          upscan: 21242,
          downscan: 33413,
          money: 1040
        },
        {
          line: '',
          station: 'A',
          count: 1,
          yunci: 55,
          upscan: 21242,
          downscan: 33413,
          money: 1040
        },
        {
          line: '22',
          station: 'B',
          count: 60,
          yunci: 55,
          upscan: 12322,
          downscan: 3333,
          money: 1100
        },
        {
          line: '',
          station: 'B',
          count: 3,
          yunci: 55,
          upscan: 12322,
          downscan: 3333,
          money: 1100
        },
        {
          line: '3',
          station: 'B',
          count: 60,
          yunci: 55,
          upscan: 12322,
          downscan: 3333,
          money: 1100
        },
        {
          line: '',
          station: 'B',
          count: 3,
          yunci: 55,
          upscan: 12322,
          downscan: 3333,
          money: 1100
        },
        
      ]
    }, 2000)
  },

  methods: {
    getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1)
          this.pos = 0
        } else {
          // 判断当前元素与上一个元素是否相同（line为标记）
          if (data[i].line === data[i - 1].line) {
            this.spanArr[this.pos] += 1
            this.spanArr.push(0)
          } else {
            this.spanArr.push(1)
            this.pos = i
          }
        }
      }
    },
    getSpanArr2(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr2.push(1)
          this.pos2 = 0
        } else {
          // 判断当前元素与上一个元素是否相同（line为标记）
          if (data[i].count === data[i - 1].count) {
            this.spanArr2[this.pos2] += 1
            this.spanArr2.push(0)
          } else {
            this.spanArr2.push(1)
            this.pos2 = i
          }
        }
      }
    },
    getSpanArr3(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr3.push(1)
          this.pos3 = 0
        } else {
          // 判断当前元素为空
          if (!data[i].line) {
            this.spanArr3[this.pos3] += 1
            this.spanArr3.push(0)
          } else {
            this.spanArr3.push(1)
            this.pos3 = i
          }
        }
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      //return
      //处理行的合并
      // if (this.indexArr.includes(rowIndex)) {
      //   if (columnIndex === 0) {
      //     return {
      //       rowspan: 1,
      //       colspan: 4
      //     }
      //   } else if (columnIndex === 1 || columnIndex === 2 || columnIndex == 3) {
      //     return {
      //       rowspan: 0,
      //       colspan: 0
      //     }
      //   }
      // }
      //处理列的合并
      // if (columnIndex === 0) {
      //   const _row = this.spanArr[rowIndex]
      //   const _col = _row > 0 ? 1 : 0
      //   return {
      //     rowspan: _row,
      //     colspan: _col
      //   }
      // }

      if (columnIndex === 0) {
        const _row = this.spanArr3[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }


      if (columnIndex === 2) {
        const _row = this.spanArr2[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
