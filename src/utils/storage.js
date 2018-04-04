/**
 * storage 管理
 */

const recordNav = 'VUE_NAVIGATION';

/**
 * 页面访问历史记录信息，从sessionStorage中获取
 */
export const getNavSession = () => {
    try {
        const result = JSON.parse(sessionStorage.getItem(recordNav));
        return result || [];
    } catch (err) {
        return [];
    }
};
export const setNavSession = () => {};
