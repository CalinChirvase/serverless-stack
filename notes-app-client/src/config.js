const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload2021",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v5zou5ghn0.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6HUu3brWA",
    APP_CLIENT_ID: "1fi1m0b4sdetbainj2tvdvbt6e",
    IDENTITY_POOL_ID: "us-east-1:571485dd-ef60-4258-b3d5-22167c21e3c1",
  },
};

export default config;