import { Connection, createConnection } from 'typeorm';

class Database {
  private connection: Connection;

  public async connect(): Promise<boolean> {
    this.connection = await createConnection();
    return this.connection.isConnected;
  }

  public async disconnect(): Promise<any> {
    return this.connection.close();
  }

  public isConnected(): boolean {
    return this.connection && this.connection.isConnected;
  }
}

export default new Database();
