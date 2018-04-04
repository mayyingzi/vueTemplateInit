import Vue from 'vue';

const loadingVue = require('../Loading.vue');

const Loading = Vue.extend(loadingVue);

let loadingSingleInstance = null;

// 显示loading dom
const show = () => {
    if (loadingSingleInstance) {
        return;
    }
    loadingSingleInstance = new Loading({
        el: document.createElement('div'),
        mixins: [
            {
                props: {
                    text: {
                        default: ''
                    }
                },
                destroyed() {
                    loadingSingleInstance.$el.remove();
                    loadingSingleInstance = null;
                }
            }
        ]
    });
    document.body.appendChild(loadingSingleInstance.$el);
};

// hide loading dom
const hide = () => {
    if (loadingSingleInstance === null) {
        return;
    }
    loadingSingleInstance.show = false;
};

// check the loading is show
const isShow = () => loadingSingleInstance && loadingSingleInstance.show;

export default {
    show,
    hide,
    isShow
};
