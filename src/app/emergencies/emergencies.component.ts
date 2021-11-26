import { Component, OnInit } from '@angular/core';
import { EmergencyService } from './services/emergency.service';
import { EmergencyDAO } from './types/emergency';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html'
})
export class EmergenciesComponent implements OnInit {
  emergencies: EmergencyDAO[] = [];

  constructor(private emergenciesService: EmergencyService) {}

  ngOnInit(): void {
    this.getEmergencies();
  }

  private getEmergencies() {
    this.emergenciesService.getEmergencies().subscribe((content) => {
      this.emergencies = content;
    });
  }
}
