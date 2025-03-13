export async function n8nConnection(body) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        const data = await fetch("https://lspaula.app.n8n.cloud/webhook-test/479138e2-e6c1-4bb1-b716-bed03865e246", options);
        console.log(data);
        alert("automação disparada com sucesso verifique seu trelo/asano");
    }
    catch (error) {
        throw error;
    }
}
