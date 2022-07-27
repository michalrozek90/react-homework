import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Characters from "./components/Characters";
import Todo from "./components/Todo";
import Contact from "./components/Contact";
import Button from "./components/Button";

const name = "Mateusz Wojdalski";
const description =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const imageAddress =
  "https://media.istockphoto.com/photos/lifework-balance-and-city-living-lifestyle-concept-of-business-man-picture-id1183657530";

const App = () => {
  const [logoText, setLogoText] = useState("");
  const [newLogoText, setNewLogoText] = useState("Logo");
  // const [showAboutMe, setShowAboutMe] = useState(true);
  // const [showCharacters, setShowCharacters] = useState(false);
  // const [showTodo, setShowTodo] = useState(false);
  // const [showContact, setShowContact] = useState(false);

  const [shotContent, setShowContent] = useState("AboutMe");

  const displayPage = (page) => {
    setShowContent(page);
  };

  // const displayAboutMe = () => {
  //   setShowAboutMe(true);
  //   setShowCharacters(false);
  //   setShowTodo(false);
  //   setShowContact(false);
  // };

  // const displayCharacters = () => {
  //   setShowCharacters(true);
  //   setShowAboutMe(false);
  //   setShowTodo(false);
  //   setShowContact(false);
  // };

  // const displayTodo = () => {
  //   setShowTodo(true);
  //   setShowCharacters(false);
  //   setShowAboutMe(false);
  //   setShowContact(false);
  // };

  // const displayContact = () => {
  //   setShowContact(true);
  //   setShowCharacters(false);
  //   setShowTodo(false);
  //   setShowAboutMe(false);
  // };

  return (
    <div className="App">
      <div className="Navbar">
        <div>{newLogoText}</div>
        <div className="Buttons">
          <Button onClick={() => displayPage("AboutMe")} text={"O mnie"} />
          <Button
            onClick={() => displayPage("Characters")}
            text={"Lista postaci"}
          />
          <Button onClick={() => displayPage("Todo")} text={"Todo"} />
          <Button onClick={() => displayPage("Contact")} text={"Kontakt"} />
        </div>
      </div>
      <div className="Content">
        {shotContent === "AboutMe" && (
          <AboutMe
            src={imageAddress}
            alt={"random-photo"}
            name={name}
            description={description}
            logoText={logoText}
            newLogoText={newLogoText}
            setLogoText={setLogoText}
            setNewLogoText={setNewLogoText}
          />
        )}
        {shotContent === "Characters" && <Characters />}
        {shotContent === "Todo" && (
          <Todo newLogoText={newLogoText} setNewLogoText={setNewLogoText} />
        )}
        {shotContent === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
