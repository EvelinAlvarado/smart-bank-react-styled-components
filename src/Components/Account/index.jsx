import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../UI";
import privateImg from "../../assets/images/privateImg.svg";
import eye from "../../assets/images/eye.svg";
import money from "../../assets/images/money.svg";

// Define a styled component that inherits styles from the Icon component
const IconMargin = styled(Icon)`
  margin-top: 2px; /* Inherits styles from Icon and adds a top margin */
`;

export const Account = () => {
  // State to toggle between show and hide
  const [toggleState, untoggle] = useState(true);

  // Function to handle state change on button click
  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Available Balance
        <span>
          <Icon src={money} alt="Balance icon" />
        </span>
        {/* Show balance only if toggleState is true */}
        {toggleState ? (
          <div className="balance">
            <span className="details">$</span> 8,621.50
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        {/* Use the IconMargin component that inherits styles from the Icon component */}
        <IconMargin
          /* style={{ marginTop: "2px" }} */
          src={toggleState ? privateImg : eye}
          alt="Balance Privacy"
        />
      </button>
    </div>
  );
};
