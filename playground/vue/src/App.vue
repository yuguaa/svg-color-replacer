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
  fetch('/logo.svg')
    .then(res => res.text())
    .then(data => {
      const newSvgString = svgColorReplacer({
        svgString: data,
        defaultReplaceColor: 'red',
        ignoreAttrs: [],
        ignoreElements: [],
        ignoreColors: [],
        replaceColorMap: {
          // '#34495e': '#00f',
          // '#41b883': '#0f0'
        }
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
