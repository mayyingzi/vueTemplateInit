/**
 * vue初始化之前，注入各种plugin
 * filter register
 * router use
 */

import filter from '../../../vue/filters';
import directives from '../../../vue/directives';

export default (Vue) => {
    filter(Vue);
    directives(Vue);
};
