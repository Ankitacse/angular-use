import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {  ITreeData} from '../models/nodeTree';
@Injectable({
  providedIn: 'root'
})
export class NodesService {
  // apiUrl = environment.apiUrl;
  nodeTreeApi = './assets/taskJsonFile/nodeTree.json'
  constructor(private http: HttpClient) { }
 
//make service to display
  getNodeTree(id:number){
    const body = 1;
    return this.http.get<ITreeData>(this.nodeTreeApi);
  }
 
 
}
