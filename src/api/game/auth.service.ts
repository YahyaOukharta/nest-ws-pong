import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface User {
  uid: string;
  displayedName: string;
  avatar?: string;

  // @Column({
  //     // type: 'bytea',
  //     nullable: true
  // })
  // picture: Uint8Array;
  login: string;
  email: string;

  // ChatRooms: ChatRoom[];
}

@Injectable()
export class AuthService {
  async isAuthenticated(
    cookie: string,
    authorization: string,
  ): Promise<false | User> {
    try {
      const res = await axios.get('http://users:3500/user', {
        // http://users:3500 when docker compose
        headers: { cookie, authorization },
      });
      return res.data;
    } catch (e) {
      //console.log(e);
      return false;
    }
  }
  async updateUserStatus(
    cookie: string,
    authorization: string,
    uid: string,
    status: string,
  ): Promise<false | User> {
    try {
      const res = await axios.patch(
        'http://users:3500/user/status',
        { uid, status },
        {
          // http://users:3500 when docker compose
          headers: { cookie, authorization },
        },
      );
      return res.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
