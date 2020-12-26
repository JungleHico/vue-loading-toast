import Loading from './Loading'

// 设置参数
function setData(instance, options) {
    if (options) {
        const { title } = options;
        if (title) {
            instance.title = title;
        }
    }
}

const loading = {
    install(Vue) {
        Vue.component(Loading.name, Loading);

        let instance = null;

        Vue.prototype.$showLoading = options => {
            const loading = document.getElementById('custom_loading');
            // 只能有一个loading
            if (loading === null) {
              const LoadingInstance = Vue.extend(Loading);
              instance = new LoadingInstance();
              setData(instance, options);
              const loadingDom = instance.$mount().$el;
              document.body.appendChild(loadingDom);
            }
            instance.loading = true;
        };

        Vue.prototype.$hideLoading = () => {
          if (instance) {
            instance.loading = false;
          }
        }
    }
};

export default loading;
