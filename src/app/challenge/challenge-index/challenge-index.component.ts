import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../model/challenge';
import { ChallengeService } from '../../service/challenge.service';

@Component({
  selector: 'app-challenge-index',
  templateUrl: './challenge-index.component.html',
  styleUrls: ['./challenge-index.component.css']
})
export class ChallengeIndexComponent implements OnInit {
  challenges: Challenge[];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges(): void {
    this.challengeService.getChallenges()
    .subscribe(challenges => this.challenges = challenges);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.challengeService.addChallenge({ name } as Challenge)
  //     .subscribe(challenge => {
  //       this.challenges.push(challenge);
  //     });
  // }

  delete(challenge: Challenge): void {
    this.challenges = this.challenges.filter(h => h !== challenge);
    this.challengeService.deleteChallenge(challenge).subscribe();
  }
}
