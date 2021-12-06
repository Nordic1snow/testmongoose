# mongoose使用

## 1.安装

创建node.js项目后，安装mongoose:npm install mongoose

要求已经安装并打开了mongodb数据库服务器。

## 2.使用流程

1）引入mongoose

const mongoose = require('mongoose');

2)连接数据库

mongoose.connect('mongodb://localhost/test');

其中test是数据库名

3）创建一个schema:

以下是mongoose所有合法的 SchemaTypes :

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128

**const schema={**

​    **name:String,**

​    **age: Number,**

​    **health:String**

**}**

创建的schema只有在创建model时才可以引用：mongoose.model('Cat', { name: String,schema });

monggoose有自己的基本数据类型定义：

创建的schema生效后，存储到数据库的数据必须遵守，否则不能存储，但系统没有原生的错误提示，只是存储一个空数据

4)创建一个model

const Cat = mongoose.model('Cat',schema);

**const Cat = mongoose.model('Cat', { name: String });**

5)写入数据库

kitty.save()

写入后数据集的名称：是定义model的第一个参数，并且进行了修改：保证是英文的复数形式 （dog->dogs   datas->datas )不区分大小写，全部用小写字母。

6）数据查找

model名.find({查询条件}，（callback(err,查询结果)=>{})

查询结果是一个Array,data[0]._doc是查询出的文档。