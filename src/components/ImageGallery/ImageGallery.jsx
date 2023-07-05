import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import notifyOptions from '../../helpers/toastNotifyOptions';
import { API_KEY, BASE_URL } from '../../helpers/pixabayOptions';

import { toast } from 'react-toastify';

import axios from 'axios';

export default class ImageGallery extends Component {
  state = {
    queryData: null,
    // isLoading: false,
    error: null,
    status: 'idle',
    per_page: 40,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({
        status: 'pending',
        // isLoading: true, queryData: null, error: null
      });

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
        .then(resp => {
          if (resp.data.hits.length) {
            return this.setState({
              queryData: resp.data,
              status: 'resolved',
            });
          }
          return Promise.reject(
            new Error(`There is no images by query: ${nextQuery}`)
          );
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
          toast.error('Oops. Something has gone wrong', notifyOptions);
        });
      // .finally(() => this.setState({ isLoading: false }));
    }
  }
  render() {
    const { queryData, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter your query</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }

    if (status === 'resolved') {
      const imagesArray = queryData.hits;

      return (
        <div>
          <ul className="gallery">
            {imagesArray.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              );
            })}
          </ul>
        </div>
      );
    }

    // return (
    //   <div>
    //     {error && <h2>{error.message}</h2>}
    //     {isLoading && <Loader />}
    //     {queryData && !!queryData.totalHits && (
    //       <ul className="gallery" style={{ backgroundColor: 'yellow' }}>
    //         <ImageGalleryItem queryData={queryData} />
    //       </ul>
    //     )}
    //   </div>
    // );
  }
}
