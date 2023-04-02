import React from "react";
import { useParams } from "react-router-dom";

function Member() {
  let params = useParams();
  return (
    <div>
      <h3>{params.memberName}</h3>
      <p>this is detail page of {params.memberName}</p>
    </div>
  );
}

export default Member;
