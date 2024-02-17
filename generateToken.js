'use strict';

const auth = require('./stg-static/auth.json');
const jwt = require('jsonwebtoken');

const generateToken = async ({ userId, dbCode, orgId, source }) => {
	try {
		const { REFRESH_TOKEN_EXPIRE_TIME, AUTH_TOKEN_EXPIRE_TIME } = auth;
		const { AUTH_REFRESH_SECRECT_KEY, AUTH_SECRET_KEY } = process.env;

		const payload = {
			userId,
			dbCode,
			orgId
		};
		const refreshToken = jwt.sign(payload, AUTH_REFRESH_SECRECT_KEY, {
			expiresIn: '20d'
		});
		console.log({ refreshToken });
		const authTokenObject = {
			user_id: userId,
			refresh_token: refreshToken,
			source,
			session_status: 1
		};

		payload['rid'] = 5;

		const accessToken = jwt.sign(payload, AUTH_SECRET_KEY, {
			expiresIn: '5s'
		});

		console.log({ accessToken });
		return accessToken;
	} catch (error) {
		throw error;
	}
};

generateToken({ userId : 1, dbCode : 'M001', orgId : 1, source  : 1});
