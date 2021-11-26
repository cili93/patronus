import { EmergencyDAO, EmergencyResponse } from '../types/emergency';

export const mapEmergencies = (response: EmergencyResponse): EmergencyDAO[] =>
  response.content.map((e) => ({
    deviceId: e.device.serialNumber,
    emergencyId: e.emergency.emergencyId,
    emergencyReqTime: e.emergency.requestTime,
    holderName: `${e.holder.firstName} ${e.holder.lastName}`,
  }));
