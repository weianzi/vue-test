<template>
  <div class="hello">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeCanvas({name, file}) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = (theFile => {
          return async e => {
            const buffer = e.target.result
            const tiff = new Tiff({ buffer: buffer })
            const canvas = tiff.toCanvas()
            const width = tiff.width()
            const height = tiff.height()

            //todo
            document.getElementById('myCanvas').append(canvas)
            const blob = await this.canvas2Blob(canvas)
            resolve({name, blob})
          }
        })(file)
        reader.readAsArrayBuffer(file)
      })
    },
    //canvas转化成二进制
    canvas2Blob(canvas) {
      return new Promise((resolve, reject) =>
        canvas.toBlob(blob => resolve(blob), 'image/jpeg', 0.7) //jpg, 70%
      )
    },
    async loadFile(event) {
      const files = event.target.files
      const promises = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        promises.push(this.changeCanvas({name: file.name, file}))
      }
      const imgsBlob = await Promise.all(promises)
      console.log(imgsBlob)
      this.handleUploadImg(imgsBlob)
    },
    //axios上传
    async handleUploadImg(imgsBlob) {
      //组装formdata
      const fd = new FormData()
      imgsBlob.forEach(item => fd.append(item.name, item.blob))
      fd.append('type', 1)
      console.log(fd)
      try {
        await axios.post('/xxx', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log(`图片上传完成`)
      } catch (err) {
        console.log('图片上传失败')
      }
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
