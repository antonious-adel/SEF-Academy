import supabase from "./supabase";

export async function signup(data) {
  const {
    firstName,
    lastName,
    status,
    email,
    password,
    user_id,
    phone,
    role,
    avatar = "",
  } = data;
  const { data: signupData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        status,
        email,
        password,
        user_id,
        phone,
        role,
        avatar,
        age: null,
        nationality: "",
        country: "",
        city: "",
        university: "",
        major: "",
        gdYear: null,
        about: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return signupData;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser(user) {
  // 1. Update password OR fullName
  const { password, email, ...otherData } = user;
  let updateData;
  if (email) updateData = { email };
  if (password) updateData = { password };
  if (otherData) updateData = { data: { ...otherData } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  // if (!avatar) return data;
  return data;
  // 2. Upload the avatar image
  // const fileName = `avatar-${data.user.id}-${Math.random()}`;

  // const { error: storageError } = await supabase.storage
  //   .from("avatars")
  //   .upload(fileName, avatar);

  // if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  // const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
  //   data: {
  //     avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
  //   },
  // });

  // if (error2) throw new Error(error2.message);
  // return updatedUser;
}
