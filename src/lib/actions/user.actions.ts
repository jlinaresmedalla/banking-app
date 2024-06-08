'use server';

import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../server/appwrite';
import { parseStringify } from '../utils';

export const signIn = async ({ email, password }) => {
  try {
    //Mutation / Database call / API call
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`,
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (err) {
    console.log(err);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    return null;
  }
}
