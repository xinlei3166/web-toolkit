import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkDirective from 'remark-directive'
import remarkStringify from 'remark-stringify'
import {visit} from 'unist-util-visit'
import fs from 'fs'
import path from 'path'
import os from 'os'
import h from 'hash-sum'

export const demoPattern = /:::demo([\s\S]*?):::/
export const codePattern = /.md.demo.[a-zA-Z0-9]+\.vue$/
export const hash = (val) => h(val)
export const combineVirtualFilename = (id, name, lang) => `${id}.demo.${name}.${lang}`

const content = fs.readFileSync('./file.md')

export async function transformCodeToComponent(id, code, options) {
  const blocks= []

  function remarkDemo() {
    return (tree) => {
      console.log('tree', tree)
      let seed = 0
      visit(tree, (node) => {
        if (node.type === 'heading') {
          node.depth++
        }
        if (node.type === 'containerDirective' && node.name === 'demo') {
          seed++
          const name = hash(`${id}-demo-${seed}`)
          blocks.push({
            lang: node.children[0]?.lang,
            value: node.children[0]?.value,
            name
          })
          node.name = `demo render-demo-i${name}`
          console.log('containerDirective---', node, '\n')
        }
      })

      if (blocks.length > 0) {
        tree.children.push({
          type: 'html',
          value: `
          <script setup>
          ${blocks.map(block => {
            const filename = combineVirtualFilename(id, block.name, block.lang)
            return `import RenderDemoI${name} from '${filename}'`
          }).join(os.EOL)}
          </script>`
        })
      }
    }
  }

  const file = await unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkDirective)
  .use(remarkStringify)
  .use(remarkDemo)
  .process(code)

  console.log(String(file)) // => '## Hi, Saturn!'

  for (const block of blocks) {
    const filename = combineVirtualFilename(id, block.name, block.lang)
    const blockId = '/' + path.relative(options.root, filename)
    console.log('filename', filename)
    console.log('blockId', blockId)
    Demoblocks.set(blockId, block.value)
  }

  return { code: String(file), blocks }
}

export const Demoblocks = new Map()

transformCodeToComponent('aaa.md', content, { root: '/aaa'}).then(() => {
  console.log('Demoblocks', Demoblocks)
})
