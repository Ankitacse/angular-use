import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { SpeechRecognizationService } from 'src/app/services/speech-recognization.service';


@Component({
  selector: 'app-create-issue-task',
  templateUrl: './create-issue-task.component.html',
  styleUrls: ['./create-issue-task.component.scss'],
 
})
export class CreateIssueTaskComponent implements OnInit {
  createIssueForm: FormGroup;
  speechInput:string;
  speechInputA:string;
  recorderOff:boolean = true;
  constructor(private fb: FormBuilder,private speech: SpeechRecognizationService,) { }

   
  ngOnInit() {
    this.createIssueForm = this.fb.group({
      cIssueTaskTitle: ['', Validators.required],
      cIssueTaskDescription: [''],
      cIssueTaskDate: [''],
      cIssueTaskTime: [''],
      cIssueTaskResponsible: [''],
      cIssueTaskEnableChat: ['']
    })
  }
  getSpeech(){
 //use de-DE for german en-US for english//
    this.speech.record('en-US')
    .subscribe(e => this.speechInput = e);
  }
  getSpeechA(){
       this.speech.record('en-US')
       .subscribe(res => this.speechInputA = res);
     }

   
}
