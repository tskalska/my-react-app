// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import { object, string, number, date, InferType } from 'yup';


// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { dividerClasses } from '@mui/material';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });




const App = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter your email correctly.")
      .required("Required field. Enter your email."),
    password: yup.string().required("Required field. Enter your password."),
  });


  const formik = useFormik({
    initialValues: {
      login: login,
      password: password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLogin(values.login);
      setPassword(values.setPassword) 
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} class="main_form">
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateRows: 'repeat(3, 1fr)',
            width: 300,
            // marginLeft: auto,
            }}>
        <TextField
            fullWidth
            id="login"
            name="login"
            label="Login"
            variant="outlined"
            value={formik.values.login}
            onChange={formik.handleChange}
            autoFocus
            autoComplete="login"
            margin="normal"
    
            // class="textfield_input"
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          margin="normal"
          // class="textfield_input"
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
        />    

              <Button 
                variant="contained" 
                type ="submit" 
                sx={{ 
                    width: 150,
                }}>
                    Submit
              </Button>
          </Box>

      </form>
    </div>

    
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar> */}
    //     <Typography component="h1" variant="h5">
    //         Sign in
    //     </Typography>
    //     <Box component="form" noValidate sx={{ mt: 1 }}>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         label="Email Address"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //       />
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       <FormControlLabel
    //         control={<Checkbox value="remember" color="primary" />}
    //         label="Remember me"
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Sign In
    //       </Button>
    //       <Grid container>
    //         <Grid item xs>
    //           <Link href="#" variant="body2">
    //             Forgot password?
    //           </Link>
    //         </Grid>
    //         <Grid item>
    //           <Link href="#" variant="body2">
    //             {"Don't have an account? Sign Up"}
    //           </Link>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //     </Box>
    //     <Copyright sx={{ mt: 8, mb: 4 }} />
    //   </Container>
    // </ThemeProvider>
  );
}

export default App;
  