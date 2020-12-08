/* Definition */
export interface UiConfig {
  id: string,
  version: string,
  preferredOrientation: OrientationType,
  parts: CustomComponent[]
  actions: Action[]
}

export interface Action {
  event: string,
  target: string,
}

export interface ButtonComponent extends CustomComponent {
  event: string,
}

export interface LabelComponent extends CustomComponent {
  labelType: LabelType,
}

export interface InputComponent extends CustomComponent {
  inputType: InputType,
  placeholder: string,
}

export interface CustomComponent {
  componentType: CustomComponentType
  name: string,
  text: string,
}

export enum OrientationType {
  horizontal, vertical
}

export enum InputType {
  text, number, email, password
}

export enum LabelType {
  plain, headline
}

export enum CustomComponentType {
  label, input, button
}

/* Example */
const loginForm: UiConfig = {
  id: '1a3g',
  version: '1',
  preferredOrientation: OrientationType.horizontal,
  actions: [
    {
      event: 'submit',
      target: 'http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/api/login',
    },
  ],
  parts: [
    {
      componentType: CustomComponentType.label,
      name: "headline",
      text: "Login Form",
      labelType: LabelType.headline,
    } as LabelComponent,
    {
      componentType: CustomComponentType.label,
      name: "email-label",
      text: "E-Mail",
      labelType: LabelType.plain,
    } as LabelComponent,
    {
      componentType: CustomComponentType.input,
      name: "email-input",
      text: "",
      placeholder: "max.muster@mann.de",
      inputType: InputType.email,
    } as InputComponent,
    {
      componentType: CustomComponentType.label,
      name: "password-label",
      text: "Password",
      labelType: LabelType.plain,
    } as LabelComponent,
    {
      componentType: CustomComponentType.input,
      name: "password-input",
      text: "",
      placeholder: "",
      inputType: InputType.password,
    } as InputComponent,
    {
      componentType: CustomComponentType.button,
      name: "submit-button",
      text: "Login",
      event: "submit",
    } as ButtonComponent
  ]
};