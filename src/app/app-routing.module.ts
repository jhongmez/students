import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';


const routes: Routes = [
	{ path:'home',      component: HomeComponent},
	{ path:'about',     component: AboutComponent},
	{ path:'students',  component: StudentsComponent},
	{ path:'**',  pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
