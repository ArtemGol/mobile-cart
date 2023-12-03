interface IValue {
  icon: string;
  key: 'email' | 'password' | 'name';
}
export const profileDataTypesObj: Record<string, IValue> = {
  name: {
    key: 'name',
    icon: 'person',
  },
  mail: {
    key: 'email',
    icon: 'person',
  },
  password: {
    key: 'password',
    icon: 'lock',
  },
};
