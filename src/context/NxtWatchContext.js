import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideosList: [],
  addToSavedVideos: () => {},
  onremoveVideos: () => {},
})

export default NxtWatchContext
