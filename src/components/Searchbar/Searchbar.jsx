import { Component } from 'react';

import notifyOptions from '../../helpers/toastNotifyOptions';

import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter a search query', notifyOptions);

      return;
    }

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <FiSearch />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeQuery}
          />
        </form>
      </header>
    );
  }
}

// const Searchbar = ({ onSubmit }) => {
//   return (
//     <header className="searchbar">
//       <form className="form">
//         <button type="submit" className="button">
//           <FiSearch />
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

// export default Searchbar;
