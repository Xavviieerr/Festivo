import bcrypt from "bcrypt";

const Users = [
  {
    username: "samson joshua",
    email: "example@email.com",
    password: "$2b$10$d/qLwNjadLg.snNEvtwVJ.h6.yKiiWNqaJU/c0lZYRdG/v2DGR8n2",
  },
];

//registering a user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username: username,
    email: email,
    password: hashedPassword,
  };

  try {
    Users.push(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const valid = bcrypt.compare(password, Users.password);
    valid
      ? res.status(200).json(Users)
      : res.status(400).json("Wrong Password!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
