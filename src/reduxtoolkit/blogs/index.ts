import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IBlogs {
  data: []
}

const initialState: IBlogs = {
  data: [],
}

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<[]>) => {
      state.data = action.payload
    },
  },
})

export const { setBlogs } = blogsSlice.actions

export default blogsSlice.reducer
