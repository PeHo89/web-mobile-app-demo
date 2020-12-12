import {UserModel} from "./user.model";
import {UserWidget} from "./widget.model";

export class DashboardSettingsModel {
  id: string;
  name: string;
  color: string;
  user: UserModel;
  widgets: UserWidget[];
}