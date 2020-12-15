const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-ho2yu71a1ry"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tk7e4nzn5a.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_GBSFZMu9r",
    APP_CLIENT_ID: "49ij2cvk6mrhkg15r4lm5knbco",
    IDENTITY_POOL_ID: "us-east-1:aed4c96d-52e0-4b68-a706-56bd9227e67d"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-3nh2crg7bak"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nfqr7amdi1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hI1LmWNct",
    APP_CLIENT_ID: "2o1flcdi14frhcpets89n1hk4m",
    IDENTITY_POOL_ID: "us-east-1:d37e604a-28d5-4339-b25f-b371b307ea69"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

  export default config;