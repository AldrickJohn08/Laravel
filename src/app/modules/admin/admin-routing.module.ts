import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { AccountsComponent } from 'src/app/pages/accounts/accounts.component';
import { ConsultancyComponent } from 'src/app/pages/consultancy/consultancy.component';
import { EconomicComponent } from 'src/app/pages/economic/economic.component';
import { HeiComponent } from 'src/app/pages/hei/hei.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MsmeComponent } from 'src/app/pages/msme/msme.component';
import { NcComponent } from 'src/app/pages/nc/nc.component';
import { PageroleComponent } from 'src/app/pages/pagerole/pagerole.component';
import { PaymentComponent } from 'src/app/pages/payment/payment.component';
import { PriorityComponent } from 'src/app/pages/priority/priority.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ProgramsComponent } from 'src/app/pages/programs/programs.component';
import { RdfComponent } from 'src/app/pages/rdf/rdf.component';
import { RecordsComponent } from 'src/app/pages/records/records.component';
import { ResearchesComponent } from 'src/app/pages/researches/researches.component';
import { SsfComponent } from 'src/app/pages/ssf/ssf.component';
import { TbiComponent } from 'src/app/pages/tbi/tbi.component';
import { ViewComponent } from 'src/app/pages/view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
    {
        path: '',
        component: DashboardComponent, children:[
        {
            path:'records',
            component: RecordsComponent
        },
        {
            path:'programs',
            component: ProgramsComponent
        },
        {
            path:'consultancy',
            component: ConsultancyComponent
        },
        {
            path:'tbi',
            component: TbiComponent
        },
        {
            path:'rdf',
            component: RdfComponent
        },
        {
            path:'nc',
            component: NcComponent
        },
        {
            path:'ssf',
            component: SsfComponent
        },
        {
            path:'hei',
            component: HeiComponent
        },
        {
            path:'researches',
            component: ResearchesComponent
        },
        {
            path:'msme',
            component: MsmeComponent
        },
        {
            path:'priority',
            component: PriorityComponent
        },
        {
            path:'economic',
            component: EconomicComponent
        },
        {
            path:'about',
            component: AboutComponent
        },
        {
            path:'home',
            component: HomeComponent
        },
        {
            path:'accounts',
            component: AccountsComponent
        },
        {
            path:'payment',
            component: PaymentComponent
        },
        {
            path:'profile',
            component: ProfileComponent
        },
        {
            path:'pagerole',
            component: PageroleComponent
        },
        {
            path:'view',
            component: ViewComponent
        },
        {
            path:'',
            redirectTo: '/admin/home',
            pathMatch: 'full'
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
