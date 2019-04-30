import { OnInit,Component, Inject} from '@angular/core';
import { NodesService } from 'src/app/services/nodes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-node-dialog-task',
  templateUrl: './node-dialog-task.component.html',
  styleUrls: ['./node-dialog-task.component.scss']
})
export class NodeDialogTaskComponent implements OnInit {
  nodeTree:any;
  constructor(private nodesService :NodesService,@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef< NodeDialogTaskComponent>,) { }
  ngOnInit() {
    
    //to display snode tree 
    this.nodesService.getNodeTree(this.data.organization_id).subscribe(response => {
      this.nodeTree = response.tree_data;
      console.log(response);
    })
     
 
  }  
  
}
