import { parse, serialize } from 'parse5'

const traverse = (ast, cb) => {
  // 遍历ast，替换颜色
  if (ast.childNodes) {
    ast.childNodes.forEach(node => {
      cb(node)
      traverse(node, cb)
    })
  }
}
const isColor = hex => {
  return /^#[0-9A-Fa-f]{6}$/i.test(hex) || /^#[0-9A-Fa-f]{3}$/i.test(hex)
}
const findBody = ast => {
  let body = null
  traverse(ast, node => {
    if (node.tagName === 'body') {
      body = node
    }
  })
  return body
}
const svgColorReplacer = ({
  svgString,
  defaultReplaceColor,
  ignoreAttrs = [],
  ignoreElements = [],
  ignoreColors = [],
  replaceColorMap = {}
}) => {
  // 检查必传参数 svgString 和 defaultReplaceColor 是否存在
  if (!svgString || !defaultReplaceColor) {
    throw new Error('svgString 和 defaultReplaceColor 是必传参数')
  }
  if (!isColor(defaultReplaceColor)) {
    throw new Error('defaultReplaceColor 必须是颜色值')
  }
  // 解析 SVG 字符串为 AST
  const ast = parse(svgString)
  // 遍历 AST 节点
  traverse(ast, node => {
    // 如果节点有属性
    if (!ignoreElements.includes(node.tagName)) {
      if (node.attrs) {
        // 遍历节点的属性
        node.attrs.forEach(attr => {
          // 打印属性值和是否为颜色值
          if (!ignoreAttrs.includes(attr.name) && isColor(attr.value) && !ignoreColors.includes(attr.value)) {
            attr.value = replaceColorMap[attr.value] || defaultReplaceColor
          }
        })
      }
    }
  })

  return serialize(findBody(ast))
}
export default svgColorReplacer
