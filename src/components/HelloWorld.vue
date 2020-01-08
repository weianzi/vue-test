<template>
  <div class="hello">
  </div>
</template>

<script>
import axios from 'axios'
import Tiff from 'tiff.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeTiffCanvas({ name, file}) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader()
        reader.onload = (theFile => {
          return async e => {
            const buffer = e.target.result
            const tiff = new Tiff({ buffer: buffer })
            const canvas = tiff.toCanvas()
            let width = tiff.width()
            let height = tiff.height()
            if (width > 1000) {
              height = (1000 * height) / width
              width = 1000
            }
            console.log(width, height)
            //todo 压缩

            document.getElementById('myCanvas').append(canvas)
            const blob = await this.canvas2Blob(canvas, 'image/jpeg')
            resolve({ name, blob })
          }
        })(file)
        reader.readAsArrayBuffer(file)
      })
    },
    async changeCanvas({ name, file, type }) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader()
        const that = this
        reader.readAsDataURL(file) //读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
        reader.onload = event => {
          var image = new Image()
          image.src = event.target.result
          image.onload = async () => {
            let width = image.width
            let height = image.height
            if (width > 1000) {
              height = (1000 * height) / width
              width = 1000
            }
            console.log(width, height)
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height
            const imageCanvas = canvas.getContext('2d')
            imageCanvas.drawImage(image, 0, 0, width, height)

            document.getElementById('myCanvas').append(canvas)

            const blob = await that.canvas2Blob(canvas, type)
            resolve({ name, blob })
          }
        }
      })
    },
    //canvas转化成二进制
    canvas2Blob(canvas, type) {
      return new Promise(
        (resolve, reject) =>
          canvas.toBlob(blob => resolve(blob), type, 0.7) //jpg, 70%
      )
    },
    async loadFile(event) {
      const files = event.target.files
      //console.log(files)
      const promises = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const name = file.name.split('.')[0]
        const type = file.type

        //console.log(type, name)
        if (type == 'image/tiff') {
          promises.push(this.changeTiffCanvas({ name, file }))
        } else if (
          type == 'image/png' ||
          type == 'image/jpeg' ||
          type == 'image/gif'
        ) {
          promises.push(this.changeCanvas({ name, file, type }))
        }
      }
      const imgsBlob = await Promise.all(promises)
      //console.log(imgsBlob)
      this.handleUploadImg(imgsBlob)
    },
    //axios上传
    async handleUploadImg(imgsBlob) {
      //组装formdata
      const fd = new FormData()
      imgsBlob.forEach(item => fd.append(item.name, item.blob))
      //fd.append('type', 1)
      try {
        await axios.post('/xxx', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        console.log(`图片上传完成`)
      } catch (err) {
        console.log('图片上传失败')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
