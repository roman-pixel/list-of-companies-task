export interface IRootState {
  companies: ICompaniesState;
}

export interface ICompany {
  id: number;
  name: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface ICompaniesState {
  companies: ICompany[];
  selectedIds: number[];
}
