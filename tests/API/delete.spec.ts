import { test, expect } from "@playwright/test";

test.describe.parallel("Delete", () => {
  const baseUrl: string = "https://reqres.in/api";

  test("Delete a user", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 204;
    const userID: string = "2";
    //Act
    const response = await request.delete(`${baseUrl}/users/${userID}`);
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
  });
});
