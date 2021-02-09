import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup); // cleans everything after testing

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />); // renderer() from r-t-l and it renders the component for the tests
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm(); // getByText() from r-t-l and it is provided after the render
  getByText("Add Course");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
