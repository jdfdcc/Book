import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposalListPage } from './proposal-list';

@NgModule({
  declarations: [
    ProposalListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposalListPage),
  ],
  exports: [
    ProposalListPage
  ]
})
export class ProposalListPageModule {}
