import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  VITE_V: z.string(),
})

export const ENV = envSchema.parse(import.meta.env)

export function getEnvIssues (): z.ZodIssue[] | void {
  const result = envSchema.safeParse(import.meta.env)
  if (!result.success)
    return result.error.issues
}
