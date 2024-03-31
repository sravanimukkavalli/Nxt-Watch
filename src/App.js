import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingRoute from './components/GamingRoute'
import NotFound from './components/NotFound'
import TrendingVideos from './components/TrendingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideos = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  onremoveVideos = id => {
    const {savedVideosList} = this.state
    const filteredVideo = savedVideosList.filter(each => each.id !== id)
    this.setState({savedVideosList: filteredVideo})
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideosList,
          addToSavedVideos: this.addToSavedVideos,
          onremoveVideos: this.onremoveVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute path="/trending" component={TrendingVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
