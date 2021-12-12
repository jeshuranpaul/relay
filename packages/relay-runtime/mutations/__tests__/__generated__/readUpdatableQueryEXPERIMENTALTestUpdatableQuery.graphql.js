/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<54345e8a1df49a18ea8a7795749369fa>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type readUpdatableQueryEXPERIMENTALTest_user$fragmentType = any;
export type readUpdatableQueryEXPERIMENTALTestUpdatableQuery$variables = {||};
export type readUpdatableQueryEXPERIMENTALTestUpdatableQueryVariables = readUpdatableQueryEXPERIMENTALTestUpdatableQuery$variables;
export type readUpdatableQueryEXPERIMENTALTestUpdatableQuery$data = {|
  get me(): ?{|
    +__typename: string,
    +id: string,
    name: ?string,
    +author: ?{|
      +client_best_friend: ?{|
        name: ?string,
      |},
    |},
    +author2: ?{|
      client_nickname: ?string,
    |},
  |},
  set me(value: ?{
    +$fragmentSpreads: readUpdatableQueryEXPERIMENTALTest_user$fragmentType,
    ...
  }): void,
  +node: ?({|
    +__typename: "User",
    name: ?string,
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other",
  |}),
  +node2: ?({|
    +__typename: "User",
    name: ?string,
    get parents(): $ReadOnlyArray<{|
      name: ?string,
      +parents: $ReadOnlyArray<{|
        name: ?string,
      |}>,
    |}>,
    set parents(value: $ReadOnlyArray<{
      +$fragmentSpreads: readUpdatableQueryEXPERIMENTALTest_user$fragmentType,
      ...
    }>): void,
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other",
  |}),
|};
export type readUpdatableQueryEXPERIMENTALTestUpdatableQueryResponse = readUpdatableQueryEXPERIMENTALTestUpdatableQuery$data;
export type readUpdatableQueryEXPERIMENTALTestUpdatableQuery = {|
  variables: readUpdatableQueryEXPERIMENTALTestUpdatableQueryVariables,
  response: readUpdatableQueryEXPERIMENTALTestUpdatableQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "client_nickname",
      "storageKey": null
    }
  ]
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "readUpdatableQueryEXPERIMENTALTest_user"
},
v6 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "4"
  }
],
v7 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "5"
  }
],
v8 = [
  (v2/*: any*/),
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "readUpdatableQueryEXPERIMENTALTestUpdatableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "client_best_friend",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": "author2",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/)
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"4\")"
      },
      {
        "alias": "node2",
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "parents",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "parents",
                    "plural": true,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"5\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "readUpdatableQueryEXPERIMENTALTestUpdatableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "client_best_friend",
                    "plural": false,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": "author2",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"4\")"
      },
      {
        "alias": "node2",
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "parents",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "parents",
                    "plural": true,
                    "selections": (v8/*: any*/),
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"5\")"
      }
    ]
  },
  "params": {
    "cacheID": "d6fd224fb2641f9cf1ebf774949cf34b",
    "id": null,
    "metadata": {},
    "name": "readUpdatableQueryEXPERIMENTALTestUpdatableQuery",
    "operationKind": "query",
    "text": "query readUpdatableQueryEXPERIMENTALTestUpdatableQuery {\n  me {\n    __typename\n    id\n    name\n    author {\n      id\n    }\n    author2: author {\n      id\n    }\n    ...readUpdatableQueryEXPERIMENTALTest_user\n  }\n  node(id: \"4\") {\n    __typename\n    ... on User {\n      __typename\n      name\n    }\n    id\n  }\n  node2: node(id: \"5\") {\n    __typename\n    ... on User {\n      __typename\n      name\n      parents {\n        ...readUpdatableQueryEXPERIMENTALTest_user\n        name\n        parents {\n          name\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment readUpdatableQueryEXPERIMENTALTest_user on User {\n  __typename\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "d93442567ae774426185e17b6cc441ec";
}

module.exports = ((node/*: any*/)/*: Query<
  readUpdatableQueryEXPERIMENTALTestUpdatableQuery$variables,
  readUpdatableQueryEXPERIMENTALTestUpdatableQuery$data,
>*/);