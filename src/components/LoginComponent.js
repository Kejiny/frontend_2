// import React, { Component } from "react";

// import { Card, CardContent, Typography, Grid, TextField ,FormControl} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';



// const style = {
//   root: {
//     minWidth: 400,
//     minHeight:400,
//     backgroundColor:'#ffffff',
//     marginTop: 200,
//     color: '#000000',
//     backgroundImage: 'url("https://i.pinimg.com/originals/d7/59/b5/d759b559ad669f9e199f1aaaa381a8ab.jpg")',
//   },
//   label:{
//     fontFamily:"Arial",
//     fontSize:"15px"

//   },
//   h1:{
//     alignItems:"Center",
//     fontFamily:"Sans-serif",
//     fontSize:"45px"
   
//   },
//   h3:{
//     fontFamily:"Sans-serif",
//     alignItems:"Center",
//     fontSize:"20px"
//   },
// }
// const styles = {
//   text: {
//     width: '42ch',
//   },
// };

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
    

//     this.state = {
//       username: "",
//       password: "",
//       message: ""
//     };
//   }

//   onChangeUsername = (e) => {
//     this.setState({
//       username: e.target.value
//     });
//   }

//   onChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     });
//   }

//   handleLogin = (e) => {
//     e.preventDefault();

//     if (this.state.username && this.state.password) {
//           console.log("username = " + this.state.username)
//           console.log("password = " + this.state.password)
//           localStorage.setItem('id', '1');
//           localStorage.setItem('username', this.state.username);
//           localStorage.setItem('email', 'kgny@gmail.com');
//           localStorage.setItem('roles', 'ROLE_ADMIN');
//           this.props.history.push("/profile");
//           window.location.reload();
//     } else {
//       this.setState({
//         message: "Empty username or password"
//       })
//     }
//   }

//   render() {
//     const { classes } = this.props;
//     return (
      
//       <Grid container>
//         <Grid item xs={5}/>
//         <Grid item xs={2}>
//           <Card style={style.root}>
//               <CardContent>
//                 <form onSubmit={this.handleLogin}  >
//                   <Grid container spacing={1}>
//                       <Grid item xs={12}>
                      
//                       <label htmlFor="outlined-pass" style={style.h1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login </label><br></br>
                   
//                     <br></br><br></br>

//                       </Grid>
                    
//                       <Grid item xs={12}>
                       
                          
//                         <TextField style={styles.text} id="outlined-basic" label="Email" variant="outlined" 
//           value={this.state.username}
//           onChange={this.onChangeUsername}/><br></br>
        

      
      
//                       </Grid>
                      
                      
//                       <Grid item xs={12}>
                       
                       
//                           <TextField style={styles.text}type="password"
//           id="outlined-basic"
//           label="Password"
//           type="password"
//           variant="outlined"
//           value={this.state.password}
//                             onChange={this.onChangePassword}/>

// <br></br><br></br>
// <Button variant="contained" color="#ffffff" onClick={this. handleLogin} href="#">
//         Login
//       </Button>
// <br></br><br></br>
//       < label htmlFor="outlined-pass" style={style.h3}> &nbsp; &nbsp; &nbsp; New User?    <a href="./register">  Create Account</a> </label>

                        
//                       </Grid>
//                   </Grid>
//                   {this.state.message && (
//                     <div>
//                       <Typography color='error' variant="overline" display="block" gutterBottom>
//                           <strong>{this.state.message}</strong>
//                       </Typography>
//                     </div>
//                   )}
//                 </form>
//               </CardContent>
//         </Card>
//         </Grid>
//         <Grid item xs={5}/>
//       </Grid>
//     );
//   }
// }
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Login</BreadcrumbItem>
                    </Breadcrumb>
                    {/* <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            Kilinochchi<br />
                            
                            Honey Bee<br />
                            <i className="fa fa-phone"></i>:0779996621<br />
                            <i className="fa fa-fax"></i>: <br />
                            <i className="fa fa-envelope"></i>:glorehoney@gmail.com <a href="glorehoney@gmail.com">glorehoney@gmail.com</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+94779996621"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-success"><i className="fa fa-whatsapp"></i> Whatsapp</a>
                            <a role="button" className="btn btn-black" href="mailto:glorehoney@gmail.comt"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div> */}
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;