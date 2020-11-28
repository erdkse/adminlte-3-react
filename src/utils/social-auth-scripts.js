const addScript = (id, src) => {
    return new Promise((resolve, reject) => {
        try {
            const element = document.getElementById(id);
            if (element) {
                return resolve(true);
            }
            const script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('id', id);
            script.setAttribute('src', src);
            script.setAttribute('crossorigin', 'anonymous"');
            script.addEventListener('load', resolve);
            script.addEventListener('error', () =>
                reject(new Error(`Error loading ${id}.`))
            );
            script.addEventListener('abort', () =>
                reject(new Error(`${id}  loading aborted.`))
            );
            document.getElementsByTagName('head')[0].appendChild(script);
        } catch (error) {
            return Promise.reject(error);
        }
        return Promise.resolve('Success');
    });
};

export const addFacebookScript = () => {
    const id = 'facebookAuth';
    const src = 'https://connect.facebook.net/en_US/sdk.js';

    return addScript(id, src);
};

export const addGoogleScript = () => {
    const id = 'googleAuth';
    const src = 'https://apis.google.com/js/api.js';
    return addScript(id, src);
};

// export const addLinkedInScript = () => {
//   const id = 'linkedinAuth';
//   const src = '//platform.linkedin.com/in.js?async=true';

//   return addScript(id, src);
// };
