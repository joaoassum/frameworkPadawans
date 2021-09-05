var btn = document.getElementById('botao').addEventListener("Click", listar);
var tbody = document.querySelector('.tbody');
var con = 0;

function listar() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(function(response){
        return response.json();
    })
    .then((element) => {
        for(let i = 0; i < element.length; i++) {
            tbody.innerHTML += `
            <tr>
                <td>
                    UserID:${element[con].userId}
                </td>
                <td>
                    ID:${element[con].id}
                </td>
                <td>
                    Titulo:${element[con].title}
                </td>
            </tr>
            `
            con+=1;
        }
    });
}