import fetch from "isomorphic-unfetch";

export const mockMessage = {
  name: "Test Guy",
  email: "test_guy@email.test",
  subject: "Test subject",
  message: "This is a test message",
};

export const mockResponseMessage = {
  data: `{"subject":[${mockMessage.subject}],"name":[${mockMessage.name}],"message":[${mockMessage.message}],"email":[${mockMessage.email}]}`,
};

export const mockFetch = (url, options) => {
  switch (url) {
    case "api/message":
      if (options.error) {
        return {
          status: 500,
          json: async () => ({
            error: "Something went wrong",
          }),
        };
      }
      if (options.exception) {
        throw new Error("Mock exception");
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({
          ...mockResponseMessage,
        }),
      };

    case process.env.CONTACT_API_URL:
      if (options.fail) {
        return {
          status: 500,
          json: async () => ({
            result: "failed",
          }),
        };
      }
      if (options.throwError) {
        throw new Error("Mock exception");
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({
          ...mockResponseMessage,
          result: "success",
        }),
      };

    case `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${undefined}`:
      if (options.failReCaptcha) {
        return {
          status: 200,
          json: async () => ({ success: false }),
        };
      }
      return fetch(url);

    default:
      return fetch(url);
  }
};
