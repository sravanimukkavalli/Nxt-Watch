import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ReactPlayer from 'react-player'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  HomeContainer,
  VideoMainContainer,
  VideoSearchApiContainer,
  ApiViewContainer,
  FailureImage,
  FailureHeading,
  FailureInfo,
  RetryButton,
  SuccessVideosContainer,
  EachVideo,
  VideoTitle,
  ViewsLikesDetailsContainer,
  CountContainer,
  VideoItems,
  SpecificButton,
  HorizontalLine,
  SpecificVideoDetails,
  EachVideoTextContainer,
  ThumbnailImg,
  VideoName,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    isLiked: false,
    isUnliked: false,
    isSaved: false,
    specificVideoDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.gethomeVideos()
  }

  gethomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        subscriberCount: data.video_details.channel.subscriber_count,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }
      this.setState({
        specificVideoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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
              We are having some trouble to complete your request. Please try
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

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isUnliked: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      isUnliked: !prevState.isUnliked,
      isLiked: false,
    }))
  }

  checkVideo = savedVideosList => {
    const {specificVideoDetails} = this.state
    const isPresent = savedVideosList.find(each => {
      if (each.id === specificVideoDetails.id) {
        return true
      }
      return false
    })
    return isPresent
  }

  renderSuccessView = () => {
    const {specificVideoDetails, isLiked, isUnliked} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      subscriberCount,
      name,
      description,
      id,
    } = specificVideoDetails
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addToSavedVideos,
            onremoveVideos,
            savedVideosList,
          } = value
          const videoObj = this.checkVideo(savedVideosList)
          const isVideoSaved = videoObj !== undefined

          const onClickSaveButton = () => {
            addToSavedVideos({...specificVideoDetails})
            this.onClickSave()
          }

          const onClickSaved = () => {
            onremoveVideos(id)
            this.onClickSave()
          }

          return (
            <SuccessVideosContainer>
              <EachVideo>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </EachVideo>
              <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
              <ViewsLikesDetailsContainer>
                <CountContainer>
                  <VideoItems>{viewCount} views</VideoItems>
                  <CountContainer>
                    <BsDot />
                    <VideoItems>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </VideoItems>
                  </CountContainer>
                </CountContainer>
                <CountContainer>
                  <SpecificButton
                    type="button"
                    active={isLiked}
                    onClick={this.onClickLikeButton}
                  >
                    <AiOutlineLike />
                    Like
                  </SpecificButton>
                  <SpecificButton
                    type="button"
                    active={isUnliked}
                    onClick={this.onClickDislikeButton}
                  >
                    <AiOutlineDislike />
                    Dislike
                  </SpecificButton>
                  {isVideoSaved ? (
                    <SpecificButton
                      type="button"
                      active={isVideoSaved}
                      onClick={onClickSaved}
                    >
                      <CgPlayListAdd />
                      Saved
                    </SpecificButton>
                  ) : (
                    <SpecificButton
                      type="button"
                      active={isVideoSaved}
                      onClick={onClickSaveButton}
                    >
                      <CgPlayListAdd />
                      Save
                    </SpecificButton>
                  )}
                </CountContainer>
              </ViewsLikesDetailsContainer>
              <HorizontalLine />
              <SpecificVideoDetails>
                <ThumbnailImg src={profileImageUrl} alt="channel logo" />
                <EachVideoTextContainer>
                  <VideoName dark={isDarkTheme}>{name}</VideoName>
                  <VideoItems dark={isDarkTheme}>
                    {subscriberCount} subscribers
                  </VideoItems>
                </EachVideoTextContainer>
              </SpecificVideoDetails>
              <VideoDescription dark={isDarkTheme}>
                {description}
              </VideoDescription>
            </SuccessVideosContainer>
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
            <HomeContainer dark={isDarkTheme} data-testid="videoItemDetails">
              <Header />
              <VideoMainContainer dark={isDarkTheme}>
                <Sidebar />
                <VideoSearchApiContainer>
                  {this.renderVideosBasedOnApi()}
                </VideoSearchApiContainer>
              </VideoMainContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
