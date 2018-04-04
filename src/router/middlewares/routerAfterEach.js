import loading from '../../components/domMinx/loading';

export default (router) => {
    router.afterEach(() => {
        if (loading.isShow()) {
            loading.hide();
        }
    });
};
