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
  ActiveIconSideBar,
} from './styledComponents'

class Sidebar extends Component {
  state = {isHome: true, isTrending: false, isGaming: false, isSaved: false}

  onClickHome = () => {
    this.setState({
      isHome: true,
      isTrending: false,
      isGaming: false,
      isSaved: false,
    })
  }

  onClickTrending = () => {
    this.setState({
      isHome: false,
      isTrending: true,
      isGaming: false,
      isSaved: false,
    })
  }

  onClickGaming = () => {
    this.setState({
      isHome: false,
      isTrending: false,
      isGaming: true,
      isSaved: false,
    })
  }

  onClickSave = () => {
    this.setState({
      isHome: false,
      isTrending: false,
      isGaming: false,
      isSaved: true,
    })
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
                  <HeaderEachItemLg
                    dark={isDarkTheme}
                    onClick={this.onClickHome}
                  >
                    <ActiveIconSideBar active={isHome}>
                      <MdHome size={30} />
                    </ActiveIconSideBar>
                    <ItemName dark={isDarkTheme}>Home</ItemName>
                  </HeaderEachItemLg>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <HeaderEachItemLg
                    dark={isDarkTheme}
                    onClick={this.onClickTrending}
                  >
                    <ActiveIconSideBar active={isTrending}>
                      <HiFire size={30} />
                    </ActiveIconSideBar>
                    <ItemName dark={isDarkTheme}>Trending</ItemName>
                  </HeaderEachItemLg>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <HeaderEachItemLg
                    dark={isDarkTheme}
                    onClick={this.onClickGaming}
                  >
                    <ActiveIconSideBar active={isGaming}>
                      <SiYoutubegaming size={30} />
                    </ActiveIconSideBar>
                    <ItemName dark={isDarkTheme}>Gaming</ItemName>
                  </HeaderEachItemLg>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <HeaderEachItemLg
                    dark={isDarkTheme}
                    onClick={this.onClickSave}
                  >
                    <ActiveIconSideBar active={isSaved}>
                      <CgPlayListAdd size={30} />
                    </ActiveIconSideBar>
                    <ItemName dark={isDarkTheme}>Saved Videos</ItemName>
                  </HeaderEachItemLg>
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
