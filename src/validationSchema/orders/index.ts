import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  total_price: yup.number().integer().required(),
  customer_id: yup.string().nullable(),
  sales_associate_id: yup.string().nullable(),
});
