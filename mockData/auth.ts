import { mockUsers } from "./users";

export const mockLogin = async (email: string, password: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const user = mockUsers.find((u) => u.email === email);

  if (!user) throw new Error("Email không tồn tại");

  if (user.password !== password) throw new Error("Sai mật khẩu.");

  return {
    code: 200,
    success: true,
    data: {
      access_token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3NzMxNjI3NDMsImV4cCI6MTc3MzE2NjM0MywibmJmIjoxNzczMTYyNzQzLCJqdGkiOiJjZThDb3REVkNmMzZKNDJ2Iiwic3ViIjoiM2E3MjdhMDYtM2IyNS00OGFlLTg4ZWMtYWUxMmNjYTc3ZDczIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.DyyCpEQJtsFrZNPGhD_F3zndHG-4Tzyp_RVL5fw4ZmA",
      token_type: "bearer",
      expires_in: 3600,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  };
};
