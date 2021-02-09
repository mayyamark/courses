import React from "react";
import { mount } from "enzyme"; // renders the component and mounts in the tree for the tests
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveCourse: jest.fn(), // jest.fn() from jest simulates an empty func and calls it when needed
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />); // using the non-connected component

  // another option: import Provider and the store, and use the connected component (default export)
  // return mount(<Provider store={store}><ManageCoursePage {...props} /></Provider>);
}

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit"); // simulate() from enzyme
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
