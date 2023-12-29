import { test, expect } from "@playwright/test";

test.describe.parallel("Get", () => {
  const baseUrl: string = "https://reqres.in/api";
  test("Get a list of users", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 200;
    //Act
    const response = await request.get(`${baseUrl}/users`);
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
  });

  test("Get a single user", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 200;
    const userID: string = "2";
    //Act
    const response = await request.get(`${baseUrl}/users/${userID}`);
    const responseBody = JSON.parse(await response.text());
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody.data.first_name).toBeTruthy;
    expect(responseBody.data.last_name).toBeTruthy;
    expect(responseBody.data.email).toBeTruthy;
    expect(responseBody.data.id).toBe(2);
  });
  test("Get a single user - not found", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 404;
    const userID: string = "23";
    //Act
    const response = await request.get(`${baseUrl}/users/${userID}`);
    const responseBody = JSON.parse(await response.text());
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
  });
});
