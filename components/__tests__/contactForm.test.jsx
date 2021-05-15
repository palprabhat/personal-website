import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../contactForm";
import { mockFetch, mockMessage } from "../../pages/api/__mock__/message.mock";

const renderContactFormComponent = () => {
  const mockSubmitted = jest.fn();
  const { getByText, getByPlaceholderText, ...utils } = render(
    <ContactForm submitted={mockSubmitted} />
  );

  const name = getByPlaceholderText("Name");
  const email = getByPlaceholderText("Email");
  const subject = getByPlaceholderText("Subject");
  const message = getByPlaceholderText("Message");
  const submitButton = getByText("Send message");

  const fillForm = () => {
    userEvent.type(name, mockMessage.name);
    userEvent.type(email, mockMessage.email);
    userEvent.type(subject, mockMessage.subject);
    userEvent.type(message, mockMessage.message);
  };

  return {
    name,
    email,
    subject,
    message,
    submitButton,
    mockSubmitted,
    fillForm,
    ...utils,
  };
};

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
afterEach(() => window.fetch.mockClear());

describe("ContactForm Component", () => {
  it("should render correct content", async () => {
    const {
      name,
      email,
      subject,
      message,
      submitButton,
      baseElement,
      queryAllByText,
    } = renderContactFormComponent();

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(subject).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    await waitFor(() => {
      const errors = queryAllByText(/^Please /);
      expect(errors.length).toBe(0);
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("should not submit an empty form", async () => {
    const {
      queryAllByText,
      submitButton,
      baseElement,
      mockSubmitted,
    } = renderContactFormComponent();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmitted).toHaveBeenCalledTimes(0);

      const errors = queryAllByText(/^Please /);
      expect(errors.length).toBe(4);
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("should not submit with invalid email", async () => {
    const {
      email,
      queryByText,
      submitButton,
      fillForm,
      mockSubmitted,
    } = renderContactFormComponent();

    fillForm();
    userEvent.type(email, "test@");
    userEvent.click(submitButton);

    await waitFor(() => {
      const errors = queryByText("Please provide a valid email");
      expect(errors).toBeInTheDocument();

      expect(mockSubmitted).toHaveBeenCalledTimes(0);
    });
  });

  it("should be able to fill form", () => {
    const {
      name,
      email,
      subject,
      message,
      fillForm,
      queryAllByText,
    } = renderContactFormComponent();

    fillForm();

    expect(name.value).toBe(mockMessage.name);
    expect(email.value).toBe(mockMessage.email);
    expect(subject.value).toBe(mockMessage.subject);
    expect(message.value).toBe(mockMessage.message);

    const errors = queryAllByText(/^Please /);
    expect(errors.length).toBe(0);
  });

  it("should submit with valid form data", async () => {
    const {
      submitButton,
      fillForm,
      mockSubmitted,
      baseElement,
    } = renderContactFormComponent();

    fillForm();

    userEvent.click(submitButton);
    await waitFor(() => {
      expect(mockSubmitted).toHaveBeenCalledTimes(1);
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("should show error message on submission failed", async () => {
    window.fetch.mockImplementation((url) => mockFetch(url, { error: true }));

    const {
      submitButton,
      fillForm,
      mockSubmitted,
      queryByText,
      baseElement,
    } = renderContactFormComponent();

    fillForm();

    userEvent.click(submitButton);
    await waitFor(() => {
      const errors = queryByText("Something went wrong");
      expect(errors).toBeInTheDocument();

      expect(mockSubmitted).toHaveBeenCalledTimes(0);
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("should handle unexpected exception", async () => {
    window.fetch.mockImplementation((url) =>
      mockFetch(url, { exception: true })
    );

    const {
      submitButton,
      fillForm,
      mockSubmitted,
      queryByText,
      baseElement,
    } = renderContactFormComponent();

    fillForm();

    userEvent.click(submitButton);
    await waitFor(() => {
      const errors = queryByText("Something went wrong! Please try again.");
      expect(errors).toBeInTheDocument();

      expect(mockSubmitted).toHaveBeenCalledTimes(0);
    });

    expect(baseElement).toMatchSnapshot();
  });
});
