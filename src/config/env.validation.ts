import z from 'zod';

const serverEnvSchema = z.object({
  API_URL: z.url()
});

const serverResult = serverEnvSchema.safeParse(process.env);
if (!serverResult.success) {
  console.error(
    '❌ Invalid server environment variables: \n',
    z.prettifyError(serverResult.error)
  );
  process.exit(1);
}

export const serverEnv = serverResult.data;
