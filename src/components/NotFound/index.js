import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingContainer,
  HomeMainContainer,
  ApiViewContainer,
  FailureImage,
  FailureHeading,
  FailureInfo,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <TrendingContainer dark={isDarkTheme}>
          <Header />
          <HomeMainContainer dark={isDarkTheme}>
            <Sidebar />
            <ApiViewContainer>
              <FailureImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <FailureHeading dark={isDarkTheme}>Page Not Found</FailureHeading>
              <FailureInfo dark={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </FailureInfo>
            </ApiViewContainer>
          </HomeMainContainer>
        </TrendingContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
