/*
 * Demo backend.
 * For more info on response types, see https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger#fulfillment
 */
window.addEventListener('df-messenger-loaded', (event) => {
    const messenger = document.querySelector('df-messenger');
    messenger.registerFakeService({
      fakeFetch(requestBody, endpointUri) {
        console.log('requesttt', requestBody, endpointUri);
        const parsedRequest = JSON.parse(requestBody);
        const query =
          parsedRequest?.queryInput?.text?.text ??
          parsedRequest?.queryInput?.event?.event;
        responseMap = {
          "button": {
            "type": "button",
            "icon": {
              "type": "chevron_right",
              "color": "#FF9800"
            },
            "text": "Button example",
            "anchor": {
              "href": "https://example.com"
            },
          },
          "image": {
            "type": "image",
            "rawUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/242px-Python-logo-notext.svg.png",
            "accessibilityText": "Example logo"
          }
        };
        const response = JSON.stringify({
          queryResult: {
            responseMessages: [
              query in responseMap ? 
              {payload: {richContent: [[responseMap[query]]]}} : {text: {text: ["That query is not part of the demo."]}},
          ]}});
        return Promise.resolve(new Response(response, {
          status: 200,
          statusText: 'OK',
        }));
      },
    });
});
