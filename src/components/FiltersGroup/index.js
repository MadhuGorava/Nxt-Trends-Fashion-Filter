import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class FiltersGroup extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {categoryOptions, ratingOption} = this.props
    return (
      <div className="filters-group-container">
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            className="input-element"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <BsSearch className="search-image" />
        </div>
        <ul className="list-items-container">
          <h1 className="heading">Category</h1>
          {categoryOptions.map(item => (
            <Link to={`/products?category=${item.name}`}>
              <li key={item.categoryId}>
                <p className="name">{item.name}</p>
              </li>
            </Link>
          ))}
        </ul>
        <ul className="list-items-container">
          <h1 className="heading">Rating</h1>
          {ratingOption.map(eachRate => (
            <Link to={`/products?rating=${eachRate.ratingId}`}>
              <li key={eachRate.ratingId} className="rate-list">
                <img
                  src={eachRate.imageUrl}
                  alt={`rating ${eachRate.ratingId}`}
                  className="rate-icon"
                />
                <p className="title">&up</p>
              </li>
            </Link>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.onClearAllFilters}
          className="clear-btn"
        >
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
