---
home: true
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---

# Vue in markdown

<ol>
<li v-for="i in 3">{{ i }} </li>
</ol>

# $page

{{ $page }}

# escaping

::: v-pre
`{{ This will be displayed as-is }}`
:::

# custom components

<demo-1 :num="15" />

# styling

<div :class="$style.example">
{{$style}}
</div>

# aa こんにちは

aaa

| Tables        |      Are      |  Cool | aa  |
| ------------- | :-----------: | ----: | --- |
| col 3 is      | right-aligned | $1600 |     |
| col 2 is      |   centered    |   $12 | b   |
| zebra stripes |   are neat    |    $1 | c   |

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = 'This is rendered by inline script and styled by inline CSS'
  }
}
</script>
