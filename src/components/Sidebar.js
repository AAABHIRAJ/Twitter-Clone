import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
          <TwitterIcon className='twitter__logo' />
          <div className='sidebar__options'>
              <SidebarOption active Icon={HomeOutlinedIcon } text="Home" />
              <SidebarOption Icon={SearchIcon} text="Explore" />
              <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
              <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
              <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
              <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
              <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
              <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />
          </div>
          <div className='sidebar__tweetDiv'>
                <span className='sidebar__tweet'>Tweet</span>
          </div>

    </div>
  )
}

export default Sidebar
