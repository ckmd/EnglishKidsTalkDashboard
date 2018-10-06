import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Challenge } from '../../model/challenge';
import { ChallengeService } from '../../service/challenge.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getChallenge();
  }

  getChallenge(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.challengeService.getChallenge(id)
      .subscribe(challenge => this.challenge = challenge);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.challengeService.updateChallenge(this.challenge)
      .subscribe(() => this.goBack());
  }
}
