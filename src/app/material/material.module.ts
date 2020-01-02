import { NgModule } from '@angular/core';
  import {MatToolbarModule, MatSidenavModule}  from '@angular/material';


const material = [
  MatToolbarModule,
  MatSidenavModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
