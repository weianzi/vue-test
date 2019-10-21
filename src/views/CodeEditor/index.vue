<template>
  <div id="monaco">
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'

export default {
  components: {},
  mounted() {
    this.monacoInstance = monaco.editor.create(
      document.getElementById('monaco'),
      {
        value: `console.log("hello,world")`,
        language: 'javascript'
      }
    )
    //
  },
  beforeDestory() {
    this.monacoInstance.dispose() //使用完成销毁实例
  }
}
</script>

<style>
#monaco {
  height: 600px;
  text-align: left;
}
</style>