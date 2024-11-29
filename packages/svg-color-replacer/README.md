```html
<template>
  <div>
    1111
    <img class="svg" src="" alt="" />
  </div>
</template>
<script setup>
import svgColorReplacer from '@yugu/svg-color-replacer'
import { onMounted } from 'vue'

onMounted(() => {
  fetch('http://172.16.31.117:9000/web-static/assets/rtr/images/live_manage_new.svg')
    .then(res => res.text())
    .then(data => {
      const newSvgString = svgColorReplacer({
        svgString: data,
        defaultReplaceColor: '#f00',
        ignoreAttrs: [],
        ignoreElements: [],
        ignoreColors: []
      })
      console.log(`🚀 ~ newSvgString:`, newSvgString)
      const blob = new Blob([newSvgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      const svgImg = document.querySelector('.svg')
      svgImg.src = url
    })
})
</script>
<style scoped lang="less"></style>
```