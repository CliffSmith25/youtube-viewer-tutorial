import React from 'react'
import VideoListItem from './video-list-item'

const VideoList = props => {
  const videoItems = props.videos.map(vid => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect} 
        key={vid.etag} 
        video={vid} />
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList