/*
messages data. 
The messages will be like:
1. joke
2. "This joke was [jokeWas]" 
3. "I feel [feel]"
*/
const messages = {
    joke: [`Talk is cheap? Have you ever talked to a lawyer?`, `Why did the gym close down? It just didn't work out!`, `Where do fish sleep? In the riverbed.`, `What did one traffic light say to the other? Stop looking! I am changing!`],
    jokeWas: [`funny`, `annoying`, `irritating`, `insulting`, `good`, `ok`, `great`],
    feel: [`happy`, `angry`, `calm`]
};
 //picking up a random message from the arrays
const random = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

//prints the messages
const printMessages = () => {
    for (const messageType in messages){
        switch (messageType){
            case `joke`:
                console.log(random(messages.joke));
                break;
            case `jokeWas`:
                console.log(`This joke was ${random(messages.jokeWas)}!`);
                break;
            case `feel`:
                console.log(`I feel ${random(messages.feel)}.`);
        };
    };
};

printMessages();