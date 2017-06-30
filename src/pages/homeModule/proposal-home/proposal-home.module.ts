import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposalHomePage } from './proposal-home';

@NgModule({
  declarations: [
    ProposalHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ProposalHomePage),
  ],
  exports: [
    ProposalHomePage
  ]
})
export class ProposalHomePageModule {}
