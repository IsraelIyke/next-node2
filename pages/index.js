export default function Home() {
  fetch("http://localhost:8000/results")
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return;
}
