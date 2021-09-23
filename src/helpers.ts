export const validateName = (name: string) => name.length > 1
export const validateEmail = (email: string) => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
    String(email)
)}
export const validatePassword = (password: string) => password.trim().length > 4
export const validateConfirmPassword = (password: string, confirmPassword: string) => confirmPassword.trim().length > 4 && password.trim() === confirmPassword.trim()