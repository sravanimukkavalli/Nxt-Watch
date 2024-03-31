import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import EachTrendingItem from '../EachTrendingItem'

import {
  TrendingContainer,
  HomeMainContainer,
  HomeSearchApiContainer,
  ApiViewContainer,
  FailureImage,
  FailureHeading,
  FailureInfo,
  RetryButton,
  SuccessUnorderedVideosContainer,
  TrendingSectionContainer,
  TrendingLogo,
  TrendingContainerText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.gethomeVideos()
  }

  gethomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      const updatedData = data.videos.map(each => ({
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSearchButton = () => {
    this.gethomeVideos()
  }

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ApiViewContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
              height="50"
              width="50"
            />
          </ApiViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickRetry = () => {
    this.gethomeVideos()
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ApiViewContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading dark={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureInfo dark={isDarkTheme}>
              We are having some trouble to complete your request.Please try
              again.
            </FailureInfo>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </ApiViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TrendingSectionContainer dark={isDarkTheme}>
                <TrendingLogo dark={isDarkTheme}>
                  <HiFire size={25} fill="#ff0b37" />
                </TrendingLogo>
                <TrendingContainerText dark={isDarkTheme}>
                  Trending
                </TrendingContainerText>
              </TrendingSectionContainer>
              <SuccessUnorderedVideosContainer>
                {homeVideosList.map(each => (
                  <EachTrendingItem key={each.id} videoDetails={each} />
                ))}
              </SuccessUnorderedVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideosBasedOnApi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer dark={isDarkTheme} data-testid="trending">
              <Header />
              <HomeMainContainer dark={isDarkTheme}>
                <Sidebar />
                <HomeSearchApiContainer>
                  {this.renderVideosBasedOnApi()}
                </HomeSearchApiContainer>
              </HomeMainContainer>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideos
