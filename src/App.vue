<template>
  <user-item :user="users"></user-item>
</template>

<script>
import UserItem from './users/UserItem.vue'
import dummyData from './dummy-data.js'

export default {
  components: {
    UserItem,
    dummyData
  },
  data () {
    return {
      users: dummyData
    }
  }
}
</script>
