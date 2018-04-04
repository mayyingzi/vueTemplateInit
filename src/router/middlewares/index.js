// 将middlewares文件夹内，除index.js以外的文件所export的default function
// 放到middlewares数组中，export出去

const requireFiles = require.context('.', false, /\.js$/);

// requireFiles.keys() returns all possible requests that
// the context module can handle
// https://webpack.github.io/docs/context.html#context-module-api
const middlewareFiles = requireFiles
    .keys()
    .filter((key) => key !== './index.js');

const middlewares = middlewareFiles.map((file) => requireFiles(file).default);

export default middlewares;
