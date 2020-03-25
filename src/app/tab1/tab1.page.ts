import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPageComponent } from "../popover-page/popover-page.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPageComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
