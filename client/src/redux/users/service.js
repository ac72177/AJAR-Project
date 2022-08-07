const addUser = async (userInfo) => {
  const body = {
    auth: userInfo.auth,
    name_first: userInfo.name_first,
    name_last: userInfo.name_last,
    email: userInfo.email,
    register_date: userInfo.register_date,
  };
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

export default {
  addUser,
};
