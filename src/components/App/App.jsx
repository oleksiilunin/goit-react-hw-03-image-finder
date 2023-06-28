import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';

const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Loader />
    </div>
  );
};

export default App;
