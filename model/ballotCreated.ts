/**
 * Majority Judgment API
 * This is a **deliberation service** using **majority judgment** polling. It\'s **libre software** ([source](https://github.com/mieuxvoter)) made and maintained by [MieuxVoter.fr](https://mieuxvoter.fr). You\'re browsing the API documentation and sandbox.  ## Use one of the known clients  - TODO: add an URL to a client of the API   ## Try it out the hard way  ### Create an account  You will need a user account to interact with polls. Head to **Registration** → `POST /users` below. Click _Try it out_, set your desired credentials, and execute the query. Scroll down to see the response.  ### Authenticate  Use your credentials in the **Login** → `POST /_jwt`, and the API will return a Json Web Token valid for one hour. Copy the token (not the whole response, and without quotes) in the field behind the `Authorize 🔒` button.  ### Create a poll  **Poll** → `POST /polls`  Keep the response, you\'ll need the uuids.  > TODO: document invitation generation  ### Submit judgments  **Ballot** → `POST /polls/{pollId}/proposals/{proposalId}/ballots`  One request per proposal, for now.  We plan on making an endpoint to submit them all at once.  ### Collect the results  **Result** → `GET /polls/{id}/result`  ## Use a generated client library  - for php  (link!) - for typescript-node  (link!!) - …  There are clients we can generate for most languages. Get in touch if you\'d like one in particular! Or clone this project and use `bin/generate-client.bash -t whatever`. 
 *
 * The version of the OpenAPI document: 0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
*/
export class BallotCreated {
    /**
    * Universally Unique IDentifier of the Ballot.
    */
    'uuid'?: string | null;
    /**
    * The Majority Judgment Poll Proposal the author is giving a grade to.
    */
    'proposal'?: string;
    /**
    * The Grade attributed by the Judge to the Proposal.
    */
    'grade'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "proposal",
            "baseName": "proposal",
            "type": "string"
        },
        {
            "name": "grade",
            "baseName": "grade",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BallotCreated.attributeTypeMap;
    }
}

