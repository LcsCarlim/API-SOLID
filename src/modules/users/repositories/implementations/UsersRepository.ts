/* eslint-disable no-param-reassign */
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  findByName(name: string): User | undefined {
    const user = this.users.find((users) => users.name === name);

    return user;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((users) => users.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((users) => users.email === email);

    return user;
  }

  turnAdmin(user: User): User | undefined {
    const newAdmin = this.users.find((users) => users.id === user.id);

    if (!newAdmin) {
      throw new Error("User doesnt exists");
    }

    newAdmin.admin = true;
    newAdmin.updated_at = new Date();

    return newAdmin;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
