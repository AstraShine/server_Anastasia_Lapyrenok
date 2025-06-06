fetch ('http://www.cbr-xml-daily.ru/daily_json.js')
.then ( (req) => {
    return req.json()
})
.then ( (data) => {
    const root = document.getElementById('data');
    const arr = data.Valute;
    console.log(arr);
    for (key in arr)  
        {
            const p = document.createElement('p');
            p.textContent = `${key}: ${arr[key].Name}; ${arr[key].Value}`;
            root.appendChild(p);
        }          
})
.catch ( (err) => {
    console.log(err)
});
