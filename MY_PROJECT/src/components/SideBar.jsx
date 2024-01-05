// SideBar.jsx
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import log from '../assets/images/menu-bar.png';

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['', 'Home', 'Subscription', 'Saved'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeOutlinedIcon />}
                {index === 1 && <SubscriptionsOutlinedIcon />}
                {index === 2 && <SaveAltOutlinedIcon />}
                {index === 3 && <ThumbUpOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Liked', 'Recent', 'History', 'Help','Logout'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <RecentActorsOutlinedIcon />}
                {index === 1 && <HistoryOutlinedIcon />}
                {index === 2 && <HelpOutlineOutlinedIcon />}
                {index === 3 && <LoginOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)} style={{ color: "white" }}>
          <img src={log} alt='' style={{ height: '25px' }} />
        </Button>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
