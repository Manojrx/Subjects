import { Routes } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo : "subject"},
    {path:'subject',component : SubjectsComponent}
];
