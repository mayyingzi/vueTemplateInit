/**
 * @author zhuxy
 * @fileOverview  three.js之性能检测插件（state）添加
 */

import Stats from 'stats.js-master';

/**
 * add dom node to watch webGL
 *
 */
const addStateGL = () => {
    const stats = new Stats();
    const canDom = stats.dom.getElementsByTagName('canvas');
    stats.dom.style.fontSize = '0.36rem';
    stats.dom.style.left = '70%';
    for (let i = 0; i < canDom.length; i++) {
        canDom[i].style.width = '1.6rem';
        canDom[i].style.height = '1rem';
    }
    // canDom.style.height = '1.8rem';
    document.body.appendChild(stats.dom);
    const animation = () => {
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop);
        });
    };
    animation();
    // DODO DOM NODES 个数获取
    // const IStats = new Stats();
    // const nodePanel = IStats.addPanel(
    //     new Stats.Panel('DOM', '#0ff', '#002')
    // );
    // IStats.dom.style.left = '70%';
    // IStats.dom.style.top = '1rem';
    // IStats.showPanel(3);
    // const canDomN = IStats.dom.getElementsByTagName('canvas');
    // console.log(canDomN);
    // for (let i = 0; i < canDomN.length; i++) {
    //     canDomN[i].style.width = '1.6rem';
    //     canDomN[i].style.height = '1rem';
    // }
    // document.body.appendChild(IStats.dom);
    // const animationNode = () => {
    //     requestAnimationFrame(function loop() {
    //         nodePanel.update();
    //         requestAnimationFrame(loop);
    //     });
    // };
    // animationNode();
};

export default addStateGL;
