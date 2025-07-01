import React from 'react'
import Header from '../Components/Header'
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PageFooter from '../Components/PageFooter';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';




Link
function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (


    <div>

      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url(/ruby.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Every Great Story Begins with a Great Plan.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Your vision, perfectly planned—from invites to "I do."
        </Typography>
        <Link to='/plan'>
          <Button variant="contained" size="large" sx={{ backgroundColor: 'rgb(201, 44, 70)' }}>
            Start Planning
          </Button></Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <section>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="error"
            gutterBottom
            sx={{ mt: 3 }}
          >
            Our Memories
          </Typography>
          <Stack direction="row" spacing={2}>
            <Item><Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Love Knots"
                titleTypographyProps={{
                  variant: 'h6',
                  align: 'center',
                  fontWeight: 'bold',
                  color: 'error.main'
                }}

              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.pinimg.com/736x/00/30/49/0030498c845315dd9fc3214d048fd0ed.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'red' }}>
                  A day woven with love, laughter, and lifelong promises.
                  Surrounded by family and friends, two souls became one.
                  Every moment captured was a memory etched in time.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton color='error' aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton color='error' aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  color='error'
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography sx={{
                    marginBottom: 2,
                    color: 'red'
                  }}>
                    The wedding was a beautiful blend of tradition and emotion.
                    From heartfelt vows to joyful celebrations, every detail was perfect.
                    The décor, the music, and the smiling faces created a timeless memory.
                    It wasn’t just a day—it was the beginning of a forever.
                  </Typography>


                </CardContent>
              </Collapse>
            </Card></Item>
            <Item><Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Candle Glow"
                titleTypographyProps={{
                  variant: 'h6',
                  align: 'center',
                  fontWeight: 'bold',
                  color: 'error.main'
                }}

              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.pinimg.com/736x/eb/57/78/eb57782282840aef301928f5f565bd43.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'red' }}>
                  Filled with laughter, vibrant balloons, and joyful cheers.
                  Every smile told a story,and every wish added warmth to the day.
                  It was a celebration that left hearts full and memories brighter.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton color='error' aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton color='error' aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  color='error'
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography sx={{
                    marginBottom: 2,
                    color: 'red'
                  }}>
                    The birthday celebration was nothing short of magical.
                    From surprise decorations to cheerful wishes, every moment brought a smile.
                    Laughter echoed, candles were blown, and memories were made to last a lifetime.
                    A perfect reminder of how joy grows when shared with loved ones.
                  </Typography>


                </CardContent>
              </Collapse>
            </Card></Item>
            <Item><Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="New Beginnings"
                titleTypographyProps={{
                  variant: 'h6',
                  align: 'center',
                  fontWeight: 'bold',
                  color: 'error.main'
                }}

              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.pinimg.com/736x/c6/25/7c/c6257ce12febe793af4aa289cba48cad.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'red' }}>
                  A door opened to new memories, laughter, and comfort.
                  Loved ones gathered to fill every corner with joy.
                  It was the beginning of a story written in warmth.


                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton color='error' aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton color='error' aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  color='error'
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography sx={{
                    marginBottom: 2,
                    color: 'red'
                  }}>
                    The housewarming was filled with blessings, joy, and shared excitement.
                    Every wall echoed with laughter, and every room was touched by warmth.
                    Friends and family came together to celebrate a new journey.
                    From heartfelt conversations to cozy decor, it was a day of togetherness.
                    The perfect start to a home where love will always live.
                  </Typography>


                </CardContent>
              </Collapse>
            </Card></Item>
          </Stack>

        </section>

        <Button sx={{ color: 'white', backgroundColor: 'rgb(201, 44, 70)', mt: 3 }}>Explore More</Button>
      </Box>


      <section className='bg-[#c92c46]'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 5 }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="white"
            gutterBottom
            sx={{ mt: 3 }}
          >
            From Décor to Dining, We’ve Got You Covered
          </Typography>
          <Stack direction="row" spacing={2}>
            <Item><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i.pinimg.com/736x/4e/43/09/4e4309e7e9a56b1f648fbb4dcfadb1ce.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='red'>
                  Catering And Beverages
                </Typography>

              </CardContent>

            </Card></Item>
            <Item><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image=" https://i.pinimg.com/736x/4b/a9/da/4ba9da7c6a704079b5dbdd25dd90c64d.jpg
"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='red'>
                  Decoration And Styling
                </Typography>

              </CardContent>

            </Card></Item>

            <Item><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i.pinimg.com/736x/b4/86/f7/b486f7cc18cf26a68f45cf35d80feeee.jpg
"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='red'>
                  Entertainment And Activities
                </Typography>

              </CardContent>

            </Card></Item>

            <Item><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="120"
                image="https://i.pinimg.com/736x/14/c8/d3/14c8d3efb60715add12ec876cfa950f1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='red'>
                  Event Shoots
                </Typography>



              </CardContent>

            </Card></Item>

          </Stack>

          <Typography sx={{ my: 5, color: 'white' }}>And Many More....</Typography>
          <Button sx={{ my: 3, bgcolor: 'white', color: 'rgb(201, 44, 70)' }}>Explore</Button>

        </Box>

      </section>


    </div>
  )
}

export default Home
