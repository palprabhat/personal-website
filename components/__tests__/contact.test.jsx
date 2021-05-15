import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../contact";
import { mockFetch, mockMessage } from "../../pages/api/__mock__/message.mock";

const renderContactFormComponent = () => {
  const { getByText, getByPlaceholderText, ...utils } = render(<Contact />);

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
    fillForm,
    ...utils,
  };
};

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
afterEach(() => window.fetch.mockClear());

describe("Contact Component", () => {
  it("matched snapshot", async () => {
    const { baseElement } = renderContactFormComponent();

    expect(baseElement).toMatchSnapshot();
  });

  it("should show thank you message on successful for submission", async () => {
    const {
      submitButton,
      fillForm,
      queryByText,
      baseElement,
    } = renderContactFormComponent();

    expect(submitButton).toBeInTheDocument();

    fillForm();
    userEvent.click(submitButton);

    await waitFor(() => {
      const thankyouMessage = queryByText(
        "Thank you for reaching out to me, I will get back to you soon."
      );
      expect(thankyouMessage).toBeInTheDocument();
    });

    expect(baseElement).toMatchSnapshot();
  });

  it("should show contact from on click on 'Send another message'", async () => {
    const {
      submitButton,
      fillForm,
      queryByText,
      baseElement,
    } = renderContactFormComponent();

    expect(submitButton).toBeInTheDocument();

    fillForm();
    userEvent.click(submitButton);

    await waitFor(async () => {
      const sendAnotherMessage = queryByText("Send another message");
      expect(sendAnotherMessage).toBeInTheDocument();

      userEvent.click(sendAnotherMessage);

      await waitFor(() => {
        const submitButton = queryByText("Send message");
        expect(submitButton).toBeInTheDocument();
      });

      expect(baseElement).toMatchSnapshot();
    });
  });
});
