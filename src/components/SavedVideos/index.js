import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'
import EachTrendingItem from '../EachTrendingItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingContainer,
  HomeMainContainer,
  HomeSearchApiContainer,
  ApiViewContainer,
  FailureImage,
  FailureHeading,
  FailureInfo,
  SuccessUnorderedVideosContainer,
  TrendingSectionContainer,
  TrendingLogo,
  TrendingContainerText,
} from './styledComponents'

class SavedVideos extends Component {

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ApiViewContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading dark={isDarkTheme}>
              No saved videos found
            </FailureHeading>
            <FailureInfo dark={isDarkTheme}>
              You can save your videos while watching them.
            </FailureInfo>
          </ApiViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        const NoVideoView = savedVideosList.length === 0

        return (
          <>
            {NoVideoView ? (
              this.renderFailureView()
            ) : (
              <>
                <TrendingSectionContainer dark={isDarkTheme}>
                  <TrendingLogo dark={isDarkTheme}>
                    <MdPlaylistAdd size={25} fill="#ff0b37" />
                  </TrendingLogo>
                  <TrendingContainerText dark={isDarkTheme}>
                    Saved Videos
                  </TrendingContainerText>
                </TrendingSectionContainer>
                <SuccessUnorderedVideosContainer>
                  {savedVideosList.map(each => (
                    <EachTrendingItem key={each.id} videoDetails={each} />
                  ))}
                </SuccessUnorderedVideosContainer>
              </>
            )}
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer dark={isDarkTheme} data-testid="savedVideos">
              <Header />
              <HomeMainContainer dark={isDarkTheme}>
                <Sidebar />
                <HomeSearchApiContainer>
                  {this.renderSuccessView()}
                </HomeSearchApiContainer>
              </HomeMainContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
