import { NgModule } from '@angular/core';
  import {MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonToggleModule}  from '@angular/material';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';
  import {MatInputModule} from '@angular/material/input';
  import {MatCardModule} from '@angular/material/card';
  import {MatCheckboxModule} from '@angular/material/checkbox';
  import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { MatNativeDateModule } from '@angular/material/core';
  import {MatDialogModule} from '@angular/material/dialog';
  import {MatSnackBarModule} from '@angular/material/snack-bar';
  import {MatMenuModule} from '@angular/material/menu';
  import {MatGridListModule} from '@angular/material/grid-list';




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
  MatListModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
  MatGridListModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
