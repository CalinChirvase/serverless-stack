const dev = {
  STRIPE_KEY: "pk_test_51IZ2BaCRFVDhiQceUNApPo7iob4TP3cQQZn15RPo3olhXbHAyWJvXISW1krOu7QDHr6dcQ2nKsbtlYynxIMkSc1V00acUkzekK",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-13qg42vlq3e7n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ls8w63krig.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7DR6TXihe",
    APP_CLIENT_ID: "75v4iskbnggfbc15u1db58ef4c",
    IDENTITY_POOL_ID: "us-east-1:8a8853ab-95fa-401d-9fa2-726c5bd9ed85"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IZ2BaCRFVDhiQceUNApPo7iob4TP3cQQZn15RPo3olhXbHAyWJvXISW1krOu7QDHr6dcQ2nKsbtlYynxIMkSc1V00acUkzekK",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1pc7gdzf51hl1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v5zou5ghn0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ko6BRIx3k",
    APP_CLIENT_ID: "4qdjs1bg75hsvmn9600ukggar7",
    IDENTITY_POOL_ID: "us-east-1:602f5f94-f157-4b4d-847e-f6bcb5cd9fc8"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;