export async function n8nConnection(body) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        const data = await fetch("https://celima.app.n8n.cloud/webhook-test/task", options);
        console.log(data);
        alert("automação disparada com sucesso verifique seu trelo/asana");
    }
    catch (error) {
        throw error;
    }
}
