import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    const date = new Date();
    this.created_at = date;
    this.admin = false;
    this.updated_at = date;
  }
}

export { User };
