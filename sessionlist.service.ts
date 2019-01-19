
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError as observableThrowError,  Observable ,  BehaviorSubject } from 'rxjs';
import { tap, switchMapTo, map, catchError,share, debounceTime } from 'rxjs/operators';
import { SessionList } from './sessionlist';
import { error } from 'util';

@Injectable ( {
   providedIn :'root'
})


export class SessionListService {
 constructor (private http:HttpClient){}

    getSessionUser(id:number): Observable<any> {
        return this.http
          .post<SessionList>(`sessionList`,{} ).pipe(
            map((res: any) => res.session),
           
            catchError(err => {
              return this.handleError(err);
            })
          );
        }
    handleError(err: any): any {
        throw new Error("Method not implemented.");
    }
  
}
    