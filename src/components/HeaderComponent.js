import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

const Header = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRef = useRef(null);
  const passRef = useRef(null);
  const rememberRef = useRef(null);
  const handleChange = (e) => {
    const target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [values, setValues] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const handleLogin = function (event) {
    setIsModalOpen(!isModalOpen);
    alert(
      "Username: " +
        values.username +
        " Password: " +
        values.password +
        " Remember: " +
        values.remember
    );
    event.preventDefault();
  };

  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="/assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button onClick={() => setIsModalOpen(!isModalOpen)}>
              <span className="fa fa-sign-in fa-lg"></span> Login
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Login
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  onChange={handleChange}
                />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Header;
