import HTTP from "."
import $ from "jquery";

export const fetchProducts = () => HTTP.get('/products')

export const fetchProduct = (id) => HTTP.get('/products/' + id)

export const saveProduct = (product) =>
    HTTP.post('/products', product)
        .catch(error => console.log(error))

export const updateProduct = (product) =>
    HTTP.put('/products', product)
        .catch(error => console.log(error))

export const editProduct = (history) => {
    $('input:checked').each(function () {
        history.push("/admin/products/edit/" + $(this).attr('id'))
    });
}

export const deleteProduct = (id) => {
    HTTP.delete('/products/' + id)
        .catch(error => console.log(error))
}