 # 项目包介绍：
- 该项目包具备一项实用功能，即能够基于指定的主题色对 SVG 图的颜色进行动态变换。如此一来，SVG 图在不同主题场景下，就能相应呈现出契合该主题的色彩风格，这对于提升项目整体的视觉适应性以及灵活性有着显著作用。

## 参数：
|  参数  | 类型 | 必填 | 描述 |
| :----: | :----: | :----: | :---- |
|  svgString  | string | 是 | 代表需进行颜色更改的 SVG 图的字符串数据，是整个颜色替换操作的基础素材。 |
|  defaultReplaceColor  | string | 是 | 确定要将 SVG 图中原有的颜色替换成的目标颜色 |
|  ignoreAttrs  | Array | 否 | 可传入一个数组，其中的元素为在颜色替换时要被忽略的 SVG 图属性名称，以此精准控制特定属性颜色不被修改。 |
|  ignoreElements  | array | 否 | 数组类型，用于指定在颜色替换过程中需跳过颜色更改的 SVG 图节点，确保某些节点颜色维持原状。 |
|  ignoreColors  | array | 否 | 当存在特定颜色值无需替换时，将这些颜色值组成数组传入，从而实现对特定颜色的保留。 |
|  replaceColorMap  | object | 否 | 接收一个对象，通过对象的键值对设定特定颜色到目标颜色的映射关系，实现个性化颜色替换策略。 |
 
## 安装

```
$ npm i @yugu/svg-color-replacer

# or

$ yarn add @yugu/svg-color-replacer
```
## 使用
1. 以下是在 Vue 项目中使用该项目包的示例代码

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
