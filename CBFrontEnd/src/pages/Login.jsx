import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {

    return (
        <div>
         <Form method="postmapping" action="/user">
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="Name" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button> 
          </Form>
        </div>
      );
 
}

export default Login;