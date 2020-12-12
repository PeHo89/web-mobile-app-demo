import {DashboardSettingsModel} from "./dashboard-settings.model";
import {DeviceModel} from "./device.model";

export class UserModel {
  id: string;
  firstName: string;
  lastName: string;
  streetAndNumber: string;
  postalCode: string;
  city: string;
  country: string;
  email: string;
  passwordHash: string;
  doubleOptIn: string;
  dashboardSetting: DashboardSettingsModel;
  devices: DeviceModel[];
}