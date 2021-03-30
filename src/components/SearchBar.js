import React, { useState } from "react";

const SearchBar = ({ onTermSubmitApp }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
    // this.setState({ term: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    // this.props.onTermSubmitApp(this.state.term);
    onTermSubmitApp(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input value={term} type="text" onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
