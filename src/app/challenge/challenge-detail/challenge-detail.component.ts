import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Challenge } from '../../model/challenge';
import { ChallengeService } from '../../service/challenge.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

  @Input() challenge: Challenge;
  selectedFile: File = null;
  public id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private location: Location,
    private http:HttpClient
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
   this.onUpload();
    this.challengeService.updateChallenge(this.challenge)
      .subscribe(() => this.goBack());
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    const uploadData = new FormData();
    // uploadData.append('questionDifficulty', this.addForm.get('questionDifficulty').value);
    uploadData.append('challenge_image', this.selectedFile, this.selectedFile.name);

    this.http.patch('http://ekita-api.herokuapp.com/api/challenges/'+ this.id, uploadData)
    .subscribe( res => {console.log(res);}
    );
  }
}
