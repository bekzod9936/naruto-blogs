export interface IData {
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

export interface IOptions {
  label?: string;
  value?: string;
}

export interface IFetch {
  data: IData[];
  types: string[];
}
export interface IBlogs {
  data: IData[];
  page: number;
  open: boolean;
  rowsPerPage: number;
  modaldata: IData;
  renderdata: IData[];
  searchByName: string;
  length: number;
  options: IOptions[];
  option: any;
}
