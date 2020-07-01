// import React, { useState, useEffect, useContext } from "react";
import React, { useState, useContext } from "react";
import { Jumbotron } from "../components/JumboTron";
import PortCards from "../components/PortCards/portCards";
import SearchBar from "../components/SearchBar/searchBar";
import DevDataContext from "../contexts/DevDataContext";
import SetupContext from "../contexts/SetupContext";
import { Row } from "react-bootstrap";
// import { Container } from "semantic-ui-react";
// import SetupContext from "../contexts/SetupContext";
import HomeNav from "../components/HomeNav";
import "./home.css";

function Home() {
  const { devData } = useContext(DevDataContext);
  const { setupData } = useContext(SetupContext);
  // const { setup, setSetup } = useContext(SetupContext);
  const [displayRepos, setdisplayRepos] = useState({
    displayRepos: devData.repositories,
  });

  const handleInputChange = (event) => {
    const filter = event.target.value;
    var filteredRepos = devData.repositories.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    console.log("displayRepos:", filteredRepos);
    setdisplayRepos({
      displayRepos: filteredRepos,
    });
  };
  const resetSearch = (e) => {
    setdisplayRepos({ displayRepos: devData.repositories });
  };

  return (
    <div className='home'>
      <HomeNav />
      <Jumbotron />
      <div className="lower">
        <Row className="searchRow">
          <SearchBar
            handleInputChange={handleInputChange}
            resetSearch={resetSearch}
          ></SearchBar>
        </Row>
      </div>
      <PortCards className="cards" repositories={displayRepos.displayRepos}></PortCards>
    </div>
  );
}

export default Home;
