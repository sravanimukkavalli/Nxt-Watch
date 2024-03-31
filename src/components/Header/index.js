import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderUnorderedList,
  HeaderUnorderedListLg,
  HeaderEachItem,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupText,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, onChangeTheme} = value

        const onClickTheme = () => {
          onChangeTheme()
        }

        return (
          <HeaderContainer dark={isDarkTheme}>
            <Link to="/">
              <HeaderLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderUnorderedListLg>
              <HeaderEachItem dark={isDarkTheme}>
                <ThemeButton
                  data-testid="theme"
                  dark={isDarkTheme}
                  onClick={onClickTheme}
                >
                  {isDarkTheme ? (
                    <IoSunnyOutline size={30} />
                  ) : (
                    <FaMoon size={30} />
                  )}
                </ThemeButton>
              </HeaderEachItem>
              <HeaderEachItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </HeaderEachItem>
              <HeaderEachItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" dark={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer dark={isDarkTheme}>
                      <PopupText dark={isDarkTheme}>
                        Are you sure, you want to logout?
                      </PopupText>
                      <PopupButtonsContainer>
                        <PopupCancelButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupConfirmButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderEachItem>
            </HeaderUnorderedListLg>
            <HeaderUnorderedList>
              <HeaderEachItem dark={isDarkTheme}>
                <ThemeButton
                  data-testid="theme"
                  dark={isDarkTheme}
                  onClick={onClickTheme}
                >
                  {isDarkTheme ? (
                    <IoSunnyOutline size={24} />
                  ) : (
                    <FaMoon size={24} />
                  )}
                </ThemeButton>
              </HeaderEachItem>
              <HeaderEachItem dark={isDarkTheme}>
                <GiHamburgerMenu size={24} />
              </HeaderEachItem>
              <HeaderEachItem dark={isDarkTheme}>
                <Popup
                  modal
                  trigger={<FiLogOut size={24} onClick={onClickLogout} />}
                >
                  {close => (
                    <PopupContainer dark={isDarkTheme}>
                      <PopupText dark={isDarkTheme}>
                        Are you sure, you want to logout
                      </PopupText>
                      <PopupButtonsContainer>
                        <PopupCancelButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupConfirmButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </HeaderEachItem>
            </HeaderUnorderedList>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
