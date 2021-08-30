
const API_URL = 'http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000'

interface IUserRegistration {
  login: string,
  email: string,
  password: string
}
interface IUserLogin {
  login: string,
  password: string
}

const getResponceMessage = async (response: Response, title: string, login: string) => {
  if(response.status === 204){
    return `${title}: ${login}`;
  }else {
    const result = await response.json();
    return result.errors.login;
  } 
};


export const fetchRegistration = async(user: IUserRegistration) => {
  console.log(JSON.stringify(user))
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
      
    });
    return getResponceMessage(response, 'Register', user.login);
  } catch (error) {
    console.log(error);
  };
};

export const fetchLogin = async(user: IUserLogin) => {
  console.log(JSON.stringify(user))
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    return getResponceMessage(response, 'Login', user.login);
  } catch (error) {
    console.log(error)
  };
};



