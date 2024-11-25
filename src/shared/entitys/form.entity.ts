import { FormType } from '../enums/form-type.enum';

export interface IForm {
  id: string;
  name: string;
  url: string;
  tipo: FormType;
  descricao: string;
}
