<template>
<div class="user-list">
<base-user>
    <h3>{{fullName}}</h3>
    <div class="user-view">
        <button @click="viewClass">View Projects</button>
    </div>
</base-user>
</div>
</template>

<script>
import dummyData from '../dummy-data.js'
export default {
    emits: ['viewSlider'],
    props: ['fullName', 'id'],
    components: {
        dummyData
    },
    data () {
        return {
            sortactive: dummyData
        }
    },
    methods: {
        viewClass () {
            this.$emit('viewSlider', this.id)
        }
    }
}
</script>

<style scoped>
h3{
    position: absolute;
    left: 10px;
    top: 0px;
}
.user-view{
    position: absolute;
    bottom: 10px;
    left: 10px;
}
.user-view button{
    width: 120px;
    height: 30px;
    outline: none;
    border-radius: 15px;
    border: 1px solid #cccccc;
    background: teal;
    color: #ffffff
}
</style>
