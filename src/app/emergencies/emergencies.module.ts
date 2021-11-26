import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergenciesRoutingModule } from './emergencies-routing.module';
import { EmergenciesComponent } from './emergencies.component';
import { EmergencyService } from './services/emergency.service';
import { EmergencyRepository } from './repositories/emergency.repository';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [EmergenciesComponent],
  imports: [CommonModule, EmergenciesRoutingModule, HttpClientModule, TableModule],
  providers: [EmergencyService, EmergencyRepository],
})
export class EmergenciesModule {}
