import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";

function Contact(props) {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  });
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    telnum: false,
    email: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleBlur = (field) => (evt) => {
    setTouched({ ...touched, [field]: true });
  };
  const handleSubmit = (event) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    event.preventDefault();
  };

  const validate = (firstname, lastname, telnum, email) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    if (touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    else if (touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";

    if (touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    else if (touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (touched.telnum && !reg.test(telnum))
      errors.telnum = "Tel. Number should contain only numbers";

    if (touched.email && email.split("").filter((x) => x === "@").length !== 1)
      errors.email = "Email should contain a @";

    return errors;
  };

  const errors = validate(
    values.firstname,
    values.lastname,
    values.telnum,
    values.email
  );

  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={values.firstname}
                  valid={errors.firstname === ""}
                  invalid={errors.firstname !== ""}
                  onBlur={handleBlur("firstname")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.firstname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={values.lastname}
                  valid={errors.lastname === ""}
                  invalid={errors.lastname !== ""}
                  onBlur={handleBlur("lastname")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.lastname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. Number"
                  value={values.telnum}
                  valid={errors.telnum === ""}
                  invalid={errors.telnum !== ""}
                  onBlur={handleBlur("telnum")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.telnum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={handleBlur("email")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
