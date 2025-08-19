console.log("Flask starter listo ✅");

const pingLink = document.getElementById("pingLink");
if (pingLink) {
  pingLink.addEventListener("click", async (e) => {
    e.preventDefault();
    await pingAndShow();
  });
}

const btnPing = document.getElementById("btnPing");
if (btnPing) {
  btnPing.addEventListener("click", pingAndShow);
}

async function pingAndShow() {
  const out = document.getElementById("pingOut");
  if (!out) return;

  out.textContent = "Llamando /api/ping ...";
  try {
    const res = await fetch("/api/ping");
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = "Error: " + err.message;
  }
}