import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import { Challenge } from '../../model/challenge';
import { ChallengeService } from '../../service/challenge.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.css']
})
export class ChallengeCreateComponent implements OnInit {

constructor(
  private formBuilder: FormBuilder,
  private challengeService: ChallengeService, 
  private location : Location,
  private http : HttpClient) { }
	addForm: FormGroup;
  selectedFile: File = null;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
	    id: [],
		question_category_id: ['', Validators.required],
		question_difficulty_id: ['', Validators.required],
		challenge_xp: ['', Validators.required],
		challenge_star: ['', Validators.required],
    challenge_type: ['', Validators.required],
		challenge_question: ['', Validators.required],
		questionDifficulty: ['', Validators.required],
    });

  }
  onSubmit() {
    this.challengeService.createChallenge(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    const uploadData = new FormData();
    uploadData.append('question_category_id', this.addForm.get('question_category_id').value);
    uploadData.append('question_difficulty_id', this.addForm.get('question_difficulty_id').value);
    uploadData.append('challenge_xp', this.addForm.get('challenge_xp').value);
    uploadData.append('challenge_star', this.addForm.get('challenge_star').value);
    uploadData.append('challenge_type', this.addForm.get('challenge_type').value);
    uploadData.append('challenge_question', this.addForm.get('challenge_question').value);
    uploadData.append('questionDifficulty', this.addForm.get('questionDifficulty').value);
    uploadData.append('challenge_image', this.selectedFile, this.selectedFile.name);

    this.http.post('http://ekita-api.herokuapp.com/api/challenges', uploadData)
    .subscribe( res => {console.log(res); this.goBack();}
    );
  }
}
