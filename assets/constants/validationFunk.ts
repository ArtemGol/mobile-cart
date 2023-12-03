import i18n from 'i18next';

type IValidation = 'required' | 'email' | 'confirm' | 'maxLength' | 'minLength';

interface IValidProps {
  value: string;
  confirmPas?: string;
  fieldName?: string;
  max?: number;
  min?: number;
}

const validationRules: Record<string, Function> = {
  required: ({value, fieldName}: IValidProps) =>
    value.trim() !== '' ? '' : `${fieldName} can not be empty`,
  email: ({value}: IValidProps) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return value
      ? emailPattern.test(value)
        ? ''
        : i18n.t('loginScreen.validation.mail')
      : '';
  },
  confirm: ({value, confirmPas}: IValidProps) =>
    value ? (value === confirmPas ? '' : 'Passwords must match') : '',
  maxLength: ({value, max}: IValidProps) =>
    value
      ? value.length > (max || 0)
        ? i18n.t('loginScreen.validation.max', {max})
        : ''
      : '',
  minLength: ({value, min}: IValidProps) =>
    value
      ? value.length < (min || 0)
        ? i18n.t('loginScreen.validation.min', {min})
        : ''
      : '',
};

interface IFunk {
  value: string;
  fieldName?: string;
  confirmPas?: string;
  max?: number;
  min?: number;
  errors: IValidation[];
}

export const validationFunk = ({
  value,
  fieldName,
  errors,
  confirmPas,
  max,
  min,
}: IFunk) => {
  const errorsTextArr = errors
    .map(el => validationRules[el]({value, fieldName, confirmPas, max, min}))
    .filter(el => !!el);
  return errorsTextArr.length ? errorsTextArr.join(',\n') : '';
};
