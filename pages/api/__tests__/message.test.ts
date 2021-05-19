import { NextApiRequest } from "next";
import { createResponse } from "node-mocks-http";
import messageHandler from "../message";
import {
  mockFetch,
  mockMessage,
  mockResponseMessage,
} from "../__mock__/message.mock";

const res = createResponse();
const postReq = {
  method: "POST",
  body: JSON.stringify(mockMessage),
} as NextApiRequest;

const fetch = jest.spyOn(window, "fetch");

beforeAll(() => jest.spyOn(window, "fetch"));
beforeEach(() =>
  fetch.mockImplementation((url) => mockFetch(url) as Promise<Response>)
);
afterEach(() => fetch.mockClear());

describe("/message", () => {
  it("should return 405 for GET", async () => {
    const req = { method: "GET" } as NextApiRequest;

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for PUT", async () => {
    const req = { method: "PUT" } as NextApiRequest;

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for DELETE", async () => {
    const req = { method: "DELETE" } as NextApiRequest;

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 405 for PATCH", async () => {
    const req = { method: "PATCH" } as NextApiRequest;

    await messageHandler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("should return 400 for POST if reCaptcha fails", async () => {
    fetch.mockImplementation(
      (url) => mockFetch(url, { failReCaptcha: true }) as Promise<Response>
    );

    await messageHandler(postReq, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("should return 500 for POST if sendMessage fails", async () => {
    fetch.mockImplementation(
      (url) => mockFetch(url, { fail: true }) as Promise<Response>
    );

    await messageHandler(postReq, res);
    expect(res._getStatusCode()).toBe(500);
  });

  it("should return 500 for POST if sendMessage throws error", async () => {
    fetch.mockImplementation(
      (url) => mockFetch(url, { throwError: true }) as Promise<Response>
    );
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, "error").mockImplementation(() => {});

    await messageHandler(postReq, res);
    expect(res._getStatusCode()).toBe(500);
  });

  it("should return 200 for POST", async () => {
    await messageHandler(postReq, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toMatchObject(mockResponseMessage);
  });
});
