import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingListComponent } from './components/ranking/ranking-list/ranking-list.component';
import { RankingCreateComponent } from './components/ranking/ranking-create/ranking-create.component';
import { RankingUpdateComponent } from './components/ranking/ranking-update/ranking-update.component';
import { RankingViewComponent } from './components/ranking/ranking-view/ranking-view.component';
import { LevelViewComponent } from './components/level/level-view/level-view.component';
import { LevelUpdateComponent } from './components/level/level-update/level-update.component';
import { LevelCreateComponent } from './components/level/level-create/level-create.component';
import { LevelListComponent } from './components/level/level-list/level-list.component';
import { CompetitionViewComponent } from './components/competition/competition-view/competition-view.component';
import { CompetitionUpdateComponent } from './components/competition/competition-update/competition-update.component';
import { CompetitionCreateComponent } from './components/competition/competition-create/competition-create.component';
import { CompetitionListComponent } from './components/competition/competition-list/competition-list.component';
import { MemberViewComponent } from './components/member/member-view/member-view.component';
import { MemberUpdateComponent } from './components/member/member-update/member-update.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { FishViewComponent } from './components/fish/fish-view/fish-view.component';
import { FishUpdateComponent } from './components/fish/fish-update/fish-update.component';
import { FishCreateComponent } from './components/fish/fish-create/fish-create.component';
import { FishListComponent } from './components/fish/fish-list/fish-list.component';
import { HuntingViewComponent } from './components/hunting/hunting-view/hunting-view.component';
import { HuntingUpdateComponent } from './components/hunting/hunting-update/hunting-update.component';
import { HuntingCreateComponent } from './components/hunting/hunting-create/hunting-create.component';
import { HuntingListComponent } from './components/hunting/hunting-list/hunting-list.component';
import { notAuthGuard } from './guards/not-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent ,pathMatch: 'full',canActivate: [notAuthGuard]},
  { path:'register',component:RegisterComponent ,pathMatch: 'full',canActivate: [notAuthGuard]},
  { path: '', redirectTo:'dashboard/competitions', pathMatch: 'full'},

  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    children: [
      { path: 'rankings', component: RankingListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'rankings/create', component: RankingCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'rankings/update/:id', component: RankingUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'rankings/view/:id', component: RankingViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      
      { path: 'levels', component: LevelListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }},
      { path: 'levels/create', component: LevelCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'levels/update/:code', component: LevelUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'levels/view/:code', component: LevelViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      
      { path: 'competitions', component: CompetitionListComponent, canActivate: [authGuard]},
      { path: 'competitions/create', component: CompetitionCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER','JUDGE'] }  },
      { path: 'competitions/update/:code', component: CompetitionUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER','JUDGE'] }  },
      { path: 'competitions/view/:id', component: CompetitionViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER','JUDGE'] }  },
      
      { path: 'members', component: MemberListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'members/create', component: MemberCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'members/update/:num', component: MemberUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'members/view/:num', component: MemberViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      
      { path: 'fish', component: FishListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'fish/create', component: FishCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'fish/update/:id', component: FishUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'fish/view/:id', component: FishViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      
      { path: 'hunting', component: HuntingListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'hunting/create', component: HuntingCreateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'hunting/update/:id', component: HuntingUpdateComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'hunting/view/:id', component: HuntingViewComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
      { path: 'fishes', component: FishListComponent, canActivate: [authGuard,roleGuard], data: { role: ['MANAGER'] }  },
    ]
  },
    ];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }