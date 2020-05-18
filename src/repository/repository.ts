import * as DBConnectionConfiguration from "./ormconfig";
import { User } from "../domain/entities/user";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { UserMapper } from "./models/user-model";

let DBConnection: Connection;

class UserRepository {
  private async openConnection(): Promise<Connection> {
    if (!Connection) {
      DBConnection = await createConnection(DBConnectionConfiguration);
    }

    return DBConnection;
  }

  private mapDomainToDB(userToMap: User): UserMapper {
    const result = new UserMapper();

    result.id = userToMap.id;
    result.name = userToMap.name;
    result.isApproved = userToMap.isApproved;

    return result;
  }

  public async addNewUser(newUser: User): Promise<User> {
    const DBConnection: Connection = await this.openConnection();

    return await DBConnection.manager.save(this.mapDomainToDB(newUser));
  }
}
