import { Component, ElementRef, ViewChild } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map-album';
  filePath = "";
  imageUrls: any;

constructor(private modalService: NgbModal) {}


getFilePath(value: String): void{
  this.filePath="assets/"+value+"/sample1.jpg";
  this.imageUrls = ["assets/"+value+"/sample1.jpg", "assets/"+value+"/sample2.jpg" ]
  console.log(this.filePath);
}

openModal(modalData: any, value: any) {
  this.imageUrls = ["assets/"+value+"/sample1.jpg", "assets/"+value+"/sample2.jpg" ]
  this.modalService.open(modalData);
}

}



