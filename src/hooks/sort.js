    import { ref, computed } from 'vue'
      // 排序
    export default function sortend (availUser, filterName) {
      const sorting = ref(null)
        const sortending = computed(function () {
                // 如果用户没有进行排序则显示当前排序
     if (!sorting.value) {
            return availUser.value
        }
        // 升序和降序
        return availUser.value.slice().sort((a, b) => {
            if (sorting.value === 'shang' && a[filterName] > b[filterName]) {
              return 1
            } else if (sorting.value === 'shang') {
                console.log(a, b)
                return -1
                // 降序
            } else if (sorting.value === 'xia' && a[filterName] > b[filterName]) {
                return -1
            } else {
                 return 1
            }
        })
    })
            //    查看用户点击升序还是降序
            function sort (val) {
                sorting.value = val
            }
        return { sorting, sortending, sort }
    }