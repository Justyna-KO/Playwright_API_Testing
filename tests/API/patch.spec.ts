import { test, expect } from "@playwright/test";

test.describe.parallel("Patch", () => {
 
  const baseUrl: string = "https://reqres.in/api";

  test("Update user's data", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 200;
    const newUserName = "Anna2";
    const newUserJob = "new leader2";
    const userID = '2';
    //Act
    const response = await request.patch(`${baseUrl}/users/{userID}`, {
      data: {
        name: newUserName,
        job: newUserJob,
      },
    });

   const responseBody = JSON.parse(await response.text());
    //Assert
    expect(response.status()).toBe(expectedStatusCode);
    expect(responseBody.name).toBe(newUserName);
    expect(responseBody.job).toBe(newUserJob);
    expect(responseBody.createdAt).toBeTruthy;
  });
});
