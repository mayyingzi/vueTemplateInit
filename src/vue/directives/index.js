function testDirec(Vue) {
    Vue.directive('testDirec', {
        // 只调用一次，指令第一次绑定到元素
        bind(el, binding, vnode) {
            el.style.fontSize = '24px';
            // console.log(binding);
            console.log(vnode);
        },
        // 被绑定元素插入父节点时调用
        inserted() {
            console.log('inserted');
        },
        // 所有组件的vnode更新是调用，但是可能发上在VNode更新之前
        update() {
            console.log('update');
        },
        // 指令所在组件VNode及其VNode全部更新后调用
        componentUpdated() {
            console.log('指令钩子事件');
        },
        // 指令与元素解绑是调用
        unbind() {
            console.log('指令unbind解绑');
        }
    });
}
/**
 * 注册指令
 * @param {Vue} Vue
 */
function registDirectives(Vue) {
    testDirec(Vue);
}

export default registDirectives;
