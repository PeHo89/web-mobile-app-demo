export class DeviceModel {
  id: string;
  deviceType: DeviceType;
  deviceParameters: DeviceParameter[];

  constructor(id: string, deviceType: DeviceType, deviceParameters: DeviceParameter[]) {
    this.id = id;
    this.deviceType = deviceType;
    this.deviceParameters = deviceParameters;
  }
}

export class DeviceType {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class DeviceTypeDeviceParameterType {
  deviceType: DeviceType;
  deviceParameterType: DeviceParameterType;

  constructor(deviceType: DeviceType, deviceParameterType: DeviceParameterType) {
    this.deviceType = deviceType;
    this.deviceParameterType = deviceParameterType;
  }
}

export class DeviceParameter {
  id: string;
  value: string;
  type: DeviceParameterType;

  constructor(id: string, value: string, type: DeviceParameterType) {
    this.id = id;
    this.value = value;
    this.type = type;
  }
}

export class DeviceParameterType {
  id: string;
  name: string;
  description: string;
  parameterType: ParameterType;

  constructor(id: string, name: string, description: string, parameterType: ParameterType) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.parameterType = parameterType;
  }
}

export class ParameterType {
  id: string;
  type: string;

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
  }
}

//example
const availableDeviceTypes = [
  new DeviceType("1", "MouseTrap"),
  new DeviceType("2", "SmartCoop"),
];

const availableParameterTypes = [
  new ParameterType("1", "string"),
  new ParameterType("2", "number"),
  new ParameterType("3", "date"),
];

const availableDeviceParameterTypes = [
  new DeviceParameterType("1", "Name", "Name of the device", availableParameterTypes[0]),
  new DeviceParameterType("2", "Description", "Description of the device", availableParameterTypes[0]),
  new DeviceParameterType("3", "Value", "Value of the device", availableParameterTypes[1]),
  new DeviceParameterType("4", "Registered", "Registration Date of the device", availableParameterTypes[2]),
  new DeviceParameterType("5", "Position", "Position of the device", availableParameterTypes[0]),
];

const deviceTypeDeviceParameterTypes = [
  //Mouse Trap has Name, Description, Value and Registered
  new DeviceTypeDeviceParameterType(availableDeviceTypes[0], availableDeviceParameterTypes[0]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[0], availableDeviceParameterTypes[1]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[0], availableDeviceParameterTypes[2]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[0], availableDeviceParameterTypes[3]),

  //Smart Coop has Name, Description, Value, Registered and Position
  new DeviceTypeDeviceParameterType(availableDeviceTypes[1], availableDeviceParameterTypes[0]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[1], availableDeviceParameterTypes[1]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[1], availableDeviceParameterTypes[2]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[1], availableDeviceParameterTypes[3]),
  new DeviceTypeDeviceParameterType(availableDeviceTypes[1], availableDeviceParameterTypes[4]),
];

//if parameter list of device depending is complete with respect to device type can be checked via deviceTypeDeviceParameterTypes
const deviceOne = new DeviceModel(
  "1",
  availableDeviceTypes[0],
  [
    new DeviceParameter("1", "Mausefalle #1", availableDeviceParameterTypes[0]),
    new DeviceParameter("2", "Futterkammer im Innenhof", availableDeviceParameterTypes[1]),
    new DeviceParameter("3", "42", availableDeviceParameterTypes[2]),
    new DeviceParameter("4", "2020-12-11T11:04:03.237Z", availableDeviceParameterTypes[3]),
  ]
);

//if parameter list of device depending is complete with respect to device type can be checked via deviceTypeDeviceParameterTypes
const deviceTwo = new DeviceModel(
  "2",
  availableDeviceTypes[1],
  [
    new DeviceParameter("5", "Smart Coop #1", availableDeviceParameterTypes[0]),
    new DeviceParameter("6", "Futterkammer im Innenhof", availableDeviceParameterTypes[1]),
    new DeviceParameter("7", "42", availableDeviceParameterTypes[2]),
    new DeviceParameter("8", "2020-12-11T11:04:03.237Z", availableDeviceParameterTypes[3]),
    new DeviceParameter("9", "48.209209-16.372780", availableDeviceParameterTypes[4]),
  ]
);