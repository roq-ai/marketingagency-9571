import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  status: yup.string().required(),
  comment: yup.string().nullable(),
  submission_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
