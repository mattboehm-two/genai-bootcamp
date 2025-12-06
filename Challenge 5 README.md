I thought I'd try out using a generative conversational agent for this assignment. Unfortunately, I ran into some issues and realized far too late that I would have been better off coding up a service from scratch.

snowbot contains an express server with a flask frontend. I started with some generated code for this and then customized it.

The central chat window does not work; I did not manage to set up oauth for it and belatedly realized it would be a lot more work to integrate it into the conversational agent APIs. The chat window on the bottom right is a Conversational Messenger embed and was working for me.

I defined 3 tools for the agent:

* The FAQ datastore
* An OpenAPI tool for the geocoding API
* An OpenAPI tool for a cloud run function that queries that National Weather Service API

For testing, I implemented 4 test cases in the conversational agent interface. Some of these test cases are failing though, as I couldn't figure out a way to make the response/tool call expectations fuzzy enough for the tests to consistently pass

For prompt filtering, model armor's floor settings and globally enabled policies provide some functionality. I also blacklisted some words in the Agent settings, and set safety configurations there. 

The agent is configured to log prompts/responses.
