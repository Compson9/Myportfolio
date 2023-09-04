import { createClient } from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
projectId: 'crjf3kn2',
dataset: "production",
apiVersion: "2023-08-24",
useCdn: true,
ignoreBrowserTokenWarning: true,
token: 'sk45sAbtuJX9gjKAX7Y7gYly2hLMLvQIXztUR3rFQUffvxI6xUnJp1A9eJQLNg8HfTHuf0Lvh1VOMC8CY0BzRweAV81dnaKsmYBoFDZLc3Sio139kuZ5OuJrxBi6EPqxhI4PzxIqdVzPTHeRrWmYWAwO2rch5PMRifC8QCstjgO06j2o0Cl5',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
