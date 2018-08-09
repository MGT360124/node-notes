const MongoClient = require("mongodb").MongoClient;
const ip = require("ip");
const port = 27017;
const url = `mongodb://127.0.0.1:${port}`;

// 连接数据库
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) { throw err; };
    //创建数据库mgt360124
    const mgt360124 = db.db("mgt360124");
    //创建文档 site
    const site = mgt360124.collection("site")
    //创建文档 images
    const images = mgt360124.collection("images")
    const obj = { name: "maoguotao", url: "www.mymgt360124.cn" };

    //插入一个文档
    site.insertOne(obj, (err, res) => {
        if (err) throw err;
        console.log("文档插入成功");
        // console.log(res);
    });
    const objs = [
        { name: "maoguotao", url: "www.mymgt360124.cn" },
        { name: "maoshuqin", url: "www.mymsq360124.cn" },
        { name: "mgt360124", url: "www.mymgt360124.cn" }
    ];

    // 插入多个文档
    // images.insertMany(objs, (err, res) => {
    //    if(err) throw err;
    //    console.log("多个文档插入成功");
    //    console.log("插入的文档的个数");
    //    console.log(res);
    //    console.log(res.insertedCount)
    //    db.close()
    // });



    //更新一条文档
    // 查询条件
    const whereStr = { name: "maoguotao" }
    const updateStr = { $set: { url: "http://www.mymgt360124.cn" } }
    images.updateOne(whereStr, updateStr, (err, res) => {
        if (err) throw err;
        console.log("文档更新成功");
    })
    //更新多条数据
    images.updateMany(whereStr, updateStr, (err, res) => {
        if (err) throw err;
        console.log(res + "条文档更新成功");
    })



    // 删除一条文档
    images.deleteOne(whereStr, (err, res) => {
        if (err) throw err;
        console.log("文档删除成功");
    })
    // 删除多条文档
    images.deleteMany(whereStr, (err, res) => {
        if (err) throw err;
        console.log("文档删除成功");
    })


    // 查询文档、查询指定类型的文档
    images.find(whereStr).toArray((err, res) => {
        // 返回集合中所有数据
        if (err) throw err;
        console.log("查询成功");
        console.log(res);
    });

    db.close();
})

