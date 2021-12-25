import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map-album';
  filePath = "";
  imageUrls: any;

getFilePath(value: String): void{
  this.filePath="assets/"+value+"/sample1.jpg";
  this.imageUrls = ["assets/"+value+"/sample1.jpg", "assets/"+value+"/sample2.jpg" ]
  console.log(this.filePath);
}

}



