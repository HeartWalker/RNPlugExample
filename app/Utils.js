
function Post(url, AccessToken = '', data = {}, resolve = () => { }, reject = () => { }) {
    //console.log("POST:" + url)
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            '.ASPXAUTH': AccessToken,
            'language': global.DefaultLangCurrency.CountryAbbreviation,
            'UserID': global.userID,
            'CurrencyName': global.DefaultLangCurrency.Currency,
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json()
        })
        .then(
            (responseData) => {
                console.log(url, responseData);
                resolve(responseData)
            },
            (responseData) => {
                console.log(url, responseData);
                reject(responseData)
            }
        )
        .catch((err) => {
                reject(err)
                console.log(err);
            }
        );
}
/**
 * Get 请求
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 */
function Get(url, AccessToken = '', resolve = () => { }, reject = () => { }) {
    //console.log("GET:" + url)
    let fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            '.ASPXAUTH': AccessToken,
            'language': global.DefaultLangCurrency.CountryAbbreviation,
            'CurrencyName': global.DefaultLangCurrency.Currency,
        },
    }
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json()
        })
        .then(
            (responseData) => {
                console.log(url, responseData);
                resolve(responseData)
            },
            (responseData) => {
                console.log(url, responseData);
                reject(responseData)
            }
        )
        .catch((err) => {
                console.log(err);
                reject(err)
            }
        );
}


export {
    Get,

}