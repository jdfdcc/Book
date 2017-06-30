import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposalPage } from './proposal';

@NgModule({
  declarations: [
    ProposalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposalPage),
  ],
  exports: [
    ProposalPage
  ]
})
export class ProposalPageModule {}
