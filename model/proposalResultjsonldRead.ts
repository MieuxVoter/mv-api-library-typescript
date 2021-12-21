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
import { GradejsonldRead } from './gradejsonldRead';
import { ProposalGradeResultRead } from './proposalGradeResultRead';
import { ProposaljsonldRead } from './proposaljsonldRead';

/**
* The ranked Result of one Proposal in a Poll.
*/
export class ProposalResultjsonldRead {
    'context'?: string;
    'id'?: string;
    'type'?: string;
    'proposal'?: ProposaljsonldRead;
    /**
    * The computed rank of the Proposal in the Poll — Rank starts at 1 and goes upwards, and two proposals may have the same rank.
    */
    'rank'?: number;
    'medianGrade'?: GradejsonldRead;
    /**
    * Total Amount of Ballots emitted for the Proposal this Result is about.
    */
    'tally'?: number;
    /**
    * Results for each Grade, on this Proposal — This is the merit profile of the Proposal.
    */
    'gradesResults'?: Array<ProposalGradeResultRead>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "context",
            "baseName": "@context",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "@id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "@type",
            "type": "string"
        },
        {
            "name": "proposal",
            "baseName": "proposal",
            "type": "ProposaljsonldRead"
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "number"
        },
        {
            "name": "medianGrade",
            "baseName": "medianGrade",
            "type": "GradejsonldRead"
        },
        {
            "name": "tally",
            "baseName": "tally",
            "type": "number"
        },
        {
            "name": "gradesResults",
            "baseName": "gradesResults",
            "type": "Array<ProposalGradeResultRead>"
        }    ];

    static getAttributeTypeMap() {
        return ProposalResultjsonldRead.attributeTypeMap;
    }
}

