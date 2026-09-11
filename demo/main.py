from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    items = ["deez"]  # Data to render server-side
    return render_template("template.html", items=items)

if __name__ == "__main__":
    app.run(debug=True)
