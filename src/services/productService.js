
import baseService from "./base/baseService";

const PRODUCT_URL = "/product";

const productService = {
    getAllProduct() {
        return baseService.get(`${PRODUCT_URL}/get-all`);
    },
    createProduct(body) {
        return baseService.post(`${PRODUCT_URL}/create`, body);
    },
    deleteProduct(id) {
        return baseService.delete(`${PRODUCT_URL}/${id}`);
    },
    updateProduct(body) {
        return baseService.put(`${PRODUCT_URL}/update`, body);
    },
    getProductById(id) {
        return baseService.get(`${PRODUCT_URL}/${id}`);
    },
    searchProduct(body) {
        return baseService.post(
            `${PRODUCT_URL}/search`,
            body
        );
    },
};

export default productService;
