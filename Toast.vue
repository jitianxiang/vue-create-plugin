<template>
  <div class="toast-wrapper" v-if="show">
    <div>toast</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.toast-wrapper {
  position: fixed;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  color: black;
  font-size: .2rem;
}
</style>
