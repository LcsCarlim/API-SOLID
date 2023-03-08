import { validate } from "uuid";

import { User } from "../../../modules/users/model/User";

describe("User model", () => {
  it("should be able to create an user with all props", () => {
    const user = new User();

    Object.assign(user, {
      name: "Lucas",
      email: "lucas.carlim@zuvia.com.br",
      created_at: new Date(),
      updated_at: new Date(),
    });

    expect(user).toMatchObject({
      name: "Lucas",
      email: "lucas.carlim@zuvia.com.br",
      admin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});
