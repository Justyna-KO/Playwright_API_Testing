import { test, expect } from "@playwright/test";

test.describe.parallel("Post", () => {
 
  const baseUrl: string = "https://reqres.in/api";

  test("Create a new user", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 201;
    const userName = "James";
    const userJob = "leader";
    //Act
    const response = await request.post(`${baseUrl}/users`, {
      data: {
        name: userName,
        job: userJob,
      },
    });

    const responseBody = JSON.parse(await response.text());
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody.name).toBe(userName);
    expect(responseBody.job).toBe(userJob);
    expect(responseBody.createdAt).toBeTruthy;
    expect(responseBody.id).not.toBeNull;
  });
});
