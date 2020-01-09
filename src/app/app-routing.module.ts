import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivedComponent } from './archived/archived.component';
import { AppComponent } from './app.component';
import { WellcomeComponent} from './wellcome/wellcome.component'




const routes: Routes = [
  {path: 'archived' , component: ArchivedComponent},
  {path: 'home' , component: AppComponent},
  {path: 'wellcome' , component: WellcomeComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
