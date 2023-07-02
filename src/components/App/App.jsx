import { Component } from 'react';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    query: '',
  };

  handleSubmitForm = query => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery query={this.state.query} />
        <ToastContainer />
      </div>
    );
  }
}
