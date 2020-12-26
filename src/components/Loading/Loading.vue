<template>
  <div class="toast" id="custom_loading" v-if="loading">
    <div class="icon-loading"></div>
    <div class="text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      title: '加载中',
      loading: false
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  width: 150px;
  border-radius: 8px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
.toast .icon-loading {
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-color: #fff transparent transparent transparent;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.toast .text {
  font-size: 16px;
  text-align: center;
}
</style>
