import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RecordsComponent } from './pages/records/records.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { SidebarComponent } from './modules/admin/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path:'records',
    component:RecordsComponent
  },
  {
    path:'sidebar-button',
    component:SidebarButtonComponent
  },
  {
    path: 'sidebar',
    component:SidebarComponent
  },
  {
    path: 'accounts',
    component:AccountsComponent
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
