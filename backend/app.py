from flask import Flask, render_template, jsonify


app = Flask(__name__,
            # 配置 render_template 方法的查找目录
            static_folder = "../dist/static",
            template_folder = "../dist")


# 这里在解决前端 'history' 路由模式下除首页外其他页面访问不到的 bug
@app.route('/', defaults = {'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


# 启动一个后端接口供前端访问
@app.route('/api/user')
def userinfo():
    userList = [{
        "id": 1,
        "name": "张三",
        "age": 20
    },{
        "id": 2,
        "name": "李四",
        "age": 19
    },{
        "id": 3,
        "name": "王五",
        "age": 18
    },{
        "id": 4,
        "name": "赵六",
        "age": 17
    }]
    return jsonify(userList)


if __name__ == '__main__':
    app.run(debug = True)
