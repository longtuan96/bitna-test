import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import leadActions from "../redux/actions/lead.actions";
import TableData from "./TableData";

const TableComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.lead.data);
  useEffect(() => {
    dispatch(leadActions.getData());
  }, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Num</th>
            <th>Location Type</th>
            <th>Location String</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <TableData
                name={item.first_name + " " + item.last_name}
                email={item.email}
                mobile={item.mobile}
                locationType={item.location_type}
                locationString={item.location_string}
                key={item._id}
                id={item._id}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
