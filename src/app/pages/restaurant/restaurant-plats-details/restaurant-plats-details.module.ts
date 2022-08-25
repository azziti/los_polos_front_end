import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPlatsDetailsPageRoutingModule } from './restaurant-plats-details-routing.module';

import { RestaurantPlatsDetailsPage } from './restaurant-plats-details.page';
import { ComponentModule } from 'src/app/Components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPlatsDetailsPageRoutingModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  declarations: [RestaurantPlatsDetailsPage]
})
export class RestaurantPlatsDetailsPageModule { }
