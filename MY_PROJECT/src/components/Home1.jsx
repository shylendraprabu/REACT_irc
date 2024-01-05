import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, AppBar, Toolbar, Grid } from '@mui/material';
import Lottie from 'react-lottie';
import Music from './Animation - 1702919382167.json';
import img1 from '../assets/images/youtube.avif';
import img2 from '../assets/images/content.png';
import Footer from "../Footer"

export default function Home1() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Music,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Lottie options={defaultOptions} height={150} width={150} />
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <h1 style={{ fontFamily: 'monospace' }}>INFI-TENTS</h1>
            Connected To Discover Things
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', flexDirection: 'column' }}>
        <Link to="/PrimarySearchAppBar">
        <Card sx={{ maxWidth: 345, margin: '25px 10px', borderRadius: '50px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img1}
              alt="Image 1"
              style={{ borderRadius: '50px' }}
              />
              <Typography gutterBottom variant="h5" component="div">
                Video Contents
              </Typography>
            <CardContent>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="/Wikipedia">
        <Card sx={{ maxWidth: 345, margin: '0px 10px', borderRadius: '50px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img2}
              alt="Image 2"
              style={{ borderRadius: '50px' }}
              />
              <Typography gutterBottom variant="h5" component="div">
                Text Contents
              </Typography>
            <CardContent>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
            <Grid container spacing={3} style={{ margin: '20px 0', color: 'white' }}>
                <Grid item xs={12} md={4} style={{ borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px' }}>
                    <Typography variant="h6"><h3>Literary and Artistic Discovery Contents:</h3></Typography>
                    <Typography>
                    Literary and artistic discoveries unveil hidden works or reinterpret existing ones, enriching literature, art, and culture. Whether through lost manuscripts, rediscovered paintings, or revealed meanings, these contents offer new insights into creative processes, fostering a profound appreciation for the richness of human expression across history.            
                    </Typography>
                </Grid>
            <Grid item xs={12} md={4} style={{ borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px' }}>
                    <Typography variant="h6"><h3>Space Exploration Discovery Contents:</h3></Typography>
                    <Typography>
                    Space exploration discoveries, from missions and telescopic observations, reveal new celestial bodies and organic molecules, expanding our cosmic understanding. These findings offer insights into celestial origins and the possibility of extraterrestrial life, inspiring awe and curiosity while pushing the boundaries of human knowledge.            
                    </Typography>
            </Grid>
            <Grid item xs={12} md={4} style={{ borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px' }}>
                    <Typography variant="h6"><h3>Environmental Discovery Contents:</h3></Typography>
                    <Typography>
                    Environmental discoveries reveal insights into Earth's ecosystems, climate, and biodiversity, including new species and the impacts of climate change. These findings inform efforts to address environmental challenges, fostering responsible stewardship and sustainable practices for the well-being of future generations. Environmental discovery contents play a vital role in advancing awareness and conservation efforts.          
                    </Typography>
            </Grid>
            </Grid>
      </div>
      <Footer/>
    </div>
  );
}
