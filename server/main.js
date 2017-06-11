import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import express from 'express';
import cors from 'cors';

__ = require('lodash');
moment = require('moment');

// import {createApolloServer} from 'meteor/apollo';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import {mergeStrings} from 'gql-merge';
//
//
// createApolloServer({
//   schema,
//   graphiql: Meteor.isDevelopment,
//   pretty: true,
//   configServer: express().use('*', cors())
// });
