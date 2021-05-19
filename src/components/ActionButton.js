import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import leadActions from "../redux/actions/lead.actions";
let isValid = false;
const ActionButton = ({ action, id }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [leadData, setLeadData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "",
    location_string: "",
  });
  const postDataValidation = (object) => {
    let array = Object.values(object);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "" || array[i] === null) {
        return false;
      }
    }
    return true;
  };
  const [updateData, setUpdateData] = useState({
    communication: "",
  });
  const handleChange = (e) => {
    if (action === "Add Lead") {
      setLeadData({ ...leadData, [e.target.name]: e.target.value });
      console.log(leadData);
      isValid = postDataValidation(leadData);
    } else if (action === "Mark Update") {
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Add Lead") {
      console.log(leadData);
      dispatch(leadActions.postData(leadData));
    } else if (action === "Mark Update") {
      console.log(updateData);
      dispatch(leadActions.updateData(updateData, id));
    } else {
      dispatch(leadActions.deleteData(id));
    }
  };
  return (
    <>
      <button className="btn-black" onClick={handleShow}>{`${action}`}</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {action === "Add Lead" ? (
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>{`${action}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label>Location type</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      onChange={handleChange}
                      name="location_type"
                    >
                      <option></option>
                      <option>City</option>
                      <option>Zip</option>
                      <option>Country</option>
                    </Form.Control>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Mobile Phone</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Mobile Phone"
                      name="mobile"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Location Type</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Location String"
                      name="location_string"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" disabled={!isValid}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        ) : action === "Mark Update" ? (
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title>{`${action}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Communication</FormLabel>
              <FormControl
                type="textarea"
                row={3}
                name="communication"
                onChange={handleChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <>
            <Modal.Header>
              <Modal.Title>Do you wish to delete this lead?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Yes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default ActionButton;
