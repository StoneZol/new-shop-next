const getQueryString = (obj, path = '') => Object
    .entries(obj)
    .reduce((acc, [k, v]) => (path && (k = `${path}.${k}`), acc + (acc && '&') + (
        v instanceof Object
            ? getQueryString(v, k)
            : `${k}=${v}`
    )), '');

    export default getQueryString;