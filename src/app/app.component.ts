import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';


import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo';
  test = false;
  showCheck = true;

  doneTask(){
    this.showCheck = true;
    setTimeout(() => {
      this.showCheck = false;
    }, 2000);
  }
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(PopupComponent);
  }
}

// export class popupSheet {
//   constructor(private _bottomSheetRef: MatBottomSheetRef<popupSheet>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }