const CLIENT_ID = '631520802502-f3qsh510d54bvq7uv2c7gsl6h4ur1dma.apps.googleusercontent.com'; //для соединение с api
const SCOPES= ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me']; //для получения данных о пользователей

export default {
    authorize(params) {
        return new Promise((resolve, reject) => {
            gapi.auth.authorize(
                {
                    'client_id': CLIENT_ID,
                    'scope': SCOPES,
                    'immediate': params.immediate,
                    'cookie_policy': 'single_host_origin'
                },
                authResult => {//результат авторизации
                    if(authResult.error) {
                        return reject(authResult.error);
                    }

                    return gapi.client.load('task', 'v1', () => gapi.client.load('plus', 'v1',() => resulve() ) );
                }
            );
        });
    }
}
