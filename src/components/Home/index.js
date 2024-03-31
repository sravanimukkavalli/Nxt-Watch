import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import EachVideoItem from '../EachVideoItem'

import {
  HomeContainer,
  HomeMainContainer,
  BannerContainer,
  BannerCloseButton,
  BannerLogo,
  BannerHeading,
  BannerButton,
  HomeSearchApiContainer,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearch,
  ApiViewContainer,
  FailureImage,
  FailureHeading,
  FailureInfo,
  RetryButton,
  SuccessUnorderedVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    isBanner: true,
    searchInput: '',
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.gethomeVideos()
  }

  onClickCloseBanner = () => {
    this.setState({
      isBanner: false,
    })
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  gethomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
              {homeVideosList.length > 0 ? (
                <SuccessUnorderedVideosContainer>
                  {homeVideosList.map(each => (
                    <EachVideoItem key={each.id} videoDetails={each} />
                  ))}
                </SuccessUnorderedVideosContainer>
              ) : (
                <ApiViewContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <FailureHeading dark={isDarkTheme}>
                    No Search results found
                  </FailureHeading>
                  <FailureInfo dark={isDarkTheme}>
                    Try different key words or remove search filter
                  </FailureInfo>
                  <RetryButton type="button" onClick={this.onClickRetry}>
                    Retry
                  </RetryButton>
                </ApiViewContainer>
              )}
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
    const {isBanner, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer dark={isDarkTheme} data-testid="home">
              <Header />
              <HomeMainContainer dark={isDarkTheme}>
                <Sidebar />
                <HomeSearchApiContainer>
                  {isBanner && (
                    <BannerContainer data-testid="banner" dark={isDarkTheme}>
                      <BannerCloseButton
                        type="button"
                        onClick={this.onClickCloseBanner}
                        data-testid="close"
                      >
                        <MdClose />
                      </BannerCloseButton>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <HomeSearchContainer>
                    <HomeSearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.onChangeSearch}
                      dark={isDarkTheme}
                    />
                    <HomeSearch
                      data-testid="searchButton"
                      onClick={this.onClickSearchButton}
                      dark={isDarkTheme}
                      type="button"
                    >
                      <BsSearch />
                    </HomeSearch>
                  </HomeSearchContainer>
                  {this.renderVideosBasedOnApi()}
                </HomeSearchApiContainer>
              </HomeMainContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
