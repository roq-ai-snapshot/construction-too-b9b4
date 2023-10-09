import { OrderItemInterface } from 'interfaces/order-item';
import { OutletInterface } from 'interfaces/outlet';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  outlet_id?: string;
  order_item?: OrderItemInterface[];
  outlet?: OutletInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  outlet_id?: string;
}
