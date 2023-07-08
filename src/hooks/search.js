import { ref, computed, watch } from 'vue'
export default function userSearch (item, filterName) {
    const activeSearch = ref('')
    const activeInput = ref('')

        // 搜索查找关键字
        const availUser = computed(function () {
            let user = []
            if (activeInput.value) {
                user = item.value.filter((items) =>
                items[filterName].indexOf(activeInput.value) !== -1)
            } else if (item.value) {
                user = item.value
            }
            return user
    })
        // 观察输入框的变化
        watch(activeSearch, function (newValue) {
                setTimeout(() => {
                    if (newValue === activeSearch.value) {
                        console.log(newValue)
                        activeSearch.value = newValue
                    }
                }, 300)
            })
    function undateSearch (val) {
        activeSearch.value = val
    }
    return { activeInput, activeSearch, availUser, undateSearch }
}