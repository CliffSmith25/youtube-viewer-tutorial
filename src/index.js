import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search-bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyDLKKnAEtj5J2OkM8BJWsO-gbUKJnHQ_xQ'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboard'}, videos => {
      this.setState({ videos })
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
