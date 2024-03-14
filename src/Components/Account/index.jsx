import { useState } from "react";
import privateImg from "../../assets/images/privateImg.svg";
import eye from "../../assets/images/eye.svg";
import money from "../../assets/images/money.svg";

export const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Account</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Available Balance
        <span>
          <img className="image-icon" src={money} alt="Balance icon" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="details">$</span> 8,621.50
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="image-icon"
          src={toggleState ? privateImg : eye}
          alt="Balance Privacy"
        />
      </button>
    </div>
  );
};
