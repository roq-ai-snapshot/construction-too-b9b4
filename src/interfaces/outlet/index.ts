import { ProductInterface } from 'interfaces/product';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  address: string;
  company_id?: string;
  manager_id?: string;
  product?: ProductInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    product?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  company_id?: string;
  manager_id?: string;
}
