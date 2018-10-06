import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Challenge } from '../../model/challenge';
import { ChallengeService } from '../../service/challenge.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.css']
})
export class ChallengeCreateComponent implements OnInit {

constructor(private formBuilder: FormBuilder,private router: Router, private challengeService: ChallengeService) { }
	addForm: FormGroup;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
	    id: [],
		question_category_id: ['', Validators.required],
		question_difficulty_id: ['', Validators.required],
		challenge_xp: ['', Validators.required],
		challenge_star: ['', Validators.required],
		challenge_image: ['', Validators.required],
		challenge_question: ['', Validators.required],
    });

  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.challengeService.addChallenge({ name } as Challenge)
  //     .subscribe(challenge => {
  //       this.challenges.push(challenge);
  //     });
  // }
  onSubmit() {
    this.challengeService.createChallenge(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['challenge-index']);
      });
  }

}
