import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button,
    Box,
    Typography,
    TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { useButton } from '@mui/base/ButtonUnstyled';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import { useUserContext } from '../lib/contextLib';
import { useFormFields } from '../lib/hooksLib';
import { onError } from '../lib/errorLib';
import LoaderButton from "../components/LoaderButton";

const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin:10px;

  &:hover {
    background-color: ${blue[600]};
  }

  &.active {
    background-color: ${blue[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
        ...props,
        ref,
        component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };

    return (
        <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
            {children}
        </CustomButtonRoot>
    );
});

CustomButton.propTypes = {
    children: PropTypes.node,
};

const Settings = () => {
    const user = useUserContext();
    const { setUser } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    console.log(user.user);

    function validateForm() {
        // console.log(fields.password, user.user.password)
        // Comparer le mdp crpyté avec le vrai mdp de l'utilisateur
        // return fields.password == user.user.password;
        // Comment passer un paramètre à axio.put
        return fields.username.length > 0 || fields.email.length > 0;
    }


    function handleModify() {
        console.log(fields);
        setIsLoading(true);
        const userModified = {
            username: user.user.username,
            email: user.user.email,
        };
        const userPassword = {
            password: user.user.password,
        }

        if (fields.username.length > 0) userModified.username = fields.username;
        if (fields.email.length > 0) userModified.email = fields.email;
        if (fields.password.length != 0) userPassword.password = fields.password;
        try {
            console.log(">0");
            axios.put('http://localhost:8080/api/user/compare-password/' + user.user._id, userPassword)
                .then((response) => {
                    const { data } = response;
                    if (data.success) {

                    }
                    else {
                        alert("Error");
                    }
                });
        } catch (e) {
            setIsLoading(false);
        }
        try {
            axios.put('http://localhost:8080/api/user/' + user.user._id, userModified)
                .then((response) => {
                    const { data } = response;
                    if (data.success) {
                        setUser(data.id);
                        navigate('/settings');
                        alert("Your settings have been updated!");
                        setIsLoading(false);
                    }
                    else {
                        alert("Error!");
                    }
                });
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function handleModifyAvatar() {
        console.log("Modifier Avatar");
        alert(" TODO : \n Ouvrir une pop-up pour demander à l'utilisateur de choisir un nouvelle Avatar (liste possible 10) et : un bouton 'Accepter' et un bouton 'Retour' \n Appeller l'api updateUser avec les nouvelles données (fields) rentrées par l'utilisateur \n Appeller l'api updateUser avec la nouvelle image choisis par l'utilisateur");
    }
    return (
        <Box
            className='box-settings'
            component="form"
            noValidate
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography>
                Avatar :
                <Button
                    fullWidth
                    onClick={handleModifyAvatar}
                >
                    Modifier image
                </Button>
            </Typography>
            <Typography
                sx={{
                    margin: 1,
                }}>
                Username :
                <TextField
                    margin="normal"
                    id="username"
                    fullWidth
                    label={user.user.username}
                    value={fields.username}
                    onChange={handleFieldChange}
                    name="username"
                />
            </Typography>
            <Typography>
                Email adress :
                <TextField
                    margin="normal"
                    id="email"
                    fullWidth
                    label={user.user.email}
                    value={fields.email}
                    onChange={handleFieldChange}
                    name="email"
                />
            </Typography>
            <Typography>
                <TextField
                    sx={{ marginTop: 1, marginLeft: 2, marginBottom: 2 }}
                    id="password"
                    type="password"
                    label="Enter your password"
                    onChange={handleFieldChange}
                    name="password"
                />
                <LoaderButton
                    fullWidth
                    isLoading={isLoading}
                    disabled={!validateForm()}
                    onClick={handleModify}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: blue[500] }}
                >
                    Modifier
                </LoaderButton>
                {/* <CustomButton disabled={!validateForm()} onClick={handleModify}>
                    Modifier
                </CustomButton> */}
            </Typography>
        </Box >
    );
};

export default Settings;