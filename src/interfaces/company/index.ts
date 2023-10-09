import { OutletInterface } from 'interfaces/outlet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  outlet?: OutletInterface[];
  user?: UserInterface;
  _count?: {
    outlet?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}
