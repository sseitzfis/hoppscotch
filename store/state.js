export default () => ({
  postwoman: {
    settings: {
      PROXY_URL: "http://172.30.3.129:9159",
      PROXY_ENABLED: true
    }
  },
  request: {
    name: "Untitled request",
    method: "GET",
    uri: "",
    url: "http://v-xee-tools01.fis-gmbh.de:12345",
    path: "/apiuebung/einstieg",
    auth: "None",
    httpUser: "",
    httpPassword: "",
    passwordFieldType: "password",
    bearerToken: "",
    headers: [],
    params: [],
    bodyParams: [],
    rawParams: "",
    rawInput: false,
    requestType: "",
    contentType: "",
  },
  gql: {
    url: "https://rickandmortyapi.com/graphql",
    headers: [],
    schema: "",
    variablesJSONString: '{ "id": "1" }',
    query: `query GetCharacter($id: ID!) {
  character(id: $id) {
    id
    name
  }
}`,
    response: "",
    schemaIntrospection: "",
  },
  theme: {
    collapsedSections: [],
  },
  oauth2: {
    tokens: [],
    tokenReqs: [],
    tokenReqSelect: "",
    tokenReqName: "",
    accessTokenName: "",
    oidcDiscoveryUrl: "",
    authUrl: "",
    accessTokenUrl: "",
    clientId: "",
    scope: "",
  },
  name: "Hoppscotch",
})
