// let cards = document.getElementById("cards");
//
// async function cardsGet (){
//     let loader = true
//     try{
//         if(loader){
//             console.log("Loading...");
//             let res = await fetch("https://jsonplaceholder.typicode.com/");
//             let data = await res.json()
//             console.log(data)
//         }
//     }catch(err){
//         console.log(`Failed: ${err}`);
//     }finally{
//         loader = false
//         console.log("Tugadi")
//     }
// }
// cardsGet();

let cards = document.getElementById("cards");
async function cardsGet (id){
    let loader = true
    try{
        if(loader){
            console.log("Loading cards...")
            cards.innerHTML = `Loading cards...`
        }
        let response = await fetch(id,{method:"GET"});
        let json = await response.json();
        cards.innerHTML = "";
        render(json, cards);
    }catch(err){
        console.log(err);
    }finally{
        loader = false;
        console.log("End cards!");
    }
}
cardsGet(`https://api.escuelajs.co/api/v1/products`);

function render(data, wrapper){
    data.forEach((card)=>{
        let div = document.createElement("div");
        div.classList.add("w-[500px]", "rounded-xl", "shadow", "shadow-gray-50", "p-2");
        div.innerHTML = `
        <p>Tartib raqami: ${card.id}</p>
        <p>Mahsulot nomi: ${card.title}</p>
        <p>Mahsulot turi: ${card.slug}</p>
        <p>Mahsulot narxi: ${card.price}$</p>
        <p>Mahsulot haqida: ${card.description}</p>
        `
        wrapper.appendChild(div);
    })
}