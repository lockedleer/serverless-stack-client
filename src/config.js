const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "ssr-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://nfqr7amdi1.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_bhQxgH2KS",
      APP_CLIENT_ID: "1qmal0sh33cj6lmun8324e5jv0",
      IDENTITY_POOL_ID: "us-east-1:ca37aa1d-8d1e-4e9f-9951-a9e30395b7a5",
    },
  };

  export default config;