import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/user_slice';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/form.scss';
