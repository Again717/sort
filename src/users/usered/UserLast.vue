<template>
    <div>
        <h2>{{ user.fullName }}:Projects</h2>
        <input type="text" placeholder="FullName"   v-model="activeInput">
    <ul v-if="user">
        <user-title v-for="pro in acs"
        :key="pro.id"
        :id="pro.id"
        :title="pro.title">
        </user-title>
    </ul>
    <h3 v-else>Not User</h3>
    </div>
</template>

<script>
import UserTitle from './UserTitle.vue'
import { computed, watch, toRefs } from 'vue'
// 调用重复逻辑的函数
import HooksSearch from '../../hooks/search.js'
export default {
    props: ['user'],
    components: {
        UserTitle
    },
    setup (props) {
                // 获取props的反应性,如果单独调用props.user则没有反应性
        // 例如watch(props.user, function(){})
        // const propsWithRefs = toRefs(props);
        // const user propsWithRefs.user
        const { user } = toRefs(props)
        const projects = computed(function () {
            return user.value ? user.value.projects : []
        })
        const { availUser, undateSearch, activeInput } = HooksSearch(
            projects,
            'title'
        )
        const projectsed = computed(function () {
            return props.user.projects
        })

        const hasProjects = computed(function () {
            return props.user.projects && availUser.value.length > 0
        })
        // 当用户切换view时,重置输入框内容
        watch(user, function () {
            activeInput.value = ''
        })
        return { pro: projectsed, acs: availUser, hasProjects, undateSearch, activeInput }
    }
//     props: ['user'],
//     data () {
//         return {
//             activeSearch: ''
//         }
//     },
//     computed: {
//         projectsed () {
//             return this.user.projects
//         },
//         availbleProjects () {
//             if (this.actveSearch) {
//              return this.user.projects.filter((prj) =>
//              prj.title.includes(this.activeSearch))
//         }
//         return this.user.projects
//     }
// }
}
</script>
