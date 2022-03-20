import { MultiValue } from 'react-select';
import { IData, IOptions, IFetch, IBlogs } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBlogs = {
  data: [],
  page: 0,
  rowsPerPage: 10,
  renderdata: [],
  searchByName: '',
  option: null,
  open: false,
  modaldata: {},
  length: 0,
  options: [],
};

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<IFetch>) => {
      const { data, types } = action.payload;
      state.data = data;
      state.length = data.length;
      state.options = types.map((type: string) => ({
        label: type,
        value: type,
      }));
      state.renderdata = data.slice(
        state.page * state.rowsPerPage,
        (state.page + 1) * state.rowsPerPage
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.option = null;
      state.searchByName = '';
      state.renderdata = state.data.slice(
        action.payload * state.rowsPerPage,
        (action.payload + 1) * state.rowsPerPage
      );
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.page = 0;
      state.option = null;
      state.searchByName = '';
      state.rowsPerPage = action.payload;
      state.renderdata = state.data.slice(0, action.payload);
    },
    handleClose: (state) => {
      state.open = false;
      state.modaldata = {};
    },
    setModalData: (state, action: PayloadAction<IData>) => {
      state.open = true;
      state.modaldata = action.payload;
    },

    setSearchByName: (state, action: PayloadAction<string>) => {
      const { page, data, rowsPerPage, option } = state;
      const newData = data
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        .filter(({ type }: IData) => {
          return (
            option?.length === 0 ||
            option === null ||
            !!option.find((v: IOptions) => v.value === type)
          );
        });
      state.renderdata =
        action.payload === ''
          ? newData
          : newData.filter(({ title }: IData) =>
              title?.toLowerCase().includes(action.payload.toLowerCase())
            );
      state.searchByName = action.payload;
    },

    setOptionValue: (state, action: PayloadAction<MultiValue<IOptions>>) => {
      const { page, data, rowsPerPage, searchByName } = state;
      const newData = data
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        .filter(({ title }: IData) => {
          return (
            searchByName === '' ||
            title?.toLowerCase().includes(searchByName.toLowerCase())
          );
        });

      if (state.option === null) {
        state.option = action.payload;
        state.renderdata = state.renderdata.filter(
          ({ type }: IData) => !!action.payload.find((v) => v.value === type)
        );
      } else {
        if (action.payload.length === 0) {
          state.option = null;
          state.renderdata = newData;
        } else {
          state.option = action.payload;
          state.renderdata = newData.filter(
            ({ type }: IData) => !!action.payload.find((v) => v.value === type)
          );
        }
      }
    },
  },
});

export const {
  setPage,
  setBlogs,
  handleClose,
  setModalData,
  setRowsPerPage,
  setOptionValue,
  setSearchByName,
} = blogsSlice.actions;

export default blogsSlice.reducer;
