import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  BehaviorSubject,
  combineLatest,
  map,
  mapTo,
  Observable,
  of,
} from "rxjs";
import { environment } from "../../environments/environment";
import {
  UserLoginRequestBody,
  UserLoginResponseData,
} from "../auth/auth.interface";
import { User } from "../all.models";

const API_USERS_URL = `${environment.apiUrl}Account`;
const GetAuthTokens = () => {
  return {
    "content-type": "application/json; charset=utf-8",
  };
};

@Injectable({
  providedIn: "root",
})
export class ApiHandleService {
  public data$$ = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  login$(loginBody: any): Observable<any> {
    let reqHeader = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<any>(
      "https://localhost:7272/api/Account/login",
      loginBody,
      { headers: reqHeader }
    ) as Observable<any>;
  }

  signUp$(signUpRequestBody: any): Observable<any> {
    let reqHeader = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<any>(
      "https://localhost:7272/api/Account/RegisterUser",
      signUpRequestBody,
      { headers: reqHeader }
    ) as Observable<any>;
  }

  uploadBook$(body: any) {
    let reqHeader = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<any>(
      "https://localhost:7272/api/Account/UploadBook",
      body,
      { headers: reqHeader }
    );
  }

  // Simulating a fetch from a database
  getUser(userId: string): Observable<User> {
    // Dummy user data for testing
    const dummyUser: User = {
      id: '1',
      username: 'JohnDoeMusic',
      email: 'johndoe@example.com',
      bio: 'Multi-genre producer with a penchant for experimental sounds.',
      profileImageUrl: 'https://example.com/path/to/default-profile.jpg',
      roles: ['Producer', 'Mixer'],
      genres: ['Electro', 'Ambient', 'Jazz'],
      instruments: ['Keyboard', 'Synthesizer', 'Drum Machine'],
      soundCloudLink: 'https://soundcloud.com/johndoe'
    };

    return of(dummyUser);  // Returns an Observable containing the dummy user
  }

  // You would also simulate update function if needed, using something like below
  updateUser(userId: string, userData: User): Promise<void> {
    console.log('Update data:', userId, userData);
    return Promise.resolve(); // Simulates a successful update operation
  }
}
