import React from 'react'
import useApp from './useApp'
import { Container, Wrap } from './style'
import { useAppSelector } from 'reduxtoolkit/hooks'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const App = () => {
  const { isLoading } = useApp()
  const blogs = useAppSelector((state) => state.blogs.data)

  return (
    <Container>
      <Wrap>
        {blogs.map(({ image_url, mal_id, title, type }: any) => (
          <Card key={mal_id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image_url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {type}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Wrap>
    </Container>
  )
}

export default App
