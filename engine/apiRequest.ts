import config from './config';

export function get(endpoint :string, params: any = {}) {
    let queryParams = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return fetch(`${config.serverAPI.path}${endpoint}?${queryParams}`)
        .then(x => x.json());
};
