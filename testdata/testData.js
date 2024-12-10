export const alertData = {
    publicKey: "6C6LYwDgdaFFqajs1rpXFPFS9rczXUCsvgYiBuNtQBaZ",
    transactions: [
        {
            "payload": "yvqEMkLt84sks3bcA9gxLcGnrrEHJkxRiShzzgaRyj6iE24putDn7mgzQc2AgUu4LvXXnvDpTyWrotXG5uZ9aF6maVuCSp7BVnZeiQDUnGbiDBKD98Bz8wNXhK2uYVB1VFCPaUxmPKbH5xyHxomDKboR73jxq27PzauzamwEk82kfnDFezRnGFcTVByggHjreiRvJwtUS1VUpNfh8xG1wCY4t74ppXydphsPPDFh7TPTfjAJheQVo92AeGv6bpYCKoVe2vxHT5GTByuFGBPxxHzP2DUf7H94DASLYNUivihL8MjPpQd2rLspFWKbcPUpn9Ed2CyPBU7VbEVzvPDS1rc3pQaPSRYmc85ESkahzkovUGFeanscz",
            "type": "wireTransaction"
        }
    ],
    network: "mainnet",
    host: "google.com",
    method: "signAllTransactions",
    language: "en",
    currency: "usd"
};
export const noAlertData = {
    publicKey: "6C6LYwDgdaFFqajs1rpXFPFS9rczXUCsvgYiBuNtQBaZ",
    transactions: [
        {
            "payload": "XA722NZHBfvS3g781s13SZ1rEZw8HdutpDsbKV6c8KKLMLivQNc75pdvPQibxFkfGZkZNg3dTaikQFsezB7VAZkhxXg5Z9jg6ZDmyVJqAjdzScTH7nsQ28skzWQdmpPMr4dAwdxo42RWy98KgJ93DeJuTzuW5zuiyWL3fMYb6AEKDjhYkZNZosPxfyGGVwmfVYmodjsxEY8s7rjAHKaBnyTp8vtHeQJejY27ep14Rf3DeeiHhZE1mDLm1F1dj8dF3pUqbFtq4ayxkRfU6PGLdNHz492WR4JdBz9crs6AEDCHp5uaFHWEeNmAX1zoEA5U1qyd7KiiamcsJNPc5NVEMJVzpXesse4rTywhm1GRrjzWz4s4wEteSDwL5CpTzSzoSXvDAmdAcZR29Lmpbtqyp7xFvUqrLJTGxVHrFSqkJsBmSS6ksQtE5PJU9x6K",
            "type": "wireTransaction"
        }
    ],
    network: "mainnet",
    host: "google.com",
    method: "signAllTransactions",
    language: "en",
    currency: "usd"
};
export const failedResponse400 = {
    publicKey: "6C6LYwDgdaFFqajs1rpXFPFS9rczXUCsvgYiBuNtQBaZ",
    transactions: [
        {
            "payload": "XA722NZHBfvS3g781s13SZ1rEZw8HdutpDsbKV6c8KKLMLivQNc75pdvPQibxFkfGZkZNg3dTaikQFsezB7VAZkhxXg5Z9jg6ZDmyVJqAjdzScTH7nsQ28skzWQdmpPMr4dAwdxo42RWy98KgJ93DeJuTzuW5zuiyWL3fMYb6AEKDjhYkZNZosPxfyGGVwmfVYmodjsxEY8s7rjAHKaBnyTp8vtHeQJejY27ep14Rf3DeeiHhZE1mDLm1F1dj8dF3pUqbFtq4ayxkRfU6PGLdNHz492WR4JdBz9crs6AEDCHp5uaFHWEeNmAX1zoEA5U1qyd7KiiamcsJNPc5NVEMJVzpXesse4rTywhm1GRrjzWz4s4wEteSDwL5CpTzSzoSXvDAmdAcZR29Lmpbtqyp7xFvUqrLJTGxVHrFSqkJsBmSS6ksQtE5PJU9x6K",
            "type": "wireTransaction"
        }
    ],
    network: "",
    host: "google.com",
    method: "signAllTransactions",
    language: "en",
    currency: "usd"
};
export const constants = {
    action: 'block',
    severity: 'error',
    key: 'malicious-blocked',
    title: 'Malicious transaction blocked',
    message: 'Signing this transaction could have resulted in the loss of your assets. Your funds are secure, but please exercise caution with your app choices.',
    noAlertAction: 'none',
};