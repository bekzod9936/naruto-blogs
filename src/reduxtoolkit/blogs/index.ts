import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IOptions {
  label?: string;
  value?: string;
}
interface IData {
  airing?: boolean;
  end_date?: string;
  episodes?: number;
  image_url?: string;
  mal_id?: number;
  members?: number;
  rated?: string;
  score?: number;
  start_date?: string;
  synopsis?: string;
  title?: string;
  type?: string;
  url?: string;
}

interface IFetch {
  data: IData[];
  types: string[];
}
interface IBlogs {
  data: IData[];
  page: number;
  open: boolean;
  rowsPerPage: number;
  modaldata: IData;
  renderdata: IData[];
  searchByName: string;
  length: number;
  options: IOptions[];
  option: IOptions | null;
}

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
      state.renderdata = state.data.slice(
        action.payload * state.rowsPerPage,
        (action.payload + 1) * state.rowsPerPage
      );
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.page = 0;
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
      const { page, data, rowsPerPage } = state;
      state.renderdata =
        action.payload === ''
          ? data.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
          : data
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .filter(({ title }: IData) =>
                title?.toLowerCase().includes(action.payload.toLowerCase())
              );
      state.searchByName = action.payload;
    },
    setOptionValue: (state, action: PayloadAction<IOptions>) => {
      if (state.option == null) {
        state.option = action.payload;
        state.renderdata = state.renderdata.filter(
          ({ type }: IData) => type === action.payload.value
        );
      } else {
        if (action.payload === null) {
          state.option = null;
          state.renderdata = state.data.slice(
            state.page * state.rowsPerPage,
            (state.page + 1) * state.rowsPerPage
          );
        } else {
          state.option = action.payload;
          state.renderdata = state.renderdata
            .filter(({ type }: IData) => type === action.payload.value)
            .slice(
              state.page * state.rowsPerPage,
              (state.page + 1) * state.rowsPerPage
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
