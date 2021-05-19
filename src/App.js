import "./App.css";
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import ActionButton from "./components/ActionButton";
import { Container } from "react-bootstrap";
function App() {
  const loading = useSelector((state) => state.lead.loading);
  return (
    <>
      <ToastContainer />
      {/* {loading ? (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Container>
          <ActionButton action="Add Lead" />
      <TableComponent />
        </Container>
      )} */}
      <Container>
        <ActionButton action="Add Lead" />
        <TableComponent />
      </Container>
    </>
  );
}

export default App;
