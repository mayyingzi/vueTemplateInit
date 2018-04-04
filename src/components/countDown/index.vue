<template>
    <div class="countDown">
        <p v-if="msTime.show">
            <span v-if="tipShow">{{tipText}}:</span>
            <span v-if="!tipShow">{{tipTextEnd}}:</span>
            <span 
                v-if="msTime.day>0"><span>{{msTime.day}}</span><i>{{dayTxt}}</i></span>
            <span>{{msTime.hour}}</span><i>{{hourTxt}}</i>
            <span>{{msTime.minutes}}</span><i>{{minutesTxt}}</i>
            <span>{{msTime.seconds}}</span><i>{{secondsTxt}}</i>            
        </p>
        <p v-if="!msTime.show">{{endText}}</p>
    </div>
</template>

<script>
import { leftpad } from '../../vue/filters';

export default {
    name: 'countDown',
    replace: true,
    data() {
        return {
            tipShow: true,
            // 倒计时数值
            msTime: {
                // 倒计时状态
                show: false,
                // 天
                day: '',
                // 时
                hour: '',
                // 分
                minutes: '',
                // 秒
                seconds: ''
            },
            // 精度单位
            dayUnitMs: 24 * 60 * 60 * 1000,
            hourUnitMs: 60 * 60 * 1000,
            minutesUnitMs: 60 * 1000,
            // 活动开始时间
            star: '',
            // 活动结束时间
            end: '',
            // 当前时间
            current: '',
            perTimeUnit: 1000,
            // 允许最大误差
            limitNum: 1010,
            cashPreTime: 0,
        };
    },
    watch: {
        currentTime() {
            this.refreshTime();
        }
    },
    props: {
        // 距离开始提示文字
        tipText: {
            type: String,
            default: '距离开始'
        },
        // 距离结束提示文案
        tipTextEnd: {
            type: String,
            default: '距离结束'
        },
        // 时间空间ID
        id: {
            type: String,
            default: '1'
        },
        // 当前时间
        currentTime: {
            type: Number
        },
        // 活动开始时间
        startTime: {
            type: Number
        },
        // 活动结束时间
        endTime: {
            type: Number
        },
        // 倒计时结束文本
        endText: {
            type: String,
            default: '已结束'
        },
        // 自定义显示文字：天
        dayTxt: {
            type: String,
            default: ':'
        },
        // 自定义显示文字：时
        hourTxt: {
            type: String,
            default: ':'
        },
        // 自定义显示文字：分
        minutesTxt: {
            type: String,
            default: ':'
        },
        // 自定义显示文字：秒
        secondsTxt: {
            type: String,
            default: ':'
        },
        // 是否开启秒表倒计时， 未完成
        secondsFixed: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.refreshTime();
    },
    methods: {
        // 更新当前个时间
        refreshTime() {
            // 判断是秒还是毫秒
            this.star =
                this.startTime *
                (this.startTime.toString().length === 10 ? 1000 : 1);
            this.end =
                this.endTime *
                (this.endTime.toString().length === 10 ? 1000 : 1);
            if (this.currentTime) {
                // this.currentTime.toString().length === 10
                //     ? (this.current = this.currentTime * 1000)
                //     : (this.current = this.currentTime);
                this.current =
                    this.currentTime *
                    (this.currentTime.toString().length === 10 ? 1000 : 1);
            } else {
                this.current = new Date().getTime();
            }
            if (this.end < this.current) {
                // 结束时间小于当前时间， 活动已结束
                this.msTime.show = false;
                this.end_message();
            } else if (this.current < this.star) {
                // 当前时间小于活动开始时间 活动尚未开始
                this.$set(this, 'tipShow', true);
                setTimeout(() => {
                    this.cashPreTime = new Date();
                    this.runTime(this.star, this.current, this.start_message);
                }, 1);
            } else if (
                (this.end > this.current && this.star < this.current) ||
                this.star === this.current
            ) {
                // 结束时间大于当前时间 并且开始时间小于当前时间， 执行活动开始倒计时
                this.$set(this, 'tipShow', false);
                this.msTime.show = true;
                this.$emit('start_callback', this.msTime.show);
                setTimeout(() => {
                    this.cashPreTime = new Date();
                    this.runTime(this.end, this.star, this.end_message, true);
                }, 1);
            }
        },
        runTime(startTime, endTime, callFun, type) {
            const msTime = this.msTime;
            const curCountTime = new Date();
            const useTime = curCountTime - this.cashPreTime;
            let needAddUse = 0;
            let timeDistance = startTime - endTime;
            // 锁屏处理
            if (useTime > this.limitNum) {
                timeDistance -= useTime;
                timeDistance = timeDistance < 0 ? 0 : timeDistance;
                needAddUse = useTime - 1000;
            }
            if (timeDistance > 0) {
                this.msTime.show = true;
                msTime.day = Math.floor(timeDistance / this.dayUnitMs);
                timeDistance -= msTime.day * this.dayUnitMs;
                msTime.hour = Math.floor(timeDistance / this.hourUnitMs);
                timeDistance -= msTime.hour * this.hourUnitMs;
                msTime.minutes = Math.floor(timeDistance / this.minutesUnitMs);
                timeDistance -= msTime.minutes * this.minutesUnitMs;
                // 是否开启秒表倒计时 ，未完成
                msTime.seconds = Math.floor(timeDistance / 1000).toFixed(0);
                timeDistance -= msTime.seconds * 1000;
                msTime.hour =
                    msTime.hour < 10
                        ? leftpad(msTime.hour, 2, '0')
                        : msTime.hour;
                msTime.minutes =
                    msTime.minutes < 10
                        ? leftpad(msTime.minutes, 2, '0')
                        : msTime.minutes;
                msTime.seconds =
                    msTime.seconds < 10
                        ? leftpad(msTime.seconds, 2, '0')
                        : msTime.seconds;
                const _s = Date.now();
                const _e = Date.now();
                const diffPerFunc = _e - _s;
                this.cashPreTime = curCountTime;

                setTimeout(() => {
                    if (type) {
                        this.runTime(
                            this.end,
                            (endTime += this.perTimeUnit + needAddUse),
                            callFun,
                            true
                        );
                    } else {
                        this.runTime(
                            this.star,
                            (endTime += this.perTimeUnit + needAddUse),
                            callFun
                        );
                    }
                }, this.perTimeUnit - diffPerFunc);
            } else {
                callFun();
            }
        },
        // 倒计时开始， 触发emit
        start_message() {
            this.$set(this, 'tipShow', false);
            this.$emit('start_callback', this.msTime.show);
            setTimeout(() => {
                this.cashPreTime = new Date();
                this.runTime(this.end, this.star, this.end_message, true);
            }, 1);
        },
        // 倒计时结束， 触发emit
        end_message() {
            this.msTime.show = false;
            if (this.currentTime <= 0) {
                return;
            }
            this.$emit('end_callback', this.msTime.show);
        }
    }
};
</script>
<style lang="stylus" scoped>
</style>

