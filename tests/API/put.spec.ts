import { test, expect } from "@playwright/test";

test.describe.parallel("Put", () => {
 
  const baseUrl: string = "https://reqres.in/api";

  test("Update user's data", async ({ request }) => {
    //Arrange
    const expectedStatusCode = 200;
    const newUserName = "Anna";
    const newUserJob = "new leader";
    const userID = '2';
    //Act
    const response = await request.put(`${baseUrl}/users/{userID}`, {
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
