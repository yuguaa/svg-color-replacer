 # 项目包介绍：
 
- 功能：能够依据主题色对 SVG 图颜色进行动态变换，使 SVG 图在不同主题场景下呈现出相应的色彩风格，有效提升项目的视觉适应性与灵活性。

## 接收参数：
1.参数说明：共接收六个传参
|  参数  | 类型 | 必填 | 描述 |
| :----: | :----: | :----: | :---- |
|  1  | string | 是 | 代表需进行颜色更改的 SVG 图的字符串数据，是整个颜色替换操作的基础素材。 |
|  2  | string | 是 | 确定要将 SVG 图中原有的颜色替换成的目标颜色，当前仅支持 16 进制颜色格式，如 #000000 等。 |
|  3  | Array | 否 | 可传入一个数组，其中的元素为在颜色替换时要被忽略的 SVG 图属性名称，以此精准控制特定属性颜色不被修改。 |
|  4  | array | 否 | 数组类型，用于指定在颜色替换过程中需跳过颜色更改的 SVG 图节点，确保某些节点颜色维持原状。 |
|  5  | array | 否 | 当存在特定颜色值无需替换时，将这些颜色值组成数组传入，从而实现对特定颜色的保留。 |
|  6  | object | 否 | 接收一个对象，通过对象的键值对设定特定颜色到目标颜色的映射关系，实现个性化颜色替换策略。 |
## 安装

```
$ npm i @yugu/svg-color-replacer

# or

$ yarn add @yugu/svg-color-replacer
```
## 使用

```
<template>
  <div>
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
        defaultReplaceColor: '#00f',
      })
      const blob = new Blob([newSvgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      const svgImg = document.querySelector('.svg')
      svgImg.src = url
    })
})
</script>

```
