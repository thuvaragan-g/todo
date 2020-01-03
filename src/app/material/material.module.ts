import { NgModule } from '@angular/core';
  import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule}  from '@angular/material';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatCardModule} from '@angular/material/card';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatBottomSheetModule} from '@angular/material/bottom-sheet';




const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  ReactiveFormsModule,
  MatCardModule,
  MatCheckboxModule,
  MatBottomSheetModule,
  MatListModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
