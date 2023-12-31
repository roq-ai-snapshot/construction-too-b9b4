import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  product_id: yup.string().nullable(),
  order_id: yup.string().nullable(),
});
