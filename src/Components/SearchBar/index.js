import React from "react";
import { Form, FormControl } from "react-bootstrap";
import searchIco from "../../assets/img/searchIco.svg";
import "./index.css";
const SearchBar = (props) => {
  const [query, setQuery] = React.useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if(props.searchClick) {
        props.searchClick(query);
    }
  }

  return (
    <Form id="searchForm" className="container" onSubmit={(e) => {e.preventDefault();}}>
      <FormControl
        bsPrefix="form-control"
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-ico-wrapper" onClick={handleSearchClick}>
        <img height={"16px"} width={"16px"} alt="search-ico" src={searchIco} />
      </button>
    </Form>
  );
};

export default SearchBar;