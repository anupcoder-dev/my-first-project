export const fakeUsers = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      password: '123456',
    },
  ];
  
  export const loginAPI = async ({ email, password }) => {
    const user = fakeUsers.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return {
      user: { id: user.id, name: user.name, email: user.email },
      token: 'fake-jwt-token-123456',
    };
  };
  
  export const registerAPI = async ({ name, email, password }) => {
    const exists = fakeUsers.some((u) => u.email === email);
    if (exists) throw new Error('Email already registered');
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };
    fakeUsers.push(newUser);
    return {
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
      token: 'fake-jwt-token-' + Date.now(),
    };
  };  