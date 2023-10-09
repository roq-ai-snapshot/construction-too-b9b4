import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_date: any;
  total_price: number;
  customer_id?: string;
  sales_associate_id?: string;
  order_item?: OrderItemInterface[];
  user_order_customer_idTouser?: UserInterface;
  user_order_sales_associate_idTouser?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  sales_associate_id?: string;
}
