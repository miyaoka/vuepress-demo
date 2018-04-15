<template>
  <div class="hoge">
    <div>{{num}}</div>
    カスタムコンポーネント {{now}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().toLocaleString()
    }
  },
  props: {
    num: { type: Number, default: 0 }
  }
}
</script>

<style>
.hoge {
  font-size: 2rem;
  background: #f00;
  padding: 0.5rem;
  color: #fff;
}
</style>
