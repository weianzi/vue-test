<template>
  <div>
    <button @click="handleFormat">format</button>
    <editor
      v-model="content"
      lang="javascript"
      :options="options"
      height="500"
      @init="initEditor"
    />
    <editor
      v-model="content"
      lang="javascript"
      :options="options01"
      height="500"
      @init="initEditor"
    />
  </div>
</template>

<script>
import jsBeautify from 'js-beautify'

export default {
  components: {
    editor: () => import('./ace')
  },
  data() {
    const options = {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true /*自动补全*/,
      tabSize: 2,
      showPrintMargin: false,
    }
    return {
      content: '',
      options,
      options01: {
        fontSize: 16,
        readOnly: true, //只读模式
        showGutter: false, //展示边、行数
      }
    }
  },
  mounted() {},
  methods: {
    initEditor() {
      require('brace/ext/language_tools')
      require('brace/mode/javascript')
      require('brace/theme/chrome')
    },
    handleFormat() {
      this.content = jsBeautify(this.content, { indent_size: 2 })
    }
  }
}
</script>

<style>
#monaco {
  height: 600px;
  text-align: left;
}
</style>
