import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginBgContainer,
  LoginCardContainer,
  LoginLogo,
  LoginFormContainer,
  LoginLabelText,
  LoginInputText,
  CheckBoxContainer,
  CheckBoxInput,
  ShowPasswordText,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    isLoginError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onLoginFailure = errorMsg => {
    this.setState({isLoginError: true, errorMsg})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, isChecked, isLoginError, errorMsg} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginBgContainer dark={isDarkTheme}>
              <LoginCardContainer dark={isDarkTheme}>
                <LoginLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="Website Logo"
                />
                <LoginFormContainer onSubmit={this.onSubmitForm}>
                  <LoginLabelText dark={isDarkTheme} htmlFor="username">
                    USERNAME
                  </LoginLabelText>
                  <LoginInputText
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <LoginLabelText dark={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </LoginLabelText>
                  <LoginInputText
                    type={isChecked ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    dark={isDarkTheme}
                  />
                  <CheckBoxContainer>
                    <CheckBoxInput
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onChecked}
                      dark={isDarkTheme}
                    />
                    <ShowPasswordText dark={isDarkTheme} htmlFor="checkbox">
                      Show Password
                    </ShowPasswordText>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isLoginError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </LoginFormContainer>
              </LoginCardContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default LoginForm
