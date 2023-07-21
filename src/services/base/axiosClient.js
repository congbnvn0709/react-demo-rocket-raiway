import axios from 'axios';
import queryString from 'query-string';

const interceptAuth = (
    contentType = 'application/json',
    responseType = 'json'
) => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Accept-Language': 'en-US',
            'Content-Type': contentType,
        },
        responseType,
        paramsSerializer: {
            serialize: (params) => queryString.stringify(params),
        }
    });

    instance.interceptors.request.use((cf) => {
        const token = localStorage.getItem("accessToken");
        if (token && cf?.headers) {
            cf.headers['Authorization'] = 'Bearer ' + token;
        }
        return cf;
    });
    instance.interceptors.response.use(
        (response) => {
            // Do something with response data
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                // showMessage.error('Phiên bản đăng nhập hết hạn!');
                localStorage.clear();
                // window.location.href = `#${path.login}`;
            }
            if (error.response.status === 403) {
                // showMessage.error('Người dùng không có quyền truy cập chức năng này');
            }
            // Do something with response error
            return Promise.reject(error);
        }
    );
    return instance;
};

export default interceptAuth;
