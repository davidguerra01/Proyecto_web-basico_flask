from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder="templates",
    static_folder="static",
    static_url_path="/static",
)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/usuario/<nombre>")
def usuario(nombre):
    return f"Bienvenido, {nombre}!"

if __name__ == "__main__":
    print("root_path:", app.root_path)
    print("static_folder:", app.static_folder)
    app.run(debug=True)
