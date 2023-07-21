import baseService from "./base/baseService";

const API_END_POINT = '/auth/login-jwt';
const authService = {
    login: (body) => {
        return baseService.post(API_END_POINT, body)
    },
};

export default authService;
