import React from "react";
import ActionButton from "./ActionButton";

const TableData = ({
  name,
  email,
  mobile,
  locationType,
  locationString,
  id,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{locationType}</td>
      <td>{locationString}</td>
      <td>
        <ActionButton action="Mark Update" id={id} />{" "}
        <ActionButton action="Delete" id={id} />
      </td>
    </tr>
  );
};

export default TableData;
