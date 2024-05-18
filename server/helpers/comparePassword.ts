export const comparePassword = (existingPassword: string, providedPassword: string) => {
    return existingPassword === providedPassword;
};