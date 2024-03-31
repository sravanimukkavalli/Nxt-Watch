import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
// import {MdPlaylistAdd} from 'react-icons/md'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeSidebar,
  HomeUnorderedListLg,
  HeaderEachItemLg,
  ItemName,
  ContactUsContainer,
  ContactUs,
  LogosContainer,
  EachLogoItem,
  HeaderEachItemLgActive,
} from './styledComponents'

class Sidebar extends Component {
  state = {isHome: false, isTrending: false, isGaming: false, isSaved: false}

  onClickHome = () => {
    this.setState(prevState => ({
      isHome: !prevState.isHome,
      isTrending: false,
      isGaming: false,
      isSaved: false,
    }))
  }

  onClickTrending = () => {
    this.setState(prevState => ({
      isHome: false,
      isTrending: !prevState.isTrending,
      isGaming: false,
      isSaved: false,
    }))
  }

  onClickGaming = () => {
    this.setState(prevState => ({
      isHome: false,
      isTrending: false,
      isGaming: !prevState.isGaming,
      isSaved: false,
    }))
  }

  onClickSave = () => {
    this.setState(prevState => ({
      isHome: false,
      isTrending: false,
      isGaming: false,
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {isHome, isTrending, isGaming, isSaved} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeSidebar dark={isDarkTheme}>
              <HomeUnorderedListLg>
                <Link to="/" style={{textDecoration: 'none'}}>
                  {isHome ? (
                    <HeaderEachItemLgActive
                      active={isHome}
                      onClick={this.onClickHome}
                    >
                      <MdHome size={30} />
                      <ItemName dark={isDarkTheme}>Home</ItemName>
                    </HeaderEachItemLgActive>
                  ) : (
                    <HeaderEachItemLg
                      dark={isDarkTheme}
                      onClick={this.onClickHome}
                    >
                      <MdHome size={30} />
                      <ItemName dark={isDarkTheme}>Home</ItemName>
                    </HeaderEachItemLg>
                  )}
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  {isTrending ? (
                    <HeaderEachItemLgActive
                      dark={isDarkTheme}
                      onClick={this.onClickTrending}
                      active={isTrending}
                    >
                      <HiFire size={30} fill="#ff0b37" />
                      <ItemName dark={isDarkTheme}>Trending</ItemName>
                    </HeaderEachItemLgActive>
                  ) : (
                    <HeaderEachItemLg
                      dark={isDarkTheme}
                      onClick={this.onClickTrending}
                      active={isTrending}
                    >
                      <HiFire size={30} />
                      <ItemName dark={isDarkTheme}>Trending</ItemName>
                    </HeaderEachItemLg>
                  )}
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  {isGaming ? (
                    <HeaderEachItemLgActive
                      dark={isDarkTheme}
                      onClick={this.onClickGaming}
                    >
                      <SiYoutubegaming size={30} fill="#ff0b37" />
                      <ItemName dark={isDarkTheme}>Gaming</ItemName>
                    </HeaderEachItemLgActive>
                  ) : (
                    <HeaderEachItemLg
                      dark={isDarkTheme}
                      onClick={this.onClickGaming}
                      active={isGaming}
                    >
                      <SiYoutubegaming size={30} />
                      <ItemName dark={isDarkTheme}>Gaming</ItemName>
                    </HeaderEachItemLg>
                  )}
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  {isSaved ? (
                    <HeaderEachItemLgActive
                      dark={isDarkTheme}
                      onClick={this.onClickSave}
                      active={isSaved}
                    >
                      <CgPlayListAdd size={30} fill="#ff0b37" />
                      <ItemName dark={isDarkTheme}>Saved Videos</ItemName>
                    </HeaderEachItemLgActive>
                  ) : (
                    <HeaderEachItemLg
                      dark={isDarkTheme}
                      onClick={this.onClickSave}
                      active={isSaved}
                    >
                      <CgPlayListAdd size={30} fill="#ff0b37" />
                      <ItemName dark={isDarkTheme}>Saved Videos</ItemName>
                    </HeaderEachItemLg>
                  )}
                </Link>
              </HomeUnorderedListLg>
              <ContactUsContainer>
                <ContactUs>CONTACT US</ContactUs>
                <LogosContainer>
                  <EachLogoItem
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <EachLogoItem
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <EachLogoItem
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt=" linked in logo"
                  />
                </LogosContainer>
                <ItemName dark={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ItemName>
              </ContactUsContainer>
            </HomeSidebar>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Sidebar
