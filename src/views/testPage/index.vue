<template lang="html">
    <div class="testPage">
        <div class="test-go-derict">
            <p class="go-item" @click="goDirect('/login')" >跳转登录页面</p>
        </div>
        <div class="test-compentent">
            <div class="item-i" @click="cshowAlert">显示弹窗</div>
            <div class="item-i" @click="cshowToast">显示toast</div>
            <div class="item-i" @click="cshowLoading">显示loading</div>
            <div class="item-i">过滤器过99的数据显示为：{{100 | parseNumPoint}}</div>
            <div class="item-i">过滤器过99的数据显示为：{{100 | parseNum}}</div>
            <div class="item-i">过滤器转换为金额显示方式<p>-12.3663：</p>{{-12.3663 | parseMoney(true)}}</div>
            <div class="item-i">过滤器转换为金额显示方式<p>-12266399.3663：</p>{{-12266399.3663 | parseMoney}}</div>
            <div class="item-i">过滤器转换为金额显示方式<p>12：</p>{{12 | parseMoney}}</div>
            <div class="item-i">过滤器转换为金额显示方式<p>-12.0：</p>{{-12.0 | parseMoney(true)}}</div>
            <div class="item-i">过滤器转换位数字单位显示方式<p>12365.056：</p>{{12365.056 | parseNumUnit}}</div>
            
        </div>
        <div class="test-dir" v-testDirec>测试指令注册testDirec</div>
        <i class="test-arrow">测试箭头</i>
       
        <loading v-if="loading" :text="loadingText" />
        
        <toast :message="toastMsg" />
        <alert :message="alertOpts.message"
            :buttons="alertOpts.buttons"
            :left-btn="alertOpts.leftBtn"
            :right-btn="alertOpts.rightBtn"
            :single-btn="alertOpts.singleBtn" />
    </div>  
</template>

<script lang="babel">
import { mapActions, mapGetters } from 'vuex';
import loading from '../../components/Loading';
import toast from '../../components/Toast';
import alert from '../../components/Alert';

export default {
    name: 'testPage',
    components: {
        loading,
        toast,
        alert
    },
    data() {
        return {
            testTick:'这是初始值',
            error: {
                msg: '测试吧',
                buttons: 2,
                leftBtn: {
                    text: '取消',
                    handler: 'close'
                },
                rightBtn: {
                    text: '确定',
                    handler: 'unbindWx'
                }
            },
            loading: false,
            loadingText: '加载中',
        };
    },
    computed: {
        ...mapGetters(['toastMsg', 'alertOpts'])
    },
    watch: {
    },
    activated() {
        // console.log('组件已激活：此处作为页面的初始化数据更新');
        this.resetHeader();
        this.resetFooter();
    },
    mounted() {
        console.log('创建成功');
    },
    methods: {
        ...mapActions(['alert', 'toast']),
        // reset header
        resetHeader() {
            this.$emit('setHeader', {
                title: '测试页面显示标题',
                headerLeftBtn: null
            });
        },
        resetFooter() {
            this.$emit('setFooter', {
                nowTab: 'buyer',
                nowItem: '/'
            });
        },
        cshowAlert() {
            this.alert({ message: this.error.msg, ...this.error });
        },
        cshowToast() {
            this.toast('测试显示toast');
        },
        cshowLoading() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
        goDirect(path) {
            this.alert({
                message: path,
                singleBtn: {
                    text: '确认跳转',
                    handler: 'redirect',
                    params: {
                        url: path
                    }
                }
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins'
.testPage
    font-size rem(28)
    color $fcGrey
    text-align center
    .test-tit
        margin-bottom rem(112)
        padding-top rem(40)
    .item-i
        font-size rem(32)
        color #ff4d6a
        border 1px solid #cccccc
        text-align center
        padding rem(20) 0
        width 80%
        border-radius 10px
        margin 0 auto rem(20)
    .test-arrow
        font-size rem(24)
        line-height 1.2em
        display block
        font-size rem(20)
        font-style normal
        width 80%
        padding rem(20)
        margin 0 auto
        arrowGreyUp(0.2, 0.2)
        retinaBorder(false, false, false, true)
    .test-go-derict
        padding rem(10)
        display flex
        align-items center
        .go-item
            flex 1
            line-height 1.2em
            retinaBorder(true, true, true, true)
            padding rem(20)
</style>
