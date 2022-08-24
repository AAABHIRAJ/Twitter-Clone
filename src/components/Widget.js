import React from 'react';
import "./Widget.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widget() {
  return (
      <div className='widget'>
        <div className='widget__searchdiv'>
            <div className='widget__searchbar'>
                <SearchOutlinedIcon className='search__icon' />
                <input type="text" placeholder='Search Twitter' />
            </div>
        </div>
        
        
        <div className='widget__tweetEmbed'>
            <h1>What’s happening</h1>
            <TwitterTweetEmbed
                tweetId={'1560641021070827522'}
            />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="kumraj99"
                options={{height: 400}}
            />
        </div>
    </div>
  )
}

export default Widget;
