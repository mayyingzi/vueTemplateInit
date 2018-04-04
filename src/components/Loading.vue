<template lang="html">
    <transition name="fade" mode="in-out" v-on:after-leave="afterLeave">
        <div class="loading-wrapper mask"  v-show="show">
            <div class="loading">
                <div class="spinner"></div>
                <div class="text">{{ text }}</div>
            </div>
        </div>
    </transition>
</template>

<script lang="babel">
    export default {
        name: 'Loading',
        data() {
            return {
                show: false
            };
        },
        props: {
            text: {
                type: String,
                default: '正在加载'
            }
        },
        mounted() {
            this.show = true;
        },
        methods: {
            afterLeave() {
                this.$destroy();
            }
        }
    };
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins';

    .loading-wrapper
        .loading
            position absolute
            top 35%
            left 50%
            padding 0 rem(20)
            transform translate(-50%, 0)
            width rem(180)
            height @width
            color white
            background-color rgba(0, 0, 0, 50%)
            border-radius 5px
            box-sizing border-box
        .spinner
            width rem(80)
            height @width
            margin rem(24) auto
            box-sizing border-box
            background-image url('../assets/images/loading.svg')
            background-size contain
            background-position center center
            background-repeat no-repeat
        .text
            text-align center
</style>
