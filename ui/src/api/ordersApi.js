import HTTP from "."
import $ from 'jquery'

export const fetchOrders = () => HTTP.get('/orders')
    .finally(response =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(response), 100)
        })
    )

export const fetchOrder = (id) => HTTP.get('/orders/' + id)

export const saveOrder = (orderDto) =>
    HTTP.post('/orders', orderDto)
        .catch(error => console.log(error))

export const updateOrder = (order) =>
    HTTP.put('/orders', order)
        .catch(error => console.log(error))

export const editOrder = (history) => {
    $('input:checked').each(function () {
        history.push('/admin/orders/edit/'+$(this).attr('id'));
    });
}

export const deleteOrder = (id) => {
    HTTP.delete('/orders/'+id)
        .catch(error => console.log(error))
}

