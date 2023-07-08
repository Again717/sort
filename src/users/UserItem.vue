<template>
<div class="sort-con">
<base-sort>
    <div class="filter-con">
        <h2>Active Users</h2>
    <div class="filter-item">
        <div>
            <input type="text" placeholder="Filter items" v-model="activeInput">
        </div>
        <div class="filter-sort">
            <button @click="sort('shang')">Sort Ascending</button>
            <button @click="sort('xia')">Sort Descending</button>
        </div>
    </div>
</div>
    <user-list v-for="duy of sortending"
    :key="duy.id"
    :id="duy.id"
    :fullName="duy.fullName" @viewSlider="viewSliders"></user-list>
    </base-sort>
    <base-sort v-if="isview">
    <user-last :user="viewUser"></user-last>
    </base-sort>
</div>
</template>
<script>
import UserList from './UserList.vue'
import UserLast from './usered/UserLast.vue'
import dummyData from '../dummy-data.js'

import { ref, toRefs } from 'vue'
import HooksSearch from '../hooks/search.js'
import HooksSort from '../hooks/sort.js'
export default {
    components: {
        dummyData,
        UserList,
        UserLast
    },
    props: ['user'],
    setup (props) {
        // const users = ref(dummyData)
        const isview = ref(false)
        const viewUser = ref(null)
        // 获取props的反应性,如果单独调用props.user则没有反应性
        // 例如watch(props.user, function(){})
        // const propsWithRefs = toRefs(props);
        // const user propsWithRefs.user
         const { user } = toRefs(props)
        // 调用搜索重复逻辑的函数
    const { availUser, activeInput } = HooksSearch(
            user,
            'fullName'
        )
        // 排序
        // 调用搜索重复逻辑的函数
   const { sorting, sortending, sort } = HooksSort(availUser, 'fullName')
   // 查询选中对应id的view详细内容
   function viewSliders (id) {
        isview.value = true
        viewUser.value = user.value.find((user) => user.id === id)
    }
        return { activeInput, isview, viewUser, sorting, availUser, sortending, viewSliders, sort }
    }
    // data () {
    //     return {
    //         seleInput: '', // 绑定输入框
    //         sortactive: dummyData, // 数据
    //         isview: false, // 判断有无点击view
    //         viewUser: null, // 用户点击view查看详细内容
    //         sorting: null // 判断选择的升序还是降序
    //     }
    // },
    // 这里使用观察不行
    // watch: {
    //     seleInput: {
    //         immediate: true,
    //         handler (val) {
    //          this.selees = this.sortactive.filter(function (e) {
    //             return e.fullName.indexOf(val) !== -1
    //         })
    //     }
    // },
//     computed: {
//         // 搜索查找关键字
//         availUser () {
//             let user = []
//             if (this.seleInput) {
//                 user = this.sortactive.filter((use) =>
//                 use.fullName.indexOf(this.seleInput) !== -1)
//             } else if (this.sortactive) {
//                 user = this.sortactive
//             }
//             return user
//         },
//         // 排序
//         sortending () {
//             // 如果用户没有进行排序则显示当前排序
//          if (!this.sorting) {
//                 return this.availUser
//             }
//             // 升序和降序
//             return this.availUser.slice().sort((a, b) => {
//                 if (this.sorting === 'shang' && a.fullName > b.fullName) {
//                   return 1
//                 } else if (this.sorting === 'shang') {
//                     console.log(a, b)
//                     return -1
//                     // 降序
//                 } else if (this.sorting === 'xia' && a.fullName > b.fullName) {
//                     return -1
//                 } else {
//                      return 1
//                 }
//             })
//         }
// },
// methods: {
//     viewSliders (id) {
//         this.isview = true
//         this.viewUser = this.sortactive.find((user) => user.id === id)
//     },
//     // 查看用户点击升序还是降序
//     sort (val) {
//         this.sorting = val
//     }
// }
}
</script>

<style scoped>
.sort-con{
    width: 100%;
    display: flex;
    justify-content: center;
    grid-gap: 10px;
}
.filter-con{
    width: 100%;
    height: 25%
}
h2{
    position: absolute;
    top: 20px;
    left: 20px;
}
.filter-item{
    position: absolute;
    top: 80px;
    left: 20px;
}
.filter-item input{
    width: 450px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #cccccc;
    outline: none;
}
.filter-sort{
    margin-top: 10px;
}
.filter-sort button{
    width: 120px;
    height: 40px;
    margin-left: 5px;
    border-radius: 20px;
    border: 1px solid #cccccc;
    outline: none;
    background: aquamarine;
    color: #000000
}
</style>
