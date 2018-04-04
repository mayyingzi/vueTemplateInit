<template lang="html">
    <div id="app">    
        <!-- header -->
        <vue-header
            v-show="!isNavHide"
            :class="headerClass">
            <!-- left -->
            <span slot="left"><component
                v-bind:is="headerLeftBtn"
            ></component></span>
            <span slot="title">{{title}}</span>
            <!-- right -->
            <span slot="right"><component
                v-bind:is="headerRightBtn" ></component></span>
        </vue-header>

        <!-- <router-view></router-view> -->
        <div class="main-box" :class="transitionClass">
            <transition 
                :mode="transitionMode"
                :name="transitionName">
                <navigation>
                    <router-view 
                        v-on:setHeader="setHeader"
                        v-on:setFooter="setFooter"
                        class="contentMain"></router-view>
                </navigation>
            </transition>
        </div>

        <!-- footer -->
        <vue-footer 
            :now-item="nowItem"
            :now-tab="nowTab"></vue-footer>
    </div>
</template>

<script lang="babel">
    import _ from 'lodash';
    import VueHeader from '@/components/header';
    
    import router from './router';

    const herderLeftInit = {
        template: '<span @click="back" class="back-btn"></span>',
        methods: {
            back() {
                router.back();
            }
        }
    };
    export default {
        name: 'vue-demo',
        components: {
            VueHeader,
            // VueFooter,
            VueFooter: require('@/components/footer').default,
            headerLeftBtn: {},
            headerRightBtn: {},
        },
        data() {
            return {
                view: true,
                transitionClass: '',
                transitionName: '',
                transitionMode: 'in-out',
                // header
                title: '',
                headerLeftBtn: herderLeftInit,
                headerRightBtn: null,
                headerClass: '',
                isNavHide: null,
                nowItem: '',
                nowTab: ''
            };
        },
        computed: {},
        beforeCreate() {
            this.$navigation.on('back', () => {
                this.routeFadeOut();
            });
            this.$navigation.on('replace', () => {
                this.routeFadeIn();
            });
            this.$navigation.on('forward', () => {
                this.routeFadeIn();
            });
            this.$navigation.on('refresh', () => {
                this.routeFadeIn();
            });
        },
        mounted() {},
        methods: {
            setHeader(config) {
                const initNav = {
                    headerLeftBtn: herderLeftInit,
                    headerRightBtn: null,
                    title: '',
                    headerClass: '',
                    isNavHide: null
                };
                _.extend(this, {
                    ...initNav
                }, config);
            },
            setFooter(ftConfig) {
                this.nowItem = ftConfig.nowItem || '';
                this.nowTab = ftConfig.nowTab || false;
            },
            routeFadeIn() {
                // console.log('打开新的页面');
                this.transitionName = 'slideIn';
                this.transitionMode = 'in-out';
                this.transitionClass = 'routePush';
            },
            routeFadeOut() {
                // console.log('回退页面');
                this.transitionName = 'slideOut';
                this.transitionMode = 'in-out';
                this.transitionClass = 'routePop';
            },
        }
    };
</script>

<style src="@/assets/styles/app.styl" lang="stylus"></style>
