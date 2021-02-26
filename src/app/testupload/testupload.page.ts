import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-testupload',
  templateUrl: './testupload.page.html',
  styleUrls: ['./testupload.page.scss'],
})
export class TestuploadPage implements OnInit {

  constructor(public api:RestApiService,private storage:Storage) { }

  ngOnInit() {
  }

 //  file:File;
	// changeListener($event) : void {
 //   this.file = $event.target.files[0];
 //   console.log(this.file);
 //  }
  obj = {};
	uploadProfileImage(obj){
    console.log(obj.testFile);
    // console.log(this.file);
    // this.api.putdata('test',this.file).subscribe(
    //   res=>{
    //     console.log(res);
    //   },err=>{
    //     console.log(err);
    //   }
    // )
    // let fileRef = firebase.storage().ref('profileImages/' + this.uid + ".jpg");
    // fileRef.put(this.file).then(function(snapshot) {
    //   console.log('Uploaded a blob or file!');
    // });
	}

}
