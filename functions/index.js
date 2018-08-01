'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate(user => {
    return admin.firestore().doc('profiles/' + user.uid).set({
        userName: user.displayName
    });
});