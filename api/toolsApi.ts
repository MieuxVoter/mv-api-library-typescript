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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://oas.mieuxvoter.fr';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ToolsApiApiKeys {
    apiKey,
}

export class ToolsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'apiKey': new ApiKeyAuth('header', 'Authorization'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ToolsApiApiKeys, value: string) {
        (this.authentications as any)[ToolsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This endpoint requires no authentication. 
     * @summary Resolves the provided tally. 
     */
    public async getJsonResultFromTally (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/{tally}.json';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The resulting merit profile is not ranked, proposals are shown in the order they were submitted. This endpoint requires no authentication. 
     * @summary Generates a merit profile as SVG of the provided tally. 
     */
    public async getSvgMeritProfileFromTally (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/render/merit-profile.svg';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
