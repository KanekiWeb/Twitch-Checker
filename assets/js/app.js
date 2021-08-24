function checker() {
    var input = document.getElementById("tokens").value.split("\n");

    valid = 0;
    invalid = 0;
    unknow = 0;

    input.forEach(token => {
        if(token != "") {
            if (token.length == 30) {
                json = [
                    {
                        "operationName": "BitsCard_Bits",
                        "variables": {},
                        "extensions": {
                            "persistedQuery": {
                                "version": 1, "sha256Hash": "fe1052e19ce99f10b5bd9ab63c5de15405ce87a1644527498f0fc1aadeff89f2"
                            }
                        }
                    },
                    {
                        "operationName": "BitsCard_MainCard",
                        "variables": {
                            "name": "679087745",
                            "withCheerBombEventEnabled": false 
                        },
                        "extensions": {
                            "persistedQuery": {
                                "version": 1, "sha256Hash": "88cb043070400a165104f9ce491f02f26c0b571a23b1abc03ef54025f6437848"
                            }
                        }
                    }
                ]
    
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://gql.twitch.tv/gql', true);
                xhr.setRequestHeader('Client-ID', `kimne78kx3ncx6brgo4mv6wki5h1ko`)
                xhr.setRequestHeader('Authorization', `OAuth ${token}`)
                xhr.onload = function () {
                    if (xhr.response.includes("token is invalid.")) {
                        invalid++;
                        document.getElementById("invalid-count").innerHTML = invalid;
                        document.getElementById("invalid-tokens").innerHTML +=
                            `<div class="token-checked token-checked-invalid"><a style="color: #E74C3C;">Invalid</a> | ${token}</div>`
    
                    }
                    else {
                        valid++;
                        document.getElementById("valid-count").innerHTML = valid;
                        document.getElementById("valid-tokens").innerHTML +=
                            `<div class="token-checked token-checked-valid"><a style="color: #00BC8C;">Valid</a> | ${token}</div>`
    
                    }
                }
                xhr.send(json);
    
            } else {
                unknow++;
                document.getElementById("unknow-count").innerHTML = unknow;
                document.getElementById("unknow-tokens").innerHTML +=
                    `<div class="token-checked token-checked-unknow"><a style="color: #F39C12;">Retry</a> | ${token}</div>`
            }
        }
    });
}