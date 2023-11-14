/*
 * Listen to the `df-response-received` event that is emitted whenever 
 * Dialogflow Messenger receives a response from the backend. 
 * Adjust the incoming rich element message to your needs.
 * This code removes the `subtitle` entry of an "info" element.
 * For more info on response types, see https://cloud.google.com/dialogflow/cx/docs/concept/integration/dialogflow-messenger#fulfillment
 */
window.addEventListener('df-response-received', (event) => {
    console.log(event.detail.messages);
    event.detail.messages
        .filter(message => message.type === 'rich')
        .forEach(message => {
            message.richElements
                .filter(richElement => richElement.type === 'info')
                .forEach(richElement => richElement.subtitle = '');
        });
  });