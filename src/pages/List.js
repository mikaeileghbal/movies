import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ViewList from "../components/ViewList";

export default function List() {
  const { category } = useParams();
  const location = useLocation();

  console.log(category, location.pathname.split("/")[1]);
  return (
    <ViewList>
      <p>
        List view d assass asas saasas asasaskjsadasdsakjdhsadkjsd haskd
        dhsadhkasdsakdhkj hd
      </p>
    </ViewList>
  );
}
