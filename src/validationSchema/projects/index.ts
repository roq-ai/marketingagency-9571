import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  marka_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
