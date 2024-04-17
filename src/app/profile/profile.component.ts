import { Component, OnInit } from '@angular/core';
import { ApiHandleService } from '../services/api-handle.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../all.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  profileForm: FormGroup;
  editing = false;

  constructor(private userService: ApiHandleService) {}

  ngOnInit() {
    // For example purposes, assuming 'current-user-id' is fetched from authentication context
    const userId = 'current-user-id';
    this.user$ = this.userService.getUser(userId);

    this.profileForm = new FormGroup({
      // Initialize form fields here
      username: new FormControl(''),
      bio: new FormControl('')
      // Continue for roles, genres, instruments, link
    });
  }

  editProfile() {
    this.editing = true;
    this.user$.subscribe(user => {
      this.profileForm.patchValue({
        username: user.username,
        bio: user.bio
        // Continue for roles, genres, instruments, link
      });
    });
  }

  updateProfile() {
    const userId = 'current-user-id';
    this.userService.updateUser(userId, this.profileForm.value).then(() => {
      this.editing = false;
    });
  }
}
