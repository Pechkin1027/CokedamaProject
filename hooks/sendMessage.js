async function sendMessage(info) {
  try {
    const res = await fetch(`/api/contactUs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default sendMessage;
