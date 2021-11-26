interface Device {
  serialNumber: string;
}

interface Emergency {
  emergencyId: string;
  requestTime: string;
}

interface Holder {
  firstName: string;
  lastName: string;
}

export interface EmergencyInfo {
  device: Device;
  emergency: Emergency;
  holder: Holder;
}

export interface EmergencyResponse {
  content: EmergencyInfo[];
}

export interface EmergencyDAO {
  deviceId: string;
  emergencyId: string;
  emergencyReqTime: string;
  holderName: string;
}
