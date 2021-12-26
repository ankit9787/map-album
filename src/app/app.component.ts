import { Component, ElementRef, ViewChild } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map-album';
  filePath = "";
  imageUrls:any;

constructor(private modalService: NgbModal) {}

getNotification(properties: any) {
 console.log("from map component",properties);
 this.imageUrls = [ "assets/"+properties.name+"/sample1.jpg", "assets/"+properties.name+"/sample2.jpg" ];
 this.openModalDiff()
 
}

openModalDiff(): void{
  const modalRef = this.modalService.open(ModalComponent);
  (<ModalComponent>modalRef.componentInstance).imageUrls = this.imageUrls;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

}

}

// openModal(modalData: any, value: any) {
//   this.imageUrls = ["assets/"+value+"/sample1.jpg", "assets/"+value+"/sample2.jpg" ]
//   this.modalService.open(modalData);
// }


// getFilePath(value: String): void{
//   this.filePath="assets/"+value+"/sample1.jpg";
//   this.imageUrls = ["assets/"+value+"/sample1.jpg", "assets/"+value+"/sample2.jpg" ]
//   console.log(this.filePath);
// }


