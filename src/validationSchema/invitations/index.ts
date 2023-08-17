import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  role: yup.string().required(),
  marka_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
