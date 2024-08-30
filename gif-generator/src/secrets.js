const secrets = {
    'API': 'INSERT KEY HERE'
};


export default function getSecrets(type) {
    if (secrets[type]) {
        return secrets[type];
    } else {
        throw new Error('Secrets not found');
    }
}