import { Component, OnInit } from "@angular/core";
import { Project, Invitation, Update } from "src/app/all.models";
import { ApiHandleService } from "src/app/services/api-handle.service";

@Component({
  selector: "app-exchange-screen",
  templateUrl: "./exchange-screen.component.html",
  styleUrls: ["./exchange-screen.component.css"],
})
export class ExchangeScreenComponent implements OnInit {
  userId = localStorage.getItem("userID");

  projects: Project[] = [
    {
      id: 1,
      name: "Summer Hits",
      description: "A summer themed collaborative playlist.",
    },
    {
      id: 2,
      name: "Winter Ballads",
      description: "A collection of ballads for the winter season.",
    },
  ];

  invitations: Invitation[] = [
    { id: 1, from: "Alice", song: "Summer Hits" },
    { id: 2, from: "Bob", song: "Winter Ballads" },
  ];

  updates: Update[] = [
    { id: 1, message: "New song added to Summer Hits." },
    { id: 2, message: "Winter Ballads has been published!" },
  ];

  constructor(private apiService: ApiHandleService) {}

  ngOnInit(): void {
    // this.apiService.getOtherBooks$(this.userId).subscribe({
    //   next(value) {
    //       this.otherBooks = value;
    //   },
    // })
    // this.apiService.getUserBooks$(this.userId).subscribe({
    //   next(value) {
    //       this.userBooks = value;
    //   },
    // })
  }

  handleAccept(invitation: Invitation){
    alert(invitation.from + 'is accepted');
    this.invitations = this.invitations.filter(s => s.id !== invitation.id);
  } 
  
  handleDecline(invitation: Invitation){
    alert(invitation.from + 'is declined');
    this.invitations = this.invitations.filter(s => s.id !== invitation.id);
  }

}
