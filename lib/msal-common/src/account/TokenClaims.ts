/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Type which describes Id Token claims known by MSAL.
 */
export type TokenClaims = {
    iss?: string,
    iat?: number,
    oid?: string,
    sub?: string,
    tid?: string,
    ver?: string,
    upn?: string,
    preferred_username?: string,
    login_hint?: string,
    emails?: string[],
    name?: string,
    nonce?: string,
    exp?: number,
    home_oid?: string,
    sid?: string,
    cloud_instance_host_name?: string,
    cnf?: {
        kid: string;
    };
    x5c_ca?: string,
    ts?: number,
    at?: string,
    u?: string,
    p?: string,
    m?: string
};
