export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	apiGateway: {
	  URL: "https://6l9qruzqoi.execute-api.ap-southeast-1.amazonaws.com/prod",
	  REGION: "ap-southeast-1"
	},
	s3: {
	  BUCKET: "note-app-dev-uploads"
	},
  cognito: {
    USER_POOL_ID: "ap-southeast-1_SLbK5i3zX",
    APP_CLIENT_ID: "1ks11s9r4l2anifndq0k7frjsr",
		REGION: "ap-southeast-1",
		IDENTITY_POOL_ID: "ap-southeast-1:1ce7be2c-866c-49fc-ace2-ffaba7c2ab94",
  }
};
