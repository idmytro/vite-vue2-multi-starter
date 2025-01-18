/* eslint-disable no-console */
import { generateErrorMessage } from 'zod-error'
import { getEnvIssues } from '../env'

const issues = getEnvIssues()

if (issues) {
  console.error('Invalid environment variables, check the errors below!')
  console.error(
    generateErrorMessage(issues, {
      delimiter: { error: '\\n' },
    }),
  )
  process.exit(-1)
}

console.log('The environment variables are valid!')
