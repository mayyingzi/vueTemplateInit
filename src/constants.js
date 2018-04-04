// import { name, version } from '../../package.json';

export const ENV = process.env.NODE_ENV;
export const API_ENV = process.env.API_ENV;

export const API_VERSION = '1.0'; // 接口版本参数

// 接口设置
export const API_HOST = {
    alpha: {
        api_host: '//easy-mock.com/mock/5a45f0ce71ce891c4ab97afc/test'
    },
    beta: {
        api_host: '//easy-mock.com/mock/5a45f0ce71ce891c4ab97afc/test'
    },
    abtest: {
        api_host: '//easy-mock.com/mock/5a45f0ce71ce891c4ab97afc/test'
    },
    release: {
        api_host: '//easy-mock.com/mock/5a45f0ce71ce891c4ab97afc/test'
    },
};
