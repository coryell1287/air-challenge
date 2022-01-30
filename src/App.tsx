import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import persons, { Persons } from "./file";
import { ListWrapper } from "./List/ListWrapper";
import { ListSection } from "./List/ListSection";
import { ListItem } from "./List/ListItem";

function App() {
  const [userInput, setUserInput] = React.useState("");

  const search = (items: Persons[]) => {
    return items.filter((item) => {
      return (
        item.name.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    });
  };
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="Apps">
      <div className="list-container">
        <div className="logo">
          <div className="icon">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <ListWrapper>
          <section className="list-constraint">
            <header className="App-header">The Person Finder</header>
            <p className="search-message">
              If you just can't find someone and need to know what they look
              like, you've come to the right place! Just type the name of the
              person you are looking for below into the search box!
            </p>
            <section className="input-container">
              <input
                onChange={handleUserInput}
                value={userInput}
                type="text"
                name="search"
                id="search"
                className="form-control"
                placeholder="Search in Air HQ"
                autoComplete="off"
              />
            </section>
            <ListSection>
              <ul className="list">
                {search(persons).map((item) => {
                  return (
                    <ListItem
                      name={item.name}
                      id={item.id}
                      description={item.description}
                      email={item.email}
                      avatar={item.avatar}
                      key={item.id}
                    ></ListItem>
                  );
                })}
              </ul>
            </ListSection>
          </section>
        </ListWrapper>
      </div>
    </div>
  );
}

export default App;
