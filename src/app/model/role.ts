import {Permission} from '../model/permission';

export interface Role {
  id: string;
  permissions: Array<Permission>;

}
