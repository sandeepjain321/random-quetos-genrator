let url = "https://api.quotable.io/quotes/random";

async function quotes() {
  try {
    let res = await axios.get(url);
    return res.data[0].content;
  } catch (e) {
    console.log("error-", e);
    return "page was not found";
  }
}

let button = document.querySelector("button");
let para = document.querySelector("#result");

button.addEventListener("click", async () => {
  let result = await quotes();
  console.log(result);
  para.innerHTML = result;
});
