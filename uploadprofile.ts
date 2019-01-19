

/*write this code in component.ts file*/
export class yourComponent implements OnInit {
 
  url='';
selectedFile: any;
constructor()
 {
  }
  ngOnInit() {
 }
onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
 
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => {
                this.url = event.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
    }
  }
