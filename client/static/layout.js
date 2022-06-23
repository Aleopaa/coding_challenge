const modal = document.querySelector("flex");
const title = modal.querySelector("title");
const yourname = modal.querySelector("yourName");
const yourstory = modal.querySelector("yourStory");

const fields = [
  { tag: "input", attributes: { type: "text", name: "title" } },
  { tag: "input", attributes: { type: "text", name: "name" } },
  { tag: "input", attributes: { type: "text", name: "body" } },
];

function renderNewPostForm() {
  title.textContent = "Add a Post";
  const form = document.createElement("form");
  fields.forEach((f) => {
    const field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => field.setAttribute(a, v));
    form.appendChild(field);
  });
  form.onsubmit = postPost;
  yourname.appendChild(form);
}
