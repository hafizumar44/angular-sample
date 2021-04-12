import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateOrUpdateUserComponent } from './components/manageUser/create-or-update-user/create-or-update-user.component';
import { ManageUserComponent } from './components/manageUser/manage-user/manage-user.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ManageModeratorsComponent } from './components/manageModerators/manage-moderators/manage-moderators.component';
import { ManagePetitionsComponent } from './components/managePetitions/manage-petitions/manage-petitions.component';
import { CreateOrUpdatePetitionsComponent } from './components/managePetitions/create-or-update-petitions/create-or-update-petitions.component';
import { ManageTargetsComponent } from './components/manageTargets/manage-targets/manage-targets.component';
import { CreateOrUpdateTargetsComponent } from './components/manageTargets/create-or-update-targets/create-or-update-targets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ManageCausesComponent } from './components/manageCauses/manage-causes/manage-causes.component';
import { CreateOrUpdateCauseComponent } from './components/manageCauses/create-or-update-cause/create-or-update-cause.component';
import { ManageCategoriesComponent } from './components/manageCategories/manage-categories/manage-categories.component';
import { CreateOrUpdateCategoryComponent } from './components/manageCategories/create-or-update-category/create-or-update-category.component';
import { ManageFundsComponent } from './components/manageFunds/manage-funds/manage-funds.component';
import { CreateOrUpdateFundComponent } from './components/manageFunds/create-or-update-fund/create-or-update-fund.component';
import { ManageTransactionsComponent } from './components/manageTransactions/manage-transactions/manage-transactions.component';
import { CreateOrUpdateTransactionComponent } from './components/manageTransactions/create-or-update-transaction/create-or-update-transaction.component';
import { ManageLogicComponent } from './components/manageLogic/manage-logic/manage-logic.component';
import { ManageBoughtRewardsComponent } from './components/manageBoughtRewards/manage-bought-rewards/manage-bought-rewards.component';
import { UpdateLogicComponent } from './components/manageLogic/update-logic/update-logic.component';
import { ManageRewardsComponent } from './components/manageRewards/manage-rewards/manage-rewards.component';
import { CreateOrUpdateRewardComponent } from './components/manageRewards/create-or-update-reward/create-or-update-reward.component';
import { ManageExecutorFundsComponent } from './components/manageExecutors/manage-executor-funds/manage-executor-funds.component';
import { CreateOrUpdateExecutorFundComponent } from './components/manageExecutors/create-or-update-executor-fund/create-or-update-executor-fund.component';
import { ManageExecutorPetitionComponent } from './components/manageExecutorPetition/manage-executor-petition/manage-executor-petition.component';
import { CreateOrUpdateExecutorPetitionComponent } from './components/manageExecutorPetition/create-or-update-executor-petition/create-or-update-executor-petition.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ManageOportunitiesComponent } from './components/manage-oportunities/manage-oportunities.component';
import { CreateOrUpdateOportunitiesComponent } from './components/manage-oportunities/create-or-update-oportunities/create-or-update-oportunities.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateOrUpdateUserComponent,
    ManageUserComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ManageModeratorsComponent,
    ManagePetitionsComponent,
    CreateOrUpdatePetitionsComponent,
    ManageTargetsComponent,
    CreateOrUpdateTargetsComponent,
    SigninComponent,
    ForgotPasswordComponent,
    ManageCausesComponent,
    CreateOrUpdateCauseComponent,
    ManageCategoriesComponent,
    CreateOrUpdateCategoryComponent,
    ManageFundsComponent,
    CreateOrUpdateFundComponent,
    ManageTransactionsComponent,
    CreateOrUpdateTransactionComponent,
    ManageLogicComponent,
    ManageBoughtRewardsComponent,
    UpdateLogicComponent,
    ManageRewardsComponent,
    CreateOrUpdateRewardComponent,
    ManageExecutorFundsComponent,
    CreateOrUpdateExecutorFundComponent,
    ManageExecutorPetitionComponent,
    CreateOrUpdateExecutorPetitionComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ManageOportunitiesComponent,
    CreateOrUpdateOportunitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    DropDownsModule,
    FormsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
