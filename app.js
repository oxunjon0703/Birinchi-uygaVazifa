const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req, res) => {
    if (req.url === "/groups" && req.method === "GET") {
        const data = JSON.parse(await fs.readFile("groups.json", "utf8"));
        const data1 = JSON.parse(await fs.readFile("teacher.json", "utf8"));
        res.setHeader('Content-Type', 'application/json');
        for (let i = 0; i < data.length; i++) {
            if(data[i].teacher_id === 1) {
                const data2 = data;
                data2[0].teacher_id = data1[0];
                data2[1].teacher_id = data1[1];

                res.end(JSON.stringify(data2));
            }
            if(data[i].teacher_id === 2) {
                const data2 = data;
                data2[0].teacher_id = data1[1];
                data2[1].teacher_id = data1[0];

                res.end(JSON.stringify(data2));
            };
        };
    };
});

server.listen(8000, () => {
    console.log(8000);
});