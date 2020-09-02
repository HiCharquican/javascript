(()=>{
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();


        
    xhr.addEventListener("readystatechange", e =>{
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status <= 299){
            let json = JSON.parse(xhr.responseText);

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `

                $fragment.append($li);

            });

            $xhr.append($fragment);
        }else{
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Fetch Error: ${xhr.status}: ${message}`;
        }
        
        //console.log("XHR: Este mensaje cargará de cualquier forma");
    })

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.send();

})();

(()=>{
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>res.ok ? res.json() : Promise.reject(res))
    .then(json =>{
        json.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `
            $fragment.append($li);
        });

        $fetch.append($fragment);
    })
    .catch(err =>{
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Fetch Error: ${err.status}: ${message}`;
    })
    //.finally(()=> console.log("Fetch: Esto se ejuta de todas formas"));
})();

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();
            
            if (!res.ok) throw {status: res.status, statusText: res.statusText}
            
            
            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `
                $fragment.append($li);
            });
        
            $fetchAsync.append($fragment);  
        }catch(err){
            let message = err.statusText || "Ocurrio un error"
            $fetchAsync.innerHTML = `Fetch Async Error: ${err.status} ${message}`;
        }finally{
            //console.log("Fetch Async : Mensaje de todas formas");
        }
        
    }

    getData();

})();

(()=>{
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        let json = res.data;

        json.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `
            $fragment.append($li);
        });

        $axios.append($fragment);
    })
    .catch(err =>{
        let message = err.response.statusText || "Ocurrio un error"
            $axios.innerHTML = `Axios Error: ${err.response.status} ${message}`;
    })
    .finally(()=>{
        //console.log("Axios : Mensaje de todas formas");
    })
})();

(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            let json = await res.data;

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `
                $fragment.append($li);
            });

            $axiosAsync.append($fragment);
            
        } catch (err) {
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Axios Async Error: ${err.response.status} ${message}`;
        }finally{
            console.log("Axios Async : Mensaje de todas formas");
        }
    }

    getData();
})();