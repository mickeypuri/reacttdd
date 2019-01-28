import axios from 'axios';
import devOptions from './config.dev';
import prodOptions from './config.prod';
import uatOptions from './config.uat';
import localOptions from './config.local';

let baseOptions = null;

switch (process.env.REACT_APP_ENV) {
    case 'development':
        baseOptions = devOptions;
        break;
    case 'uat':
        baseOptions = uatOptions;
        break;
    case 'production':
        baseOptions = prodOptions;
        break;
    case 'local':
        baseOptions = localOptions;
        break;
    default:
        throw new Error('Invalid Environment Variable');
}

// export the instance to allow for setting up a mock adaptor
export const instance = axios.create(baseOptions);

const httpService = {
    request: config => instance.request(config),
    get: (url, config) => instance.get(url, config),
    delete: (url, config) => instance.delete(url, config),
    head: (url, config) => instance.head(url, config),
    options: (url, config) => instance.options(url, config),
    post: (url, data, config) => instance.post(url, data, config),
    put: (url, data, config) => instance.put(url, data, config),
    patch: (url, data, config) => instance.patch(url, data, config),
    setToken: token => {
        instance.defaults.headers.common['Authorization'] = token;
    }
};

export default httpService;



