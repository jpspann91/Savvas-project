import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent} from './components/home/home.component';// CLI imports router
import { DirectoryComponent } from './components/directory/directory.component';
import { DirectoryDetailsComponent } from './components/directory-details/directory-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'directory', component: DirectoryComponent },
    { path: 'directory/:id', component: DirectoryDetailsComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
