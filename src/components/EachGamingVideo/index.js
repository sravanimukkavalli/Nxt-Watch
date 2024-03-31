import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  EachGamingItemContainer,
  EachVideoImg,
  EachVideoTextContainer,
  VideoTitle,
  VideoName,
} from './styledComponents'

const EachGamingVideo = props => {
  const {videoDetails} = props
  const {thumbnailUrl, title, viewCount, id} = videoDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
            <EachGamingItemContainer>
              <EachVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <EachVideoTextContainer>
                <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
                <VideoName>{viewCount} Watching Worldwide</VideoName>
              </EachVideoTextContainer>
            </EachGamingItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default EachGamingVideo
