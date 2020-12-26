<template>
    <div>
      <button class="button" @click="onShowLoading">加载</button>
      <button class="button" @click="onHideLoading">取消加载</button>
    </div>
</template>

<script>
import Vue from 'vue'
import Loading from '../components/Loading'

Vue.use(Loading)

export default {
    data() {
        return {

        }
    },
    methods: {
      onShowLoading() {
        this.$showLoading()
      },
      onHideLoading() {
        this.$hideLoading()
      }
    }
}
</script>

<style scoped>
.button {
  margin: 16px;
}
</style>
