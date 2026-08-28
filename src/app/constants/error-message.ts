export const ERROR_MESSAGE: Record<string, (field: string, config?: any) => string> = {
  required: (field: string) => `${field} is required`,
  pattern: (field: string) => `${field} is invalid`,
  minlength: (field: string, config: any) => `min length is ${config.requiredLength}`,
  maxlength: (field: string, config: any) => `max length is ${config.requiredLength}`,
  email: (field: string) => `${field} is invalid`,
};
