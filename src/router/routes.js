import pageTitle from '@/lang/pageTitle';

// 使用此法动态引入文件，达不到，拆分文件的效果
// const view = (name) => (resolve) => {
//     require([`@/views/${name}/index.vue`], resolve); // eslint-disable-line
// };

// 使用定义加载，这样打包到一个单独的文件,拆分，按需加载
const loginView = (resolve) => {
    require([`../views/loginView/index.vue`], resolve); // eslint-disable-line
};
const testPageView = (resolve) => {
    require([`../views/testPage/index.vue`], resolve); // eslint-disable-line
};
const pageNotFoundView = (resolve) => {
    require([`../views/pageNotFound/index.vue`], resolve); // eslint-disable-line
};

const title = (page) => pageTitle[page];
// 无需访问权限要求页面
const constanRoutes = [
    {
        path: '/login',
        name: 'loginView',
        meta: {
            title: title('loginView')
        },
        // component: view('loginView')
        component: loginView
    },
    {
        path: '/',
        name: 'testPage',
        meta: {
            title: title('testPage')
        },
        // component: view('testPage')
        component: testPageView
    },
    {
        // 404 正则匹配(最好写在最后)
        path: '*',
        name: 'pageNotFound',
        meta: {
            title: title('pageNotFound')
        },
        // component: view('pageNotFound')
        component: pageNotFoundView
    }
];

export default constanRoutes;
