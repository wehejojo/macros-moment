const textarea = document.getElementById("ingred");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
  let recipe = {
    title: "",
    ingr: [textarea.value]
  };

  try {
    const response = await axios.post("http://localhost:3000/getMoment", recipe);
    console.log(`calories : ${response.data.calories}`);
    console.log(`carbs    : ${response.data.totalNutrients.CHOCDF.quantity}`);
    console.log(`protein  : ${response.data.totalNutrients.PROCNT.quantity}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
});
