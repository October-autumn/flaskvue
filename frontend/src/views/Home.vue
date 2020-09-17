<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <h3>下面是测试接口内容</h3>
    <ul>
      <li v-for="item in userList" :key="item.id">
        姓名：<span>{{ item.name }}</span>
        年龄：<span>{{ item.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios' // 引入 axios

export default {
  name: 'Home',
  data() {
    return {
      userList: [] // 初始化一个数组用于列表渲染
    }
  },
  mounted() { // mounted 生命周期中进行网络请求
    // 网络请求
    axios.get('/api/user')
    .then(res => {
      // 将请求到的数据赋值给 userList 进而数据驱动试图渲染到页面
      this.userList = res.data
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
</script>
