import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import notifyOptions from '../../helpers/toastNotifyOptions';

import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36088213-4b97604b7362cbb60f40d0588';

export default class ImageGallery extends Component {
  state = {
    queryData: null,
    isLoading: false,
    error: null,
    per_page: 40,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ isLoading: true });

      setTimeout(() => {
        axios
          .get(BASE_URL, {
            params: {
              key: API_KEY,
              q: nextQuery,
              image_type: 'photo',
              orientation: 'horizontal',
              safesearch: true,
              page: this.state.page,
              per_page: this.state.per_page,
            },
          })
          .then(resp =>
            this.setState({ queryData: resp.data }, console.log(resp.data))
          )
          .catch(error => {
            this.setState({ error });
            toast.error('Oops. Something has gone wrong', notifyOptions);
            console.log(error);
          })
          .finally(() => this.setState({ isLoading: false }));
      }, 1000);
    }
  }
  render() {
    const { queryData, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        {queryData && (
          <ul className="gallery" style={{ backgroundColor: 'yellow' }}>
            <ImageGalleryItem queryData={queryData} />
          </ul>
        )}
      </div>
    );
  }
}
