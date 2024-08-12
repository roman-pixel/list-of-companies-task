import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateRandomId, getCurrentDateTime } from '../utils/helpers';
import { companies } from '../data/companies';
import { ICompaniesState, ICompany } from '../types/companySliceTypes';

const initialState: ICompaniesState = {
  companies,
  selectedIds: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    // выбор одной строки
    toggleSelectCompany: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter(
          (selectedId) => selectedId !== id,
        );
      } else {
        state.selectedIds.push(id);
      }
    },
    // выбрать все
    selectAllCompanies: (state) => {
      state.selectedIds = state.companies.map((company) => company.id);
    },
    // снять выбор со всех
    deselectAllCompanies: (state) => {
      state.selectedIds = [];
    },
    // добавление записи
    addCompany: (
      state,
      action: PayloadAction<{ name: string; address: string }>,
    ) => {
      const newCompany: ICompany = {
        id: generateRandomId(),
        name: action.payload.name,
        address: action.payload.address,
        created_at: new Date().toISOString(), // Текущая дата в формате ISO
        updated_at: '', // Пустая строка
      };
      state.companies.push(newCompany);
    },
    // удалить выбранные
    deleteSelectedCompanies: (state) => {
      state.companies = state.companies.filter(
        (company) => !state.selectedIds.includes(company.id),
      );
      state.selectedIds = [];
    },
    // обновить наименование или адрес
    updateCompany: (
      state,
      action: PayloadAction<Partial<ICompany> & { id: number }>,
    ) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.companies.findIndex((company) => company.id === id);
      if (index !== -1) {
        state.companies[index] = {
          ...state.companies[index],
          ...updatedFields,
          updated_at: getCurrentDateTime(),
        };
      }
    },
  },
});

export const {
  toggleSelectCompany,
  selectAllCompanies,
  deselectAllCompanies,
  addCompany,
  deleteSelectedCompanies,
  updateCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
