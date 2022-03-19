import React from 'react'
import fetchBlogs from './fetchBlogs'
import { useQuery } from 'react-query'
import { setBlogs } from 'reduxtoolkit/blogs'
import { useAppDispatch } from 'reduxtoolkit/hooks'

const useApp = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useQuery('fetchBlogs', fetchBlogs, {
    retry: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log(data)
      dispatch(setBlogs(data.data.data.data))
    },
  })

  return { isLoading }
}

export default useApp
