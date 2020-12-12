import {FeedableInterface, OpenAndClosableInterface, RequestableInterface} from "../interfaces/device.interfce";

abstract class DeviceInterface {
  id: string;
  name: string;

  protected constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

abstract class PositionedDevice extends DeviceInterface {
  position: string;

  protected constructor(id: string, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

declare type OpenClosedState = "open" | "closed";

class MouseTrap extends PositionedDevice implements RequestableInterface<OpenClosedState> {
  model: string;

  constructor(id: string, name: string, position: string, model: string) {
    super(id, name, position);
    this.model = model;
  }

  getState(): OpenClosedState {
    //implementation here
    return "open";
  };
}

class SmartCoop extends PositionedDevice implements RequestableInterface<OpenClosedState>, OpenAndClosableInterface<boolean>, FeedableInterface<number, number> {
  cameraStream: string;

  constructor(id: string, name: string, position: string, cameraStream: string) {
    super(id, name, position);
    this.cameraStream = cameraStream;
  }

  getState(): OpenClosedState {
    //implementation here
    return "open";
  };

  open(): boolean {
    //implementation here
    return true;
  }

  close(): boolean {
    //implementation here
    return true;
  }

  feed(amount: number): number {
    //implementation here
    return amount+1;
  }
}

class AnotherDevice extends DeviceInterface {
  property: string;

  constructor(id: string, name: string, property: string) {
    super(id, name);
    this.property = property;
  }
}

//example
const mouseTrap = new MouseTrap('1', 'Mousefalle #1', '48.0-16.0', 'Premium Mausefalle');
const smartCoop = new SmartCoop('2', 'Hühnerstall #1', '49.0-17.0', 'http://data.stream');
const anotherDevice = new AnotherDevice('3', 'Another device #1', 'value');

//because devices are Requestable
mouseTrap.getState();
smartCoop.getState();

//because device is OpenAndClosebale
smartCoop.open();
smartCoop.close();

//becasue device is Feedable
smartCoop.feed(1);

