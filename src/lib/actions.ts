//@ts-nocheck

import { SignIn } from "./data-handler";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    return await SignIn(formData)
  } catch (error) {
    return 'Something went wrong.';
  }
}