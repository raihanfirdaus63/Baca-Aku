const BASE_URL = "http://localhost:3000";


export const registerAdmin = (registerForm) => {
    return async (dispatch, state) => {
      console.log(registerForm,"actionform")
        try {
            const response = await fetch(`${BASE_URL}/register-admin`,{
                method: 'POST',
                body: JSON.stringify(registerForm),
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                }
            });
            const result = await response.json()
            return result
        } catch (error) {
          console.log(error,"error")
          throw error;
        }
    }
}

export const loginAdmin = (formLogin) => {
    return async (dispatch, state) => {
      try {
        const response = await fetch(`${BASE_URL}/login-admin`, {
          method: 'POST',
          body: JSON.stringify(formLogin),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          const errorResponse = await response.json();
          throw errorResponse;
        }
  
        const result = await response.json();
        return result;
      } catch (error) {
        throw error;
      }
    };
  };
  