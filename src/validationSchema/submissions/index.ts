import * as yup from 'yup';

export const submissionValidationSchema = yup.object().shape({
  status: yup.string().required(),
  feedback: yup.string().nullable(),
  project_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
