import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  EachTrendingItemContainer,
  EachVideoTrendingImg,
  EachVideoTrendingDetails,
  ThumbnailImg,
  EachVideoTrendingTextContainer,
  VideoTitle,
  VideoName,
  CountTimeContainer,
  EachVideoTrendingDetailsSub,
  VideoItem,
} from './styledComponents'

const EachTrendingItem = props => {
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
  const publishedData = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
            <EachTrendingItemContainer>
              <EachVideoTrendingImg src={thumbnailUrl} alt="video thumbnail" />
              <EachVideoTrendingDetails>
                <ThumbnailImg src={profileImageUrl} alt="channel logo" />
                <EachVideoTrendingTextContainer>
                  <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
                  <EachVideoTrendingDetailsSub>
                    <VideoName dark={isDarkTheme}>{name}</VideoName>
                    <CountTimeContainer>
                      <VideoItem dark={isDarkTheme}>
                        <BsDot />
                        {viewCount} views
                      </VideoItem>

                      <VideoItem dark={isDarkTheme}>
                        <BsDot />
                        {publishedData}
                      </VideoItem>
                    </CountTimeContainer>
                  </EachVideoTrendingDetailsSub>
                </EachVideoTrendingTextContainer>
              </EachVideoTrendingDetails>
            </EachTrendingItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default EachTrendingItem
