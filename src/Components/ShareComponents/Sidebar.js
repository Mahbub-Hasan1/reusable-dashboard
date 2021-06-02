import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="sidebar">
        <List>
            <Link to="/">
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">Home</h6>
                </ListItem>
            </Link>
            <Link to="/about">
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">About</h6>
                </ListItem>
            </Link>
            <Link to="/services">
                <ListItem button>
                    <ListItemIcon>
                        <RoomServiceIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">Service</h6>
                </ListItem>
            </Link>
            <Link to="/contactInfo">
                <ListItem button>
                    <ListItemIcon>
                        <ContactsIcon />
                    </ListItemIcon>
                    <h6 className="mb-0">Contact</h6>
                </ListItem>
            </Link>
        </List>

        <Divider />

        <List>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="text" />
            </ListItem>
        </List>
    </div>
);

export default Sidebar;
