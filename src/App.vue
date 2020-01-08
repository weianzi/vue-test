<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/earth">Earth</router-link> | -->
      <router-link to="/table">Table</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/chart">Chart</router-link> |
      <router-link to="/chart/ring">Ring</router-link>
    </div>
    <router-view />

    <!-- <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"
        
        :props="{ checkStrictly: true }"
        :show-all-levels="false"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },

        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    window.onresize = () => {
      this.resizeFn(1)
    }
    window.onresize = () => {
      this.resizeFn(2)
    }
    //addEventListener()与removeEventListener(
    window.addEventListener('resize', this.resizeFn(3))
    window.addEventListener('resize', this.resizeFn(4, 'a'))

    window.removeEventListener('resize', this.resizeFn(3))
    window.removeEventListener('resize', this.resizeFn(4, 'r'))

    setTimeout(() => {
      const css = `
        body{
          background: #ddd;
        }
        #nav a{
          color: #f00;
        }
      `
      const style = document.createElement('style')
      style.innerHTML = css
      document.getElementsByTagName('head')[0].append(style)
    }, 3000)
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
    resizeFn(val, type) {
      if (type == 'r') {
        return
      }
      console.log(val, type)
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
.el-cascader-panel {
  .el-radio {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .el-radio__input {
    visibility: hidden;
  }
  .el-cascader-node__postfix {
    top: 10px;
  }
}
</style>
