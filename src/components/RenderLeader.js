import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

const RenderLeader = ({ leader }) => {
  return (
    <div className="col-12 mt-5">
      <Media tag="li">
        <Media left middle>
          <Media object src={baseUrl + leader.image} alt={leader.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{leader.name}</Media>
          <p>{leader.description}</p>
        </Media>
      </Media>
    </div>
  );
};

export default RenderLeader;
