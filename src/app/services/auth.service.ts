import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isTeacher = false;

  login() {
    // Call the login API here and handle the success response
    // For simplicity, let's assume the login API just sets isAuthenticated to true on successful login
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    this.isAuthenticated = false;
    console.log('log out')
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return true;
    // return this.isAuthenticated;
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  setIsTeacher(v){
    this.isTeacher = v;
  }

  getIsTeacher(): boolean {
    return this.isTeacher;
  }

}
