import { createMocks } from "node-mocks-http";
import messageHandler from "../message";
import {
  mockFetch,
  mockMessage,
  mockResponseMessage,
} from "../__mock__/message.mock";

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
afterEach(() => window.fetch.mockClear());

describe("/message", () => {
  it("should return 405 for GET", async () => {
    const { req, res } = createMocks({ method: "GET" });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for PUT", async () => {
    const { req, res } = createMocks({ method: "PUT" });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for DELETE", async () => {
    const { req, res } = createMocks({ method: "DELETE" });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for PATCH", async () => {
    const { req, res } = createMocks({ method: "PATCH" });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 200 for POST", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(mockMessage),
    });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toMatchObject(mockResponseMessage);

    console.log(typeof res._getData());
  });

  it("should return 400 for POST if reCaptcha fails", async () => {
    window.fetch.mockImplementation((url) =>
      mockFetch(url, { failReCaptcha: true })
    );

    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(mockMessage),
    });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("should return 500 for POST if sendMessage fails", async () => {
    window.fetch.mockImplementation((url) => mockFetch(url, { fail: true }));

    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(mockMessage),
    });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
  });

  it("should return 500 for POST if sendMessage throws error", async () => {
    window.fetch.mockImplementation((url) =>
      mockFetch(url, { throwError: true })
    );
    jest.spyOn(console, "error").mockImplementation(() => {});

    const { req, res } = createMocks({
      method: "POST",
      body: JSON.stringify(mockMessage),
    });

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(500);
  });
});
