let countryList = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "NOK": "BV",
    "BWP": "BW",
    "BYR": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CYP": "CY",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "ECS": "EC",
    "EEK": "EE",
    "EGP": "EG",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LTL": "LT",
    "LVL": "LV",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MTL": "MT",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "XPF": "NC",
    "NGN": "NG",
    "NIO": "NI",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SKK": "SK",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "STD": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW"
};
const selectEls = document.querySelectorAll(`select`);
const getExchangeRateBtn = document.getElementById(`btn`);
const fromCurrency = document.getElementById(`from`);
const toCurrency = document.getElementById(`to`);
const resultEl = document.getElementById(`result`);
const switchCurrenciesBtn = document.getElementById(`switch-btn`);
/* load initial options */
(() => {
    selectEls.forEach((selectEl, index) => {
        let options = ``;
        for (let currency in countryList) {
            /* make usd selected by default in the first select*/
            let selected;
            if (index === 0) selected = currency === 'USD' ? "selected" : "";
            if (index === 1) selected = currency === 'EGP' ? "selected" : "";

            options += `<option value="${currency}" ${selected}>${currency}</option>`;
        }
        selectEl.innerHTML = options;
        selectEl.addEventListener(`change`, () => getFlag(selectEl));
    });
})();

/* functions */
const switchCurrencies = () => {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp
    selectEls.forEach(selectEl=>getFlag(selectEl))
    getExchangeRate()
};
const fetchRate = (amountValue) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "5tcwa6UfJuiH3WJANZHYZBtTsi2vB530");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency.value}&from=${fromCurrency.value}&amount=${amountValue}`, requestOptions)
        .then(res => res.json())
        .then(res => {
            const { result, query: { from, to, amount } } = res;
            resultEl.textContent = `${amount} ${from} = ${result} ${to}`;
        })
        .catch(error => {
            console.log('error', error);
            resultEl.textContent = `Ooops, something went wrong`
        });
};
const getExchangeRate = () => {
    resultEl.textContent = `Waiting...`;
    const amount = document.getElementById(`amount`);
    let amountValue = amount.value;
    if (amountValue === "" || amountValue === "0") {
        amount.value = '1';
        amountValue = '1';
    }
    fetchRate(amountValue);
};
const getFlag = (selectEl) => {
    const img = selectEl.parentElement.querySelector(`img`);
    img.src = `https://flagcdn.com/48x36/${countryList[selectEl.value].toLowerCase()}.png`;
};
/* event listeners */
getExchangeRateBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    getExchangeRate();
});
switchCurrenciesBtn.addEventListener(`click`,switchCurrencies)