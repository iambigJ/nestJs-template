// import * as grpc from "@grpc/grpc-js";
// import { loadSync } from "@grpc/proto-loader";
//
//
// const PROTO_PATH = "../../proto/random.proto"
// const options = {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// };
import path from 'path'
const result = path.resolve(path.join('folder', 'subfolder', 'file.txt'));
console.log(result)
// const newsProto = loadPackageDefinition(packageDefinition);

// const server = new Server();
// const news = [
//     { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
//     { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
// ];
//
// const getAllNews = (_, callback) => {
//     callback(null, news);
// };
//
// server.addService(newsProto.NewsService.service, { getAllNews });
//
// server.bindAsync("127.0.0.1:50051", ServerCredentials.createInsecure(), async (error, port) => {
//     if (error) {
//         console.error(`Error starting server: ${error}`);
//     } else {
//         console.log(`Server running at http://127.0.0.1:${port}`);
//         await server.start();
//     }
// });