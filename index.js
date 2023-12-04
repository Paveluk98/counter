let num = 0;
// Use let instead of const because the number will change after clicking on + or - button.

const valueEl = document.querySelector(".value");
/* 
const decreaseBtnEl = document.querySelector(".btn-danger");
const resetBtnEl = document.querySelector(".btn-secondary");
const increaseBtnEl = document.querySelector(".btn-success");
 */
const btnEls = document.querySelectorAll(".btn");
// console.log(btnEls);
// .querySelectorAll method returns all the elements in the document that matches the specified CSS selector, and returns it as a static NodeList object. The NodeList object represents a collection of nodes and the nodes can be accessed with index numbers, with index starting at 0. We can loop through the buttons in this NodeList using the .forEach method.

btnEls.forEach((btn) => {
  // console.log(btn);

  btn.addEventListener("click", (event) => {
    // console.log(event.currentTarget.classList);

    const styles = event.currentTarget.classList;

    if (styles.contains("btn-danger")) {
      num--;
    } else if (styles.contains("btn-success")) {
      num++;
    } else {
      num = 0;
    }
    valueEl.textContent = num;
    // .textContent property sets or returns text content of the specified node. It is similar to the .innerText property however there are differences. .textContent returns the text content of all the elements while .innerText returns the contents of all the elements.

    if (num > 0) {
      valueEl.style.color = "green";
    } else if (num < 0) {
      valueEl.style.color = "red";
    } else {
      valueEl.style.color = "black";
    }
  });
});
