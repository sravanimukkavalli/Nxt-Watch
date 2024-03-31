import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  EachVideoItemContainer,
  EachVideoImg,
  EachVideoDetails,
  ThumbnailImg,
  EachVideoTextContainer,
  VideoTitle,
  VideoName,
  CountTimeContainer,
  VideoItem,
} from './styledComponents'

const EachVideoItem = props => {
  const {videoDetails} = props
  const {
    profileImageUrl,
    thumbnailUrl,
    name,
    publishedAt,
    title,
    viewCount,
    id,
  } = videoDetails
  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
            <EachVideoItemContainer>
              <EachVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <EachVideoDetails>
                <ThumbnailImg src={profileImageUrl} alt="channel logo" />
                <EachVideoTextContainer>
                  <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
                  <EachVideoDetails>
                    <VideoName dark={isDarkTheme}>{name}</VideoName>
                    <CountTimeContainer>
                      <BsDot />
                      <VideoItem dark={isDarkTheme}>
                        {viewCount} views
                      </VideoItem>
                      <BsDot />
                      <VideoItem dark={isDarkTheme}>{publishedDate}</VideoItem>
                    </CountTimeContainer>
                  </EachVideoDetails>
                </EachVideoTextContainer>
              </EachVideoDetails>
            </EachVideoItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default EachVideoItem
