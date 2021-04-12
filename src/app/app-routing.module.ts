import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateOrUpdateOportunitiesComponent } from './components/manage-oportunities/create-or-update-oportunities/create-or-update-oportunities.component';
import { ManageOportunitiesComponent } from './components/manage-oportunities/manage-oportunities.component';
import { ManageBoughtRewardsComponent } from './components/manageBoughtRewards/manage-bought-rewards/manage-bought-rewards.component';
import { CreateOrUpdateCategoryComponent } from './components/manageCategories/create-or-update-category/create-or-update-category.component';
import { ManageCategoriesComponent } from './components/manageCategories/manage-categories/manage-categories.component';
import { CreateOrUpdateCauseComponent } from './components/manageCauses/create-or-update-cause/create-or-update-cause.component';
import { ManageCausesComponent } from './components/manageCauses/manage-causes/manage-causes.component';
import { CreateOrUpdateExecutorPetitionComponent } from './components/manageExecutorPetition/create-or-update-executor-petition/create-or-update-executor-petition.component';
import { ManageExecutorPetitionComponent } from './components/manageExecutorPetition/manage-executor-petition/manage-executor-petition.component';
import { CreateOrUpdateExecutorFundComponent } from './components/manageExecutors/create-or-update-executor-fund/create-or-update-executor-fund.component';
import { ManageExecutorFundsComponent } from './components/manageExecutors/manage-executor-funds/manage-executor-funds.component';
import { CreateOrUpdateFundComponent } from './components/manageFunds/create-or-update-fund/create-or-update-fund.component';
import { ManageFundsComponent } from './components/manageFunds/manage-funds/manage-funds.component';
import { ManageLogicComponent } from './components/manageLogic/manage-logic/manage-logic.component';
import { UpdateLogicComponent } from './components/manageLogic/update-logic/update-logic.component';
import { ManageModeratorsComponent } from './components/manageModerators/manage-moderators/manage-moderators.component';
import { CreateOrUpdatePetitionsComponent } from './components/managePetitions/create-or-update-petitions/create-or-update-petitions.component';
import { ManagePetitionsComponent } from './components/managePetitions/manage-petitions/manage-petitions.component';
import { CreateOrUpdateRewardComponent } from './components/manageRewards/create-or-update-reward/create-or-update-reward.component';
import { ManageRewardsComponent } from './components/manageRewards/manage-rewards/manage-rewards.component';
import { CreateOrUpdateTargetsComponent } from './components/manageTargets/create-or-update-targets/create-or-update-targets.component';
import { ManageTargetsComponent } from './components/manageTargets/manage-targets/manage-targets.component';
import { CreateOrUpdateTransactionComponent } from './components/manageTransactions/create-or-update-transaction/create-or-update-transaction.component';
import { ManageTransactionsComponent } from './components/manageTransactions/manage-transactions/manage-transactions.component';
import { CreateOrUpdateUserComponent } from './components/manageUser/create-or-update-user/create-or-update-user.component';
import { ManageUserComponent } from './components/manageUser/manage-user/manage-user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage_user',
    component: ManageUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-user',
    component: CreateOrUpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-user/:id',
    component: CreateOrUpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage_moderators',
    component: ManageModeratorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-petition',
    component: CreateOrUpdatePetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-petition',
    component: CreateOrUpdatePetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-petition/:id',
    component: CreateOrUpdatePetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage_petitions',
    component: ManagePetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage_petitions/:cause',
    component: ManagePetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create_or_update_target',
    component: CreateOrUpdateTargetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage_targets',
    component: ManageTargetsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-causes',
    component: ManageCausesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-cause',
    component: CreateOrUpdateCauseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-cause',
    component: CreateOrUpdateCauseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-cause/:id',
    component: CreateOrUpdateCauseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-categories',
    component: ManageCategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-or-update-category',
    component: CreateOrUpdateCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-funds',
    component: ManageFundsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-funds/:cause',
    component: ManageFundsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-or-update-fund',
    component: CreateOrUpdateFundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-transactions',
    component: ManageTransactionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-or-update-transaction',
    component: CreateOrUpdateTransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-prs-rpp-logic',
    component: ManageLogicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-prs-rpp-logic',
    component: UpdateLogicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-bought-rewards',
    component: ManageBoughtRewardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-rewards',
    component: ManageRewardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-reward',
    component: CreateOrUpdateRewardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-reward',
    component: CreateOrUpdateRewardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-reward/:id',
    component: CreateOrUpdateRewardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-executor-funds',
    component: ManageExecutorFundsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-executor-fund',
    component: CreateOrUpdateExecutorFundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-executor-fund',
    component: CreateOrUpdateExecutorFundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-executor-fund/:id',
    component: CreateOrUpdateExecutorFundComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-executor-petition',
    component: ManageExecutorPetitionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-executor-petition',
    component: CreateOrUpdateExecutorPetitionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-executor-petition',
    component: CreateOrUpdateExecutorPetitionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-executor-petition/:id',
    component: CreateOrUpdateExecutorPetitionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-opportunities',
    component: ManageOportunitiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-opportunity',
    component: CreateOrUpdateOportunitiesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
