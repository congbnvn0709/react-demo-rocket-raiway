import interceptAuth from './axiosClient';
import { showMessage } from '../../core/helpers/showMessage';

const instanceDownloadFile = interceptAuth('application/json', 'blob');
const instanceFormData = interceptAuth('multipart/form-data');
const instance = interceptAuth();

const baseService = {
    get: async (url = '', params) => {
        try {
            const { data } = await instance.get(url, { params });
            return data;
        } catch (error) {
            const { message } = error.message;
            showMessage.error(message);
            throw new Error(message);
        }
    },

    post: async (url = '', body, params) => {
        try {
            const { data } = await instance.post(url, body, { params });
            return data;
        } catch (error) {
            const { message } = error.message;
            showMessage.error(message);
            throw new Error(message);
        }
    },
    put: async (url = '', body, params) => {
        try {
            const { data } = await instance.put(url, body, { params });
            // const { message } = data;
            // if (status === API_SUCCESS_STATUS && message) {
            //   showMessage.success(message);
            // }
            return data;
        } catch (error) {
            const { message } = error.message;
            showMessage.error(message);
            throw new Error(message);
        }
    },

    delete: async (url = '', params) => {
        try {
            const { data } = await instance.delete(url, { params });
            // const { message, status } = data;
            // if (status === API_SUCCESS_STATUS && message) {
            //   showMessage.success(message);
            // }
            return data;
        } catch (error) {
            const { message } = error.message;
            showMessage.error(message);
            throw new Error(message);
        }
    },

    downloadFile: (url = '', fileName = '') =>
        new Promise(async (resolve, reject) => {
            await instanceDownloadFile
                .get(url)
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', fileName);
                    document.body.appendChild(link);
                    link.click();

                    resolve(response.data);
                })
                .catch(async (error) => {
                    const responseObj = await error.response.data.text();
                    showMessage.error(JSON.parse(responseObj).message);
                });
        }),

    postFile: async (url = '', body) => {
        try {
            const { data } = await instanceFormData.post(url, body);
            return data;
        } catch (error) {
            const { message } = error.response.data;
            showMessage.error(message);
            throw new Error(message);
        }
    },

    putFile: async (url = '', body) => {
        try {
            const { data } = await instanceFormData.put(url, body);
            return data;
        } catch (error) {
            const { message } = error.response.data;
            showMessage.error(message);
            throw new Error(message);
        }
    },
};

export default baseService;
