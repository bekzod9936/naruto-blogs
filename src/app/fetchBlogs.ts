import axios from 'axios'

const fetchBlogs = () => {
  const response = axios('https://bekzod9936.github.io/blogs/db.json')
  return response
}

export default fetchBlogs
