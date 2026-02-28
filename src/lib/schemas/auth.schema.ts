import z from 'zod';

export const registerSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string()
    .regex(
      /^[0-9a-zA-Z]{6,}$/,
      'Password must have at least 6 characters and contains only letters and numbers'
    ),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dob: z.date('Date is required'),
  gender: z.enum(
    ['MALE', 'FEMALE', 'OTHER'],
    'Gender must be one of the following values: Male, Female, Other'
  )
});

export type RegisterInput = z.infer<typeof registerSchema>;
