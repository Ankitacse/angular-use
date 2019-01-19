import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { SessionList } from './sessionlist';
import { SessionListService } from './sessionlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessionlist',
  templateUrl: './sessionlist.component.html',
  styleUrls: ['./sessionlist.component.scss']
})
export class SessionlistComponent implements OnInit {
sessionList: any = [];

sessionList2:any=[];
i=0;
j=1;
is_prev_disable:boolean;
is_next_disable:boolean;

sessionTable:any;
id:any;
p: number = 1;
showLoader: boolean = false;
empty: boolean = false;
  constructor(private sessionListService : SessionListService,private _router :Router) { }

  ngOnInit() {
    this.session();
  this.checkIsPrevDisable();
  this.checkIsNextDisable();
 
}
  
 


onPrev(){
  if(!this.checkIsPrevDisable()){
    this.i = this.i - 2;
    this.j = this.j - 2;
    this.sessionList2[0]=this.sessionList[this.i];
    this.sessionList2[1]=this.sessionList[this.j];
    this.checkIsNextDisable();
  }
}
onNext(){
    
  if(!this.checkIsNextDisable()){

    this.i = this.i + 2;
    this.j = this.j + 2;
    this.sessionList2[0]=this.sessionList[this.i];
   
    if(this.sessionList[this.j] != undefined ) 
    {
      
     this.sessionList2[1]=this.sessionList[this.j];
          
    }
    else{
      this.sessionList2.splice(1,1);
    }
    console.log(this.sessionList2);
    this.checkIsPrevDisable();
  }
  
 }

checkIsPrevDisable(){
  if(this.i == 0){
    this.is_prev_disable = true;
   }else
  {
    this.is_prev_disable = false;
  }
  
  return this.is_prev_disable;
}


// check(){
//   let length = this.sessionList.length;
//   if(length%2 == 0){
//     if(this.j == length-1){
//       this.is_next_disable = true;
//      }else{
//      this.is_next_disable = false;
//      }
//   } else {
    
//     if(this.i == length-1){
     
//       this.sessionList2.splice(1, 1);
//       this.is_next_disable = true;
//     }else{
//       this.is_next_disable = false;
      
//     }
//   }
// }

checkIsNextDisable(){
  let length = this.sessionList.length;
  if(length%2 == 0){
    if(this.j == length-1){
       this.sessionList2.splice(1, 1);
      this.is_next_disable = true;
     }else{
     this.is_next_disable = false;
     }
  } else {
    
    if(this.i == length-1){
     
      this.sessionList2.splice(1, 1);
      this.is_next_disable = true;
    }else{
      this.is_next_disable = false;
      
    }
  }
  // this.check();
  return this.is_next_disable;
}
session(){
  this.showLoader = true;
  this.sessionListService.getSessionUser(this.id).subscribe(res=> {
    this.sessionList=res;
    if(this.sessionList.length >0){
      this.sessionList2[0]=this.sessionList[this.i];
      if(this.sessionList.length >1){
        this.sessionList2[1]=this.sessionList[this.j];
      }
    }
    
    this.checkIsPrevDisable();
    this.checkIsNextDisable();
    this.showLoader = false;
  });
}
accept(){
  alert(" You have Accept the Event !");
}
reject(){
  alert(" You have Reject the Event !");
}
not_confirm(){
  alert(" You have Not Confirmed the Event !");
}

}