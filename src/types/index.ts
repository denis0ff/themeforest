export type ClientStat = {
  label: string;
  info: string;
};

export type InitialFormValues = { [key: string]: string };

export type FormFieldData = {
  [key: string]: string;
  label: string;
  name: string;
  text: string;
  placeholder: string;
  type: string;
};
