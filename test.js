fetch(
  "https://lspaula.app.n8n.cloud/webhook-test/479138e2-e6c1-4bb1-b716-bed03865e246",
  {
    method: "POST",
    body: JSON.stringify({ name: "lucas" }),
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((json) => json.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
