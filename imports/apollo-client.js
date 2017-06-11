import ApolloClient,{createNetworkInterface} from 'apollo-client';

import { graphqlUrl } from './config.js';
let ApolloClientCase;
ApolloClientCase = new ApolloClient();
// const networkInterface = createNetworkInterface({ uri: graphqlUrl });
// if(caseProto === 'local'){
//     //dev
//     ApolloClientCase = new ApolloClient({
//       networkInterface
//     });
// } else {
//     //Replace with this when build
//
// }
export const client = ApolloClientCase;
