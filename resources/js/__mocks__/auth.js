class Auth {
    login(values) {
      return new Promise((resolve, error) => {
        setTimeout(function(){
          let errors = {}
          if (values['email'] == "correct@email.com" && values['password'] == "correct_password") {
            resolve("/successful_redirect");
          } else {
            errors['email'] = "some error with email";
            error(errors)
          }
        }, 30000)
      });
    }
}
  
export default new Auth();