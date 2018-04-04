// import Vue from 'vue';
import _ from 'lodash';
import loading from '../../components/domMinx/loading';
import { getNavSession } from '../../utils/storage';

export default (router) => {
    router.beforeEach((to, from, next) => {
        const historyNav = getNavSession();

        if (to.query.ZXY || historyNav) {
            if (_.indexOf(historyNav, `${to.name}?${to.query.ZXY}`) < 0) {
                loading.show();
            }
            const { title } = to.meta.title;
            // 设置document title
            document.title = title || '默认标题';
        }
        next();
    });
};
