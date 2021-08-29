import React, { useState } from "react";
import { useParams } from "react-router";
import { post_comment } from "../redux/actions/commentAction";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { connect } from "react-redux";

const CommentForm = (props) => {
  const param = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState({
    rating: 0,
    name: "",
    comment: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    comment: false,
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (field) => (event) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (event) => {
    props.post_comment({
      rating: parseFloat(values.rating),
      dishId: parseInt(param.dishId),
      author: values.name,
      comment: values.comment,
    });
    event.preventDefault();
  };

  const validate = (name, comment) => {
    const errors = {
      name: "",
      comment: "",
    };
    if (touched.name && name.length < 2)
      errors.name = "Must be greater than 2 characters";
    else if (touched.name && name.length > 15)
      errors.name = "Must be 15 characters or less";

    if (touched.comment && comment.length < 4)
      errors.comment = "Must be greater be 4 characters long";

    return errors;
  };

  const errors = validate(values.name, values.comment);
  return (
    <div>
      <Button
        color="secondary"
        className="fa fa-pencil"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Submit Comment
      </Button>
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label md={12} htmlFor="rating">
                Rating
              </Label>
              <Col md={12}>
                <Input
                  type="number"
                  id="rating"
                  name="rating"
                  min="0"
                  step="0.5"
                  max="5"
                  value={values.rating}
                  placeholder="0"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={12} htmlFor="name">
                Your Name
              </Label>
              <Col md={12}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  invalid={errors.name !== ""}
                  placeholder="Your Name"
                  onBlur={handleBlur("name")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.name}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={12} htmlFor="comment">
                Comment
              </Label>
              <Col md={12}>
                <Input
                  type="textarea"
                  id="comment"
                  name="comment"
                  placeholder="Comment here..."
                  rows={4}
                  invalid={errors.comment !== ""}
                  onBlur={handleBlur("comment")}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.comment}</FormFeedback>
              </Col>
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = {
  post_comment,
};

export default connect(null, mapDispatchToProps)(CommentForm);
