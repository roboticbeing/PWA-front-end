
// ################################################################################
// Data service operations setup

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Load the schemas...

// User accounts
const useraccountSchema = require('./msc-useraccount');

// Data entities; the standard format is:
const personSchema = require('./msc-person.js');
// Add others as needed
const alertSchema = require('./msc-alerts');

const textContentSchema = require ('./msc-textcontent');

const personalProfileSchema = require ('./msc-personalprofile');



// ################################################################################
// Define the functions that can be called by server.js

module.exports = function () {

  // Collection properties, which get their values upon connecting to the database
  let UserAccounts;
  // Add others
  let Persons;
  let Alerts;
  let textContent;
  let personalProfiles;

  return {

    // ############################################################
    // Connect to the database

    connect: function () {
      return new Promise(function (resolve, reject) {

        // Create connection to the database

        // This one works for localhost...
        // Replace the database name with your own value
        let db = mongoose.createConnection('mongodb://localhost/db');

        // This one works for MongoDB Atlas...
        // Replace the database user name and password, and database (cluster) name, with your own values
        //let db = mongoose.createConnection('mongodb+srv://<database-user-name>:<database-user-password>@<your-atlas-cluster-name-abcde>.mongodb.net/databasename?retryWrites=true');

        // Handle connection events...
        // https://mongoosejs.com/docs/connections.html#connection-events
        // The data type of a connection event is string
        // And more than one connection event may be emitted during execution

        // FYI the Node.js EventEmitter class docs is here...
        // https://nodejs.org/api/events.html#events_class_eventemitter

        // Handle the unable to connect scenario
        // "on" is a Node.js method in the EventEmitter class
        // https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
        db.on('error', (error) => {
          //console.log('db error');
          reject(error);
        });

        db.on('connecting', () => {
          //console.log('db connecting');
          // Note - this event does not appear to be firing
          resolve();
        });

        // Handle the open/connected event scenario
        // "once" is a Node.js method in the EventEmitter class
        // https://nodejs.org/api/events.html#events_emitter_once_eventname_listener
        db.once('open', () => {
          //console.log('db open/connected');
          UserAccounts = db.model("useraccounts", useraccountSchema, "useraccounts")
          // Add others
          Persons = db.model("persons", personSchema, "persons")
          Alerts = db.model("alerts", alertSchema, "alerts")
          textContent = db.model("textContent", textContentSchema, "textContent")
          personalProfiles = db.model("alerts", personalProfileSchema, "alerts")

          resolve();
        });
      });
    },



    // ############################################################
    // User account requests

    useraccountsGetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        UserAccounts.find()
          .sort({ fullName: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    useraccountsGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        UserAccounts.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    useraccountsActivate: function (userData) {
      return new Promise(function (resolve, reject) {

        // Incoming data package has the following:
        // { "userName": "adeans@example.com", "password": "password123!", 
        // "passwordConfirm": "password123!", "statusActivated": true, "roles": ["Role1", "Role2"], 
        // "claims": [ { "type": "OU", "value": "Department1" }, { "type": "Task", "value": "canUpdateProducts" } ] }

        if (userData.userName.length == 0 | userData.password.length == 0 | userData.passwordConfirm.length == 0) {
          return reject('Invalid credentials');
        }

        if (userData.password != userData.passwordConfirm) {
          return reject("Passwords do not match");
        }

        // Generate a "salt" value
        var salt = bcrypt.genSaltSync(10);
        // Hash the result
        var hash = bcrypt.hashSync(userData.password, salt);

        // Attempt to update the user account
        UserAccounts.findOneAndUpdate(
          { userName: userData.userName },
          { password: hash, statusActivated: true, roles: userData.roles, claims: userData.claims },
          { new: true }, (error, item) => {
            if (error) {
              // Cannot edit item
              return reject(`User account activation - ${error.message}`);
            }
            // Check for an item
            if (item) {
              // Edited object will be returned
              //return resolve(item);
              // Alternatively...
              return resolve('User account was activated');
            } else {
              return reject('User account activation - not found');
            }

          }); // UserAccounts.findOneAndUpdate
      }); // return new Promise
    }, // useraccountsActivate

    useraccountsRegister: function (userData) {
      return new Promise(function (resolve, reject) {

        // Incoming data package has the following:
        // { "userName": "uuu", "fullName": "fff", "password": "ppp", "passwordConfirm": "ppp", 
        // "statusActivated": true, "statusLocked": false,
        // "roles": ["Role1", "Role2"], 
        // "claims": [ { "type": "OU", "value": "Department1" }, { "type": "Task", "value": "canUpdateProducts" } ] }

        if (userData.userName.length == 0 | userData.password.length == 0 | userData.passwordConfirm.length == 0) {
          return reject('Invalid credentials');
        }

        if (userData.password != userData.passwordConfirm) {
          return reject("Passwords do not match");
        }

        // Generate a "salt" value
        var salt = bcrypt.genSaltSync(10);
        // Hash the result
        var hash = bcrypt.hashSync(userData.password, salt);

        // Update the incoming data
        userData.password = hash;

        // Create a new user account document
        let newUser = new UserAccounts(userData);
        // Add properties
        newUser.statusActivated = true;
        newUser.statusLocked = false;

        // Attempt to save
        newUser.save((error) => {
          if (error) {
            if (error.code == 11000) {
              reject("User account creation - cannot create; user already exists");
            } else {
              reject(`User account creation - ${error.message}`);
            }
          } else {
            resolve("User account was created");
          }
        }); //newUser.save
      }); // return new Promise
    }, // useraccountsRegister

    useraccountsLogin: function (userData) {
      return new Promise(function (resolve, reject) {

        // Incoming data package has the following:
        // { "userName": "xxx", "password": "yyy" }

        if (userData.userName.length == 0 | userData.password.length == 0) {
          return reject('Invalid credentials');
        }

        UserAccounts.findOne(
          { userName: userData.userName }, (error, item) => {
            if (error) {
              // Query error
              return reject(`Login - ${error.message}`);
            }
            // Check for an item
            if (item) {

              // Ensure that the account is active
              if (!item.statusActivated) {
                return reject('Account is not activated')
              }
              // Ensure that the account is unlocked
              if (item.statusLocked) {
                return reject('Account is locked');
              }

              // Compare password with stored value
              let isPasswordMatch = bcrypt.compareSync(userData.password, item.password);
              if (isPasswordMatch) {
                //return resolve('Login was successful');
                return resolve(item);
              }
              else {
                return reject('Login was not successful');
              }
            } else {
              return reject('Login - not found');
            }

          }); // UserAccounts.findOneAndUpdate
      }); // return new Promise
    }, // useraccountsLogin



    // ############################################################
    // Person requests

    personGetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        // During development and testing, can "limit" the returned results to a smaller number
        // Remove that function call when deploying into production
        Persons.find()
          .limit(20)
          .sort({ familyName: 'asc', givenName: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    personGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Persons.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    personAdd: function (newItem) {
      return new Promise(function (resolve, reject) {

        Persons.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    personEdit: function (newItem) {
      return new Promise(function (resolve, reject) {

        Persons.findByIdAndUpdate(newItem._id, newItem, { new: true }, (error, item) => {
          if (error) {
            // Cannot edit item
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Edited object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }

        });
      })
    },

    personDelete: function (itemId) {
      return new Promise(function (resolve, reject) {

        Persons.findByIdAndRemove(itemId, (error) => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        })
      })
    },

     // ############################################################
    // Alert requests

    alertGetAllActive: function () {
      return new Promise(function (resolve, reject) {

        Alerts.find()
          .limit(20)
          //.sort({ familyName: 'asc', givenName: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    alertGetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Alerts.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    //alertGetSome:

    //createProtectedAlert

    //edit existing
  
    //deactivate or delete, protected

    textContentGetAll: function () {
      return new Promise(function (resolve, reject) {
        textContent.find()
        .exec((error, items) => {
          if (error) {
            // Query error
            return reject(error.message);
        }
        // Found, a collection will be returned
        return resolve(items);
      });
      })
    },

    textContentById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        textContent.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    //edit, post, put, delete are protected to contentEditor role


  } // return statement that encloses all the function members

} // module.exports
